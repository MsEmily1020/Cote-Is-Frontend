import React, { useState } from 'react';
import styles from '../css/Login.module.css';
import axios from 'axios';  

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL; 
      const response = await axios.post(`${apiUrl}/login`, { username, password });

      console.log('로그인 성공:', response.data);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };
  return (
    <div className={styles.main}>
    <div className={styles.loginContainer}>
      <div className="slogans">
        <h1>COTEIS</h1>
      </div>
      <form action="/login" method='POST' className={styles.forms}>
        <div className={styles['input-container']}>
          <div className={styles['input-label']}>아이디</div>
          <input 
            type="text" 
            className="member_id" 
            placeholder="아이디를 입력하세요" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles['input-container']}>
          <div className={styles['input-label']}>비밀번호</div>
          <input 
            type="password" 
            className={styles['member_pw']} 
            placeholder="비밀번호를 입력하세요" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <div className={styles.buttons}>
        <button 
          className={styles.loginButton}
          onClick={handleLogin}
        >로그인</button>
      </div>
    </div>
  </div>
  );
}
  

export default Login;
