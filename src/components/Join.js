import React, { useState } from 'react';
import styles from '../css/Join.module.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';  

function Join() {

  const movePage = useNavigate();

  function goLogin() {
    movePage('/login');
  }

  return (
    <div className={styles.main}>
    <div className={styles.joinContainer}>
      <div className="slogans">
        <h1>COTEIS</h1>
      </div>
      <form action="/login" method='POST' className={styles.forms}>
        <div className={styles['inputContainer']}>
          <div className={styles['inputLabel']}>아이디</div>
          <input 
            type="text" 
            className="member_id" 
            placeholder="아이디를 입력하세요" 
          />
        </div>
        <div className={styles['inputContainer']}>
          <div className={styles['inputLabel']}>비밀번호</div>
          <input 
            type="password" 
            className={styles['memberPw']} 
            placeholder="비밀번호를 입력하세요" 
          />
        </div>
        <div className={styles['inputContainer']}>
          <div className={styles['inputLabel']}>비밀번호</div>
          <input 
            type="password" 
            className={styles['memberPw']} 
            placeholder="비밀번호를 입력하세요" 
          />
        </div>
        <div className={styles['inputContainer']}>
          <div className={styles['inputLabel']}>이메일</div>
          <input 
            type="password"   
            className={styles['memberPw']} 
            placeholder="이메일을 입력하세요" 
          />
        </div>
    
      </form>
      <div className={styles.buttons}>
        <button 
          className={styles.joinButton}
        >회원가입</button>
        <div className={styles['goLogin']} onClick={goLogin}>이미 가입하셨다면? 로그인하기</div>
      </div>
    </div>
  </div>
  );
}
  

export default Join;
