import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../css/Articles.module.css'

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = '/api/articles';


    axios.get(apiUrl)
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('API 요청 실패:', error);
        setLoading(false);
      });
  }, []);


  return (
    <div className={styles['articles-container']}>
      {articles.map((article) => (
        <div className={styles["article-container"]} key={article.articleNo}>
          <div className={styles["article-title"]}>{article.title}</div>
          <div className={styles["article-description"]}>{article.testExplain}</div>
          <div className={styles["category-container"]}>
            <div className={styles["category-item"]}># {article.algorithmNo.algorithmName}</div>
            <div className={styles["category-item"]}># {article.difficultyNo.difficultyName}</div>
            <div className={styles["category-item"]}># {article.languageNo.languageName}</div>
            <div className={styles["category-item"]}># {article.previoustestNo.previoustestName}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Articles;