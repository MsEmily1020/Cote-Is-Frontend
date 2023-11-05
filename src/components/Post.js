import React, { useState, useEffect } from 'react';
import styles from '../css/Post.module.css';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios';
import Header from './Header';

function InputContainer({ label, isSelect = false }) {
  const inputName = label.toLowerCase().replace(/ /g, '_');
  const inputType = isSelect ? 'select' : 'text';

  return (
    <div className={styles['input-container']}>
      <label className={styles['input-label']}>{label}</label>
      {isSelect ? (
        <select className={styles['select-lang']} name={inputName}>
          <option>option</option>
        </select>
      ) : (
        <input type={inputType} name={inputName} />
      )}
    </div>
  );
}

function Post() {
    const [formData, setFormData] = useState({
        title: '',
        language: '',
        algorithm: '',
        testExplain: '',
        answer: '',
        inputExample: '',
        outputExample: '',
        speed: '',
        codeExplain: '',
        concept: '',
      });
      
    const [languages, setLanguages] = useState([]);
    const [algorithms, setAlgorithms] = useState([]);
      
    const movePage = useNavigate();

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/articles', formData);
        movePage('/posts');
    } catch (error) {

        console.error('요청 실패:', error);
    }
    };

  return (
    <div className={styles['main']}>
      <Header />
      <h1 className={styles['main-label']}>새 글 쓰기</h1>
      <div className={styles['form-container']}>
        <form>
          <InputContainer label="제목" />
          <div className={styles['select-container']}>
            <InputContainer
                label="사용언어"
                isSelect={true}
                name="language"
                onChange={handleInputChange}
                options={languages}
                />
                <InputContainer
                label="알고리즘"
                isSelect={true}
                name="algorithm"
                onChange={handleInputChange}
                options={algorithms}
                />
          </div>
          <InputContainer label="문제 설명" />
          <InputContainer label="해답 코드" />
          <InputContainer label="입력 예시" />
          <InputContainer label="출력 예시" />
          <InputContainer label="최적화 / 속도" />
          <InputContainer label="코드 설명" />
          <InputContainer label="개념 정리" />
          <button className={styles['submit-button']} type="submit">
            완료하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;