import React, { useEffect, useState } from 'react';
import Answers from './Answers.jsx';

const axios = require('axios');
const url = 'http://localhost:3000/qa/questions/';

const IndividualQuestion = ({ question }) => {

  //console.log('question in individual question', question);
  const [markedQHelpful, setMarkedQHelpful] = useState(false);
  const [answers, setAnswers] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [sliceIndex, setSliceIndex] = useState(2);
  const [answerState, setAnswerState] = useState('LOAD MORE ANSWERS');


  const markQuestionHelpful = (event) => {
    event.preventDefault();
    if (!markedQHelpful) {
      axios({
        method: 'PUT',
        url: `${url}${question.question_id}/helpful`
      })
        .then(() => {
          question.question_helpfulness++;
          setMarkedQHelpful(true);
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
        setAnswers(results.data.results);
      })
  }

  const toggleAllAnswers = () => {
    if(answerState === 'LOAD MORE ANSWERS') {
      setAnswerState('COLLAPSE ANSWERS');
      setSliceIndex(answers.length);
    } else {
      setAnswerState('LOAD MORE ANSWERS');
      setSliceIndex(2);
    }
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
        {answers ? answers.slice(0, sliceIndex).map((answer, index) => {
          return (
            <Answers answer={answer} key={index} />
          )
        }) : null}
        <div>
          {answers && answers.length > 2 ? <span id="moreAnswers" onClick={toggleAllAnswers}>{answerState}</span> : null}
        </div>
      </div>
    </div>
  )
}

export default IndividualQuestion;