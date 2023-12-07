import React from "react";
import styles from '../css/Banner.module.css';

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles['banner-title']}>
                <h1 className={styles['main-title']}>코딩테스트 풀이, <br/>이제는 쉽게 써보자</h1>
                <button className={styles['main-button']}>이용 가이드</button>
            </div>
        </div>
    )
}

export default Banner;