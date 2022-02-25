import React, { useEffect, useState } from 'react';

import SearchQuestions from './components/searchQuestions.jsx';
import QuestionList from './components/questionList.jsx';

const axios = require('axios');
const url = 'http://localhost:3000/qa/questions/?product_id=';

const Questions = ({ productId, product }) => {
  const [productQuestions, setProductQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchQuestions = (productId = product.id) => {
    axios.get(`${url}${productId}`)
      .then((result) => {
        setProductQuestions(result.data.results);
        setCurrentQuestions(result.data.results);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  };

  useEffect(() => {
    productId ? fetchQuestions() : null;
  }, [productId]);

  useEffect(() => {
    filteredStatus ? null : setCurrentQuestions(productQuestions);
  }, [filteredStatus]);

  useEffect(() => {
    setCurrentQuestions(filteredQuestions);
  }, [filteredQuestions])

  return (
    <div id="questionsparent">
      <div className="questions">
        <h3>QUESTIONS & ANSWERS</h3>
        <SearchQuestions productQuestions={productQuestions} setFilteredStatus={setFilteredStatus} setFilteredQuestions={setFilteredQuestions} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
        <QuestionList productQuestions={currentQuestions} product={product} searchTerm={searchTerm} filteredStatus={filteredStatus} />
      </div>
    </div>
  )
}

export default Questions;