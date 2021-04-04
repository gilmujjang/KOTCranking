import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserDetail = ({ allUsers, setIsDetailOn }) => {
    
    const info = () => {
        <>
            <div className="사진">
                {/* <img src={} alt="detail profile"></img> */}
            </div>
            <div>
                {/* 이름 */}
                {/* 학과 */}
                {/* 학번 */}
            </div>
        </>
    }

    function closeDetail(e) {
        setIsDetailOn(false)
    }

    return (
        <div className="detailContainer">
            <div className="top">
                <div className="top--left">
                    {info}
                </div>
                <div className="top--right">
                    {/* 승패 퍼센티지 */}
                    {/* mmr 퍼센티지 */}
                </div>
            </div>
            <div className="bottom">
                {/* 그래프 */}
            </div>
            <FontAwesomeIcon icon={faTimes} className="close" onClick={closeDetail}/>
        </div>
    );
}

export default UserDetail;