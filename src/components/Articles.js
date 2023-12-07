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

    const [selectedFilters, setSelectedFilters] = useState({
        languageNo: 0,
        algorithmNo: 0,
        difficultyNo: 0,
        previoustestNo: 0,
    });


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

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setSelectedFilters((prevFilters) => {
            const updatedFilters = {
                ...prevFilters,
                [name]: value == '0' ? 0 : +value,
            };

            filterArticles(updatedFilters);

            return updatedFilters;
        });
    };

    const filterArticles = async (filters) => {
        try {
            const response = await axios.get('/api/articles');
            let filteredArticles = response.data;
            console.log('filter', filters);

            const strings = ['languageNo', 'algorithmNo', 'difficultyNo', 'previoustestNo']
            Object.keys(filters).forEach((key, index) => {
                const category = strings[index];
                const filterValue = filters[key];
                if (filterValue != 0) {
                    filteredArticles = filteredArticles.filter((article) => article[category][category] === filterValue);
                }
            });

            console.log(filteredArticles);

            setArticles(filteredArticles);
        } catch (error) {
            console.error('API 요청 실패:', error);
            setLoading(false);
        }
    };

    const handleArticleClick = articleNo => {
        // 클릭한 아티클의 번호를 사용하여 OneArticle로 네비게이션
        navigate(`/articles/${articleNo}`);
    };

    return (
        <div className={styles['articles-container']}>
            <div className={styles['tag-container']}>
                <select id="LanguagesSelect" onChange={handleSelectChange} name="languageNo">
                    <option value="0">언어</option>
                    {languages.map(language => (
                        <option key={language.languageNo} value={language.languageNo}>
                            {language.languageName}
                        </option>
                    ))}
                </select>
                <select id="algorithmSelect" onChange={handleSelectChange} name="algorithmNo">
                    <option value="0">알고리즘</option>
                    {algorithms.map(algorithm => (
                        <option key={algorithm.algorithmNo} value={algorithm.algorithmNo}>
                            {algorithm.algorithmName}
                        </option>
                    ))}
                </select>
                <select id="difficultySelect" onChange={handleSelectChange} name="difficultyNo">
                    <option value="0">난이도</option>
                    {difficulties.map(difficulty => (
                        <option key={difficulty.difficultyNo} value={difficulty.difficultyNo}>
                            {difficulty.difficultyName}
                        </option>
                    ))}
                </select>
                <select id="testSelect" onChange={handleSelectChange} name="previoustestNo">
                    <option value="0">기출문제</option>
                    {tests.map(test => (
                        <option key={test.previoustestNo} value={test.previoustestNo}>
                            {test.previoustestName}
                        </option>
                    ))}
                </select>
                <select id="sort" name="previoustestNo">
                    <option value="0">최신순</option>
                    <option value="0">오래된순</option>
                    <option value="0">인기순</option>
                </select>
            </div>
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