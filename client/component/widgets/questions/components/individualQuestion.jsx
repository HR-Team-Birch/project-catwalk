import React, { useEffect, useState } from 'react';
import Answers from './Answers.jsx';

const axios = require('axios');
const url = 'http://localhost:3000/qa/questions/';

const IndividualQuestion = ({ question }) => {

  //console.log('question in individual question', question);
  const [markedHelpful, setMarkedHelpful] = useState(false);
  const [answers, setAnswers] = useState(null);


  const markQuestionHelpful = (event) => {
    event.preventDefault();
    if (!markedHelpful) {
      axios({
        method: 'PUT',
        url: `${url}${question.question_id}/helpful`
      })
        .then(() => {
          setMarkedHelpful(true);
        })
        .catch(() => {
          console.log('error marking question helpful');
        })
    } else {
      console.log('Already Marked Question Helpful')
    }
  }

  const getAnswers = () => {
    axios({
      method: 'GET',
      url: `${url}${question.question_id}/answers`
    })
    .then((results) => {
      //console.log('here are some answers', results.data.results);
      setAnswers(results.data.results);
    })
  }

  useEffect(() => {
    question ? getAnswers() : null;
  }, [question]);



  return (
    <div className="eachQuestion">
      <div id="question">Q: {question.question_body}</div>
      <span id="helpfulQ">
        <span>Helpful?   </span>
        <a href="" onClick={markQuestionHelpful}>Yes</a>
        <span>{`  (${question.question_helpfulness})    |    `}</span>
        <a href="" id="addAnswer">Add Answer</a>
      </span>
      <div>A:
        {answers ? answers.map((answer, index) => {
          return (
            <Answers answer={answer} key={index} />
          )
        }) : null}
      </div>
    </div>
  )
}

export default IndividualQuestion;