import React, { useState } from 'react';
import styles from '../css/Login.module.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {

  const [formData, setFormData] = useState({
    userId: '',
    userPw: ''
  });

  const movePage = useNavigate();

  function goJoin() {
    movePage('/join');
  }

  function goMain() {
    movePage('/main');
  }

  const handleLogin = async () => {
    try {
      console.log(formData);
      const response = await axios.post('/login', formData);
      goMain();
    } catch (error) {
      console.error('Error while logging in:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className={styles['main']}>
      <div className={styles['login-container']}>
        <div className="slogans">
          <h1>COTEIS</h1>
        </div>
        <form className={styles.forms}>
          <div className={styles['input-container']}>
            <div className={styles['input-label']}>아이디</div>
            <input
              type="text"
              name='userId'
              className={styles['input-field']}
              placeholder="아이디를 입력하세요"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles['input-container']}>
            <div className={styles['input-label']}>비밀번호</div>
            <input
              type="password"
              name='userPw'
              className={styles['input-field']}
              placeholder="비밀번호를 입력하세요"
              onChange={handleInputChange}
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
