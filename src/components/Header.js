import React, {useState} from 'react';
import styles from '../css/Header.module.css';
import {useNavigate} from "react-router-dom";
import {Icon} from '@iconify/react';

function Header() {

    const movePage = useNavigate();

    function goPost() {
        movePage('/post')
    }

    function goMain() {
        movePage('/main')
    }

    return (
        <header className={styles.header}>
            <nav>
                <div
                    className={styles.logo}
                    onClick={goMain}
                >COTEIS
                </div>
                <ul className={styles['nav-list']}>
                    <li
                        className={styles['nav-item']}
                        onClick={goPost}>
                        글쓰기
                    </li>
                    <li className={styles['nav-item']}>
                        Q&A
                    </li>
                    <Icon icon="ph:user" className={styles["icon"]}/>
                </ul>
            </nav>
        </header>
    );
}


export default Header;
