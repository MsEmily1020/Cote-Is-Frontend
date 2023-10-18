import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../css/Articles.module.css'

function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const apiUrl = '/api/articles';
      console.log(apiUrl);
      
  
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
      <div className={styles.articlesContainer}>
          {articles.map((article) => (
            <div className={styles["articleContainer"]}key={article.articleNo}>
                <div className={styles["articleTitle"]}>{article.title}</div>
                <div className={styles["articleTestExplain"]}>{article.testExplain}</div>
            </div>
          ))}
      </div>
    );
  }
  
  export default Articles;