import React from "react";
import '../css/style.css';
import '../css/index.css';
import { useNavigate } from "react-router-dom";


function App() {

  const movePage = useNavigate();

  function goLogin(){
    movePage('/login');
  }

  return (
      <div className="main"> 
        {/* <img src="./image/bg_logo.png" alt="" className="background-img" /> */}
        <div className="slogans">
          <div className="app-name">COTE'IS</div>
          <div className="app-title">당신의 코딩테스트를 위한<br />올인원 솔루션</div>
        </div>
        <div className="buttons">
          <button className="login-button" onClick={goLogin}>로그인</button>
          <button className="join-button">회원가입</button>
          <div className="label">간편 로그인</div>
          <div className="login-icons">
            <div className="kakao-icon login-icon"><img src="./image/kakao_icon.png" alt=""/></div>
            <div className="naver-icon login-icon"><img src="./image/naver_icon.png" alt="" /></div>
            <div className="google-icon login-icon"><img src="./image/google_icon.png" alt="" /></div>
            <div className="github-icon login-icon"><img src="./image/github_icon.png" alt="" /></div>
          </div>
        </div>
      </div>
  );
}

export default App;
