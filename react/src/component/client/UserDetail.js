import React, { useEffect, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserDetailChart from './UserDetailChart';
import UserDetailGame from './UserDetailGame';
import { dbService } from '../../fbase';
import UserDetailWinningRate from './UserDetailWinningRate';
import UserDetailRankingRate from './UserDetailRankingRate';

const UserDetail = ({ allUsersByTime, setIsDetailOn, userDetailTarget }) => {
    const [chartMode, setChartMode] = useState('rating')
    const [period, setPeriod] = useState('30')
    const [userMatch, setUserMatch] = useState([])
    // const userName = userDetailTarget.name

    userMatch.sort(function(a, b) {
        return b.date - a.date
    })
    
    // 해당유저의 경기기록만 가져오기
    // const userMatch = allGame.filter(el => 
    //     el.winners.includes(userName) || el.losers.includes(userName)).sort(function(a, b) {
    //         return b.date - a.date
    //     }
    // )

    const info = (
        <>
            <div className="detail--profile">
                <img src={userDetailTarget.attachmentUrl} alt="detail profile" />
            </div>
            <div>
                <span className="detail__name">{userDetailTarget.name}</span>
                <span className="detail__department">{userDetailTarget.department}과</span>
                <span className="detail__status">{userDetailTarget.studentid}학번 / {userDetailTarget.status}</span>
            </div>
        </>
    )

    function closeDetail() {
        setIsDetailOn(false)
    }

    function periodHandler(e) {
        setPeriod(e.target.dataset.period)
    }

    function chartModeHandler(e) {
        setChartMode(e.target.dataset.mode)
    }

    const periodFilter = (
        <>
        <div className="button button--userDetail" onClick={periodHandler} data-period="10">10일</div>
        <div className="button button--userDetail" onClick={periodHandler} data-period="30">30일</div>
        <div className="button button--userDetail" onClick={periodHandler} data-period="60">60일</div>
        </>
    )

    const chartFilter = (
        <div className="dropdown dropdown--userDetail">
          <div className="dropdown--selected">
            <span className="selected">{chartMode === 'rating' ? '점수' : '순위'}</span>
            <FontAwesomeIcon icon={faCaretDown}/>
          </div>
          <ul className="dropdown--list">
            <li className="dropdown--list__item" onClick={chartModeHandler} data-mode="rating">점수</li>
            <li className="dropdown--list__item" onClick={chartModeHandler} data-mode="ranking">순위</li>
          </ul>
        </div>
    )

    useEffect(() => {
        dbService.collection('user').doc(userDetailTarget.name).collection('game_record').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const userMatchObj = {
                    date: doc.data().date,
                    loserRatingAfter: doc.data().loserRatingAfter,
                    losers: doc.data().losers,
                    ratingChange: doc.data().ratingChange,
                    winnerRatingAfter: doc.data().winnerRatingAfter,
                    winners: doc.data().winners
                }
                setUserMatch(userMatch => [...userMatch, userMatchObj])
            })
        })
    }, [userDetailTarget])

    return (
        <div className="detailContainer">
            <div className="top">
                <div className="top--left">
                    {info}
                </div>
                <div className="top--circleRate winningRate">
                    <UserDetailWinningRate userDetailTarget={userDetailTarget} />    
                </div>
                <div className="top--circleRate rankingRate">
                    <UserDetailRankingRate allUsersByTime={allUsersByTime} userDetailTarget={userDetailTarget} />
                </div>
            </div>
            <div className="bottom">
                <div className="bottom--left">
                    {periodFilter}
                    {chartFilter}
                    <UserDetailChart chartMode={chartMode} period={period} allUsersByTime={allUsersByTime} userDetailTarget={userDetailTarget} userMatch={userMatch} />
                </div>
                <div className="bottom--right">
                    <UserDetailGame userMatch={userMatch} />
                </div>
            </div>
            <FontAwesomeIcon icon={faTimes} className="close" onClick={closeDetail}/>
        </div>
    );
}

export default UserDetail;