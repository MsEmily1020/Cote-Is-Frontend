import React from "react";
import styles from '../css/Style.module.css'; // CSS 모듈을 가져옴
import { useNavigate } from "react-router-dom";


function App() {

  const movePage = useNavigate();

  function goLogin(){
    movePage('/login');
  }

  return (
      <div className={styles.main}>
      <div className={styles.slogans}>
        <div className={styles['app-name']}>COTE'IS</div>
        <div className={styles['app-title']}>당신의 코딩테스트를 위한<br />올인원 솔루션</div>
      </div>
      <div className={styles.buttons}>
        <button className={styles['login-button']} onClick={goLogin}>로그인</button>
        <button className={styles['join-button']}>회원가입</button>
        <div className={styles.label}>간편 로그인</div>
        <div className={styles['login-icons']}>
          <div className={styles['kakao-icon']}><img src="./image/kakao_icon.png" alt="" /></div>
          <div className={styles['naver-icon']}><img src="./image/naver_icon.png" alt="" /></div>
          <div className={styles['google-icon']}><img src="./image/google_icon.png" alt="" /></div>
          <div className={styles['github-icon']}><img src="./image/github_icon.png" alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
