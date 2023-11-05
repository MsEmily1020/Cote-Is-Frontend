import React, { useState } from 'react';
import styles from '../css/Header.module.css';
import { useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';

function Header() {

  const movePage = useNavigate();

  function goToPost() {
    movePage('/post')
  }
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>COTEIS</div>
        <ul className={styles['nav-list']}>
          <li 
            className={styles['nav-item']}
            onClick={goToPost}>
            글쓰기
          </li>
          <li className={styles['nav-item']}>
            게시판
          </li>
          <Icon icon="ph:user" className={styles["icon"]}/>
        </ul>
      </nav>
    </header>
  );
}
  

export default Header;
