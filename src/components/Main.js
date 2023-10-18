import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../css/Main.module.css'
import Header from './Header';
import Banner from './Banner';
import Articles from './Articles';


function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Banner />
      <Articles />
    </div>
  );
}

export default Main;