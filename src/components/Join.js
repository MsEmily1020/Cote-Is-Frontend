import React, { useState } from 'react';
import styles from '../css/Join.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Join() {
  const movePage = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    userId: '',
    userPw: '',
    userEmail: '',
  });

  function goLogin() {
    movePage('/login');
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function join() {
    try {
      const response = await axios.post('/api/users', formData);
      console.log('회원가입 성공', response.data);
      // 회원가입 성공 후 로그인 페이지로 이동
      goLogin();
    } catch (error) {
      console.error('회원가입 오류', error);
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.joinContainer}>
        <div className="slogans">
          <h1>COTEIS</h1>
        </div>
        <form className={styles.forms}>
          <div className={styles['inputContainer']}>
            <div className={styles['inputLabel']}>이름</div>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              placeholder="이름을 입력하세요"
            />
          </div>
          <div className={styles['inputContainer']}>
            <div className={styles['inputLabel']}>아이디</div>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleInputChange}
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div className={styles['inputContainer']}>
            <div className={styles['inputLabel']}>비밀번호</div>
            <input
              type="password"
              name="userPw"
              value={formData.userPw}
              onChange={handleInputChange}
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div className={styles['inputContainer']}>
            <div className={styles['inputLabel']}>이메일</div>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleInputChange}
              placeholder="이메일을 입력하세요"
            />
          </div>
        </form>
        <div className={styles.buttons}>
          <button className={styles.joinButton} onClick={join}>
            회원가입
          </button>
          <div className={styles['goLogin']} onClick={goLogin}>
            이미 가입하셨다면? 로그인하기
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
