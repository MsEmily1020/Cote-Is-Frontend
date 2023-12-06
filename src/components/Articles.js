import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from '../css/Articles.module.css'
import {Link, useNavigate} from 'react-router-dom';

function Articles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const [algorithms, setAlgorithms] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [difficulties, setDifficulties] = useState([]);
    const [tests, setTests] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        axios.get('/api/articles')
            .then(response => {
                setArticles(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('API 요청 실패:', error);
                setLoading(false);
            });

        axios.get('/api/algorithms')
            .then(response => {
                setAlgorithms(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('API 요청 실패:', error);
                setLoading(false);
            });

        axios.get('/api/languages')
            .then(response => {
                setLanguages(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('API 요청 실패:', error);
                setLoading(false);
            });

        axios.get('/api/difficulties')
            .then(response => {
                setDifficulties(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('API 요청 실패:', error);
                setLoading(false);
            });

        axios.get('/api/previoustests')
            .then(response => {
                setTests(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('API 요청 실패:', error);
                setLoading(false);
            });

    }, []);

    const handleArticleClick = articleNo => {
        // 클릭한 아티클의 번호를 사용하여 OneArticle로 네비게이션
        navigate(`/articles/${articleNo}`);
    };

    return (
        <div className={styles['articles-container']}>

            {articles.map(article => (
                <div
                    className={styles["article-container"]}
                    key={article.articleNo}
                    onClick={() => handleArticleClick(article.articleNo)}>
                    <div className={styles["article-title"]}>{article.title}</div>
                    {/*<div className={styles["article-description"]}>{article.testExplain}</div>*/}
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