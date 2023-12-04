import React, {useState, useEffect} from 'react';
import styles from '../css/Post.module.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from "./Footer";

function Post() {
    const movePage = useNavigate();

    const [algorithms, setAlgorithms] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [difficulties, setDifficulties] = useState([]);
    const [tests, setTests] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const languages = await axios.get('/api/languages');
                const algorithms = await axios.get('/api/algorithms');
                const difficulties = await axios.get('/api/difficulties');
                const tests = await axios.get('/api/previoustests');

                setLanguages(languages.data);
                setAlgorithms(algorithms.data);
                setDifficulties(difficulties.data);
                setTests(tests.data)
            } catch (error) {
                console.error('데이터를 불러오는 중 에러 발생:', error);
            }
        };

        fetchData();
    }, []);

    const handleAlgorithmChange = (event) => {
        const selectedAlgorithmNo = event.target.value;
        console.log('선택된 알고리즘 번호:', selectedAlgorithmNo);
    };

    return (
        <div className={styles['main']}>
            <Header/>
            <h1 className={styles['main-label']}>새 글 쓰기</h1>
            <div className={styles['form-container']}>
                <form>
                    <div className={styles['category-container']}>
                        <select id="LanguagesSelect" onChange={handleAlgorithmChange}>
                            <option value="0">언어</option>
                            {languages.map(language => (
                                <option key={language.languageNo} value={language.languageNo}>
                                    {language.languageName}
                                </option>
                            ))}
                        </select>
                        <select id="algorithmSelect" onChange={handleAlgorithmChange}>
                            <option value="0">알고리즘</option>
                            {algorithms.map(algorithm => (
                                <option key={algorithm.algorithmNo} value={algorithm.algorithmNo}>
                                    {algorithm.algorithmName}
                                </option>
                            ))}
                        </select>
                        <select id="difficultySelect" onChange={handleAlgorithmChange}>
                            <option value="0">난이도</option>
                            {difficulties.map(difficulty => (
                                <option key={difficulty.difficultyNo} value={difficulty.difficultyNo}>
                                    {difficulty.difficultyName}
                                </option>
                            ))}
                        </select>
                        <select id="testSelect" onChange={handleAlgorithmChange}>
                            <option value="0">기출문제</option>
                            {tests.map(test => (
                                <option key={test.previoustestNo} value={test.previoustestNo}>
                                    {test.previoustestName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>제목</label>
                        <input className={styles['input-field']} type="text" name="title"/>
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>문제 설명</label>
                        <textarea className={styles['input-field']} name="desc" id={styles['desc']}/>
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>해답코드</label>
                        <textarea className={styles['input-field']} name="code" id={styles['code']}/>
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>입력예시</label>
                        <input className={styles['input-field']} type="text" name="input"/>
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>출력예시</label>
                        <input className={styles['input-field']} type="text" name="output"/>
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>최적화 / 속도</label>
                        <input className={styles['input-field']} type="text" name="speed"/>
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>코드 설명</label>
                        <textarea className={styles['input-field']} name="codeExplain" id={styles['codeExplain']}/>
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>개념 정리</label>
                        <textarea className={styles['input-field']} name="concept" id={styles['concept']}/>
                    </div>
                    <button className={styles['submit-button']}>
                        완료하기
                    </button>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Post;