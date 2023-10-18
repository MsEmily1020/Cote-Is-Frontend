import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Main() {
  return (
    <div>

    </div>
  );
}

function ArticleList() {
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
    <div>
      <h1>글 목록</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.articleNo}>
            <h2>{article.title}</h2>
            <p>{article.date}</p>
            <p>{article.author}</p>
            <p>{article.testExplain}</p>
            <p>{article.answer}</p>
            <p>{article.inputExample}</p>
            <p>{article.outputExplain}</p>
            <p>{article.speed}</p>
            <p>{article.codeExplain}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;