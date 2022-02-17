import React, {useEffect, useState} from 'react';

import SearchQuestions from './components/searchQuestions.jsx';
import QuestionList from './components/questionList.jsx';
const axios = require('axios');
const url = 'http://localhost:3000/qa/questions/?product_id=';


const Questions = ({productId}) => {
  const [productQuestions, setProductQuestions] = useState ([]);
  //console.log(productId);

  const fetchQuestions = () => {
    axios.get(`${url}${productId}`)
    .then((result) => {
      //console.log('result data', result.data);
      setProductQuestions(result.data.results);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
  };

  useEffect(() => {
    productId ? fetchQuestions() : null;
  }, [productId]);

  return(
    <div className="questions">
      <h1>Questions</h1>
      <SearchQuestions fetchQuestions={fetchQuestions}/>
      <QuestionList productQuestions={productQuestions}/>
    </div>
  )

}

export default Questions;