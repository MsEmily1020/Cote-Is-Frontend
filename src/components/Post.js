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
    const [selectedValues, setSelectedValues] = useState({
        userNo: {
            userNo: 1
        },
        languageNo: {
            languageNo: 2
        },
        algorithmNo: {
            algorithmNo: 2
        },
        difficultyNo: {
            difficultyNo: 2
        },
        previoustestNo: {
            previoustestNo: 2
        },
        title: '',
        testExplain: '',
        code: '',
        inputExample: '',
        outputExample: '',
        speed: '',
        codeExplain: '',
        concept: '',
    });

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
                setTests(tests.data);
            } catch (error) {
                console.error('데이터를 불러오는 중 에러 발생:', error);
            }
        };

        fetchData();
    }, []);

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [name]: {
                [name]: value,
            },
        }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    function goMain() {
        movePage('/main');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/articles', selectedValues);
            console.log('POST 요청 성공:', response.data);
            goMain();
        } catch (error) {
            console.error('POST 요청 실패:', error);
            alert('글 작성을 실패하였습니다.');
        }
    };


    return (
        <div className={styles['main']}>
            <Header/>
            <h1 className={styles['main-label']}>새 글 쓰기</h1>
            <div className={styles['form-container']}>
                <form onSubmit={handleSubmit}>
                    <div className={styles['category-container']}>
                        <select id="LanguagesSelect" onChange={handleSelectChange}>
                            <option value="0">언어</option>
                            {languages.map(language => (
                                <option key={language.languageNo} value={language.languageNo} name="languageNo">
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
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>제목</label>
                        <input className={styles['input-field']}
                               type="text"
                               name="title"
                               onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>문제 설명</label>
                        <textarea
                            className={styles['input-field']}
                            name="testExplain"
                            id={styles['desc']}
                            onChange={handleInputChange}/>
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>해답코드</label>
                        <textarea
                            className={styles['input-field']}
                            name="answer"
                            id={styles['code']}
                            onChange={handleInputChange}/>
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>입력예시</label>
                        <input
                            className={styles['input-field']}
                            type="text"
                            name="inputExample"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>출력예시</label>
                        <input
                            className={styles['input-field']}
                            type="text"
                            name="outputExample"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>최적화 / 속도</label>
                        <input
                            className={styles['input-field']}
                            type="text"
                            name="speed"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>코드 설명</label>
                        <textarea
                            className={styles['input-field']}
                            name="codeExplain"
                            id={styles['codeExplain']}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles['input-container']}>
                        <label className={styles['input-label']}>개념 정리</label>
                        <textarea
                            className={styles['input-field']}
                            name="concept"
                            id={styles['concept']}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className={styles['submit-button']}>
                        완료하기
                    </button>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default Post;