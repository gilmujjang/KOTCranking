import { useContext, useEffect, useState } from 'react'
import { authService, firebaseInstance } from '../../fbase'
import classNames from 'classnames'
import styles from '../css/Header.module.css'
import UserObjContext from '../../contextAPI/UserObjContext'

export default function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [userObj, setUserObj] = useContext(UserObjContext)

  const onGoogleSignIn = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);

    setIsSignedIn(true)
  };
  
  const onGoogleSignOut = () => {
    authService.signOut().then(() => {
      // sign-out successful.
      setIsSignedIn(false)
    }).catch((error) => {
      // An error happended.
      console.log(error.code)
      console.log(error.message)
    })
  }

  useEffect(() => {
    if(Object.keys(userObj).length === 0) {setIsSignedIn(false)}
    else if(Object.keys(userObj).length !== 0) {setIsSignedIn(true)}
  }, [])

  return (
    <div className={styles.header}>
      <div className={classNames({["container__index"]: true, [styles.container__index__header]: true})}>
        <h1 className={styles.logo}>가즈아</h1>
        {
        isSignedIn ?
        <ul>
          <li className={styles.name}>도킹 완료</li>
          <li className="button__index" onClick={onGoogleSignOut}>Sign out</li>
        </ul>
        :
        <ul>
          <li className="button__index" onClick={onGoogleSignIn}>Sign in with Google</li>
        </ul>
        }
      </div>
    </div>
  )
}