import React, { useEffect, useState } from 'react';
import Answers from './Answers.jsx';
import AddAnswerModal from './addAnswerModal.jsx';

const axios = require('axios');
const url = 'http://localhost:3000/qa/questions/';

const IndividualQuestion = ({ question , product}) => {

  const [markedQHelpful, setMarkedQHelpful] = useState(false);
  const [answers, setAnswers] = useState(null);
  const [sliceIndex, setSliceIndex] = useState(2);
  const [answerState, setAnswerState] = useState('LOAD MORE ANSWERS');
  const [showAnswerModal, setShowAnswerModal] = useState(false);

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

  const showAddAnswerModal = () => {
    event.preventDefault();
    setShowAnswerModal(true);
  }

  useEffect(() => {
    question ? getAnswers() : null;
  }, [question]);

  return (
    <div className="eachQuestion">
      {showAnswerModal ? <AddAnswerModal show={setShowAnswerModal} question={question} name={product.name}/> : null }
      <div id="question">Q: {question.question_body}</div>
      <span id="helpfulQ">
        <span>Helpful?   </span>
        <a href="" onClick={markQuestionHelpful}>Yes</a>
        <span>{`  (${question.question_helpfulness})    |    `}</span>
        <a href="" id="addAnswer" onClick={showAddAnswerModal}>Add Answer</a>
      </span>
      <div id="answersInQuestion">A:
        {answers ? answers.slice(0, sliceIndex).map((answer, index) => {
          return (
            <Answers answer={answer} key={index} />
          )
        }) : null}
        <div id="loadAnswers">
          {answers && answers.length > 2 ? <span id="moreAnswers" onClick={toggleAllAnswers}>{answerState}</span> : null}
        </div>
      </div>
    </div>
  )
}

export default IndividualQuestion;