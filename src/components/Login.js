import React, { useState } from 'react';
import styles from '../css/Login.module.css'; 

function Login() {
    console.log('login')
    return (
      <div className={styles.main}>
      <div className={styles.loginContainer}>
        <div className="slogans">
          <h1>COTEIS</h1>
        </div>
        <form action="" className={styles.forms}>
          <div className={styles['input-container']}>
            <div className={styles['input-label']}>아이디</div>
            <input type="text" className="member_id" placeholder="아이디를 입력하세요" />
          </div>
          <div className={styles['input-container']}>
            <div className={styles['input-label']}>비밀번호</div>
            <input type="password" className={styles['member_pw']} placeholder="비밀번호를 입력하세요" />
          </div>
        </form>
        <div className={styles.buttons}>
          <button className={styles.loginButton}>로그인</button>
        </div>
      </div>
    </div>
    );
  }
  

export default Login;
