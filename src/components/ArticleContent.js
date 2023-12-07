import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import axios from 'axios';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism'; // 선택한 스타일
import styles from '../css/OneArticle.module.css'
import Header from './Header';
import Footer from './Footer';

function ArticleContent() {
    // id 가져오기
    const {article_no} = useParams();
    const [article, setArticle] = useState({});

    useEffect( () => {
        axios.get(`/api/articles/${article_no}`)
            .then(response => {
                setArticle(response.data);
            })
            .catch(error => null);

    }, []);


    return (
        <div className={styles['main']}>
            <h1 className={styles['main-label']}>{article.title}</h1>
            <div className={styles['article-info-container']}>
                <label className={styles['info-label']}>작성자</label>
                <div className={styles['info-value']}>{article.userNo.userName}</div>
                <label className={styles['info-label']}>작성일</label>
                <div
                    className={styles['info-value']}>{`${article.createdDate.split('-')[0]}년 ${article.createdDate.split('-')[1]}월 ${article.createdDate.split('-')[2].split('T')[0]}일`}</div>
            </div>
            <div className={styles['tags']}>
                {article.algorithmNo && (
                    <>
                        <div className={styles['tag-value']}># {article.algorithmNo.algorithmName}</div>
                    </>
                )}
                {article.languageNo && (
                    <>
                        <div className={styles['tag-value']}># {article.languageNo.languageName}</div>
                    </>
                )}
                {article.difficultyNo && (
                    <>
                        <div className={styles['tag-value']}># {article.difficultyNo.difficultyName}</div>
                    </>
                )}
                {article.previoustestNo && (
                    <>
                        <div className={styles['tag-value']}># {article.previoustestNo.previoustestName}</div>
                    </>
                )}
            </div>
            <div className={styles['article-content-container']}>
                <div className={styles['content']}>
                    <label className={styles['content-label']}>문제 설명</label>
                    <div className={styles['content-value']}>{article.testExplain}</div>
                </div>
                <div className={styles['double-content']}>
                    <div className={styles['content']}>
                        <label className={styles['content-label']}>입력 예시</label>
                        <div className={styles['content-value']}>{article.inputExample}</div>
                    </div>
                    <div className={styles['content']}>
                        <label className={styles['content-label']}>출력 예시</label>
                        <div className={styles['content-value']}>{article.outputExample}</div>
                    </div>
                </div>
                <div className={styles['content']}>
                    <label className={styles['content-label']}>해답 코드</label>
                    <SyntaxHighlighter className={styles['content-value']}
                                       language={article.languageNo.languageName.toLowerCase()} style={materialLight}>
                        {article.answer}
                    </SyntaxHighlighter>
                </div>
                <div className={styles['content']}>
                    <label className={styles['content-label']}>코드 해설</label>
                    <div className={styles['content-value']}>{article.codeExplain}</div>
                </div>
                <div className={styles['content']}>
                    <label className={styles['content-label']}>알게 된 개념 정리</label>
                    <div className={styles['content-value']}>{article.concept}</div>
                </div>
            </div>
        </div>
    );
}

export default ArticleContent;