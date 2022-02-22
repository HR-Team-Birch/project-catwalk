import React, { useEffect, useState } from 'react';

import SearchQuestions from './components/searchQuestions.jsx';
import QuestionList from './components/questionList.jsx';

const axios = require('axios');
const url = 'http://localhost:3000/qa/questions/?product_id=';

const Questions = ({ productId, product }) => {
  const [productQuestions, setProductQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState(null);
  const [filteredStatus, setFilteredStatus] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);

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
    if (filteredStatus) {
      setCurrentQuestions(filteredQuestions);
    } else {
      setCurrentQuestions(productQuestions);
    }
  }, [filteredStatus]);

  return (
    <div className="questions">
      <h3>QUESTIONS & ANSWERS</h3>
      <SearchQuestions productQuestions={productQuestions} setFilteredStatus={setFilteredStatus} setFilteredQuestions={setFilteredQuestions} />
      <QuestionList productQuestions={currentQuestions} product={product} />
    </div>
  )
}

export default Questions;