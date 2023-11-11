import React, { useState } from 'react';
import styles from '../css/Login.module.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';  

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL; 
      const response = await axios.post(`/login`, { 
        "userId": username, 
        "userPw": password });

      console.log('로그인 성공:', response.data);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
    
  };

  const movePage = useNavigate();

  function goJoin() {
    movePage('/join');
  }

  return (
    <div className={styles['main']}>
    <div className={styles['login-container']}>
      <div className="slogans">
        <h1>COTEIS</h1>
      </div>
      <form action="/login" method='POST' className={styles.forms}>
        <div className={styles['input-container']}>
          <div className={styles['input-label']}>아이디</div>
          <input 
            type="text" 
            className={styles['input-field']}
            placeholder="아이디를 입력하세요" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles['input-container']}>
          <div className={styles['input-label']}>비밀번호</div>
          <input 
            type="password" 
            className={styles['input-field']}
            placeholder="비밀번호를 입력하세요" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className={styles.buttons}>
        <button 
          className={styles['login-button']}
          onClick={handleLogin}
        >로그인</button>
        <div className={styles['go-join']} onClick={goJoin}>회원이 아니신가요? 회원가입 하기</div>
      </div>
    </div>
  </div>
  );
}
  

export default Login;
