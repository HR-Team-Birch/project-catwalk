import React, { useEffect, useState } from 'react';
import Answers from './Answers.jsx';
import AddAnswerModal from './addAnswerModal.jsx';
import MakeTitle from './makeTitle.jsx';

const axios = require('axios');
const url = 'http://localhost:3000/qa/questions/';

const IndividualQuestion = ({ question, product, searchTerm, filteredStatus }) => {

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
    if (answerState === 'LOAD MORE ANSWERS') {
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
      {showAnswerModal ? <AddAnswerModal show={setShowAnswerModal} question={question} name={product.name} getAnswers={getAnswers}/> : null}
      <MakeTitle titleText={question.question_body} filteredStatus={filteredStatus} searchTerm={searchTerm}/>
      <span id="helpfulQ">
        <span>Helpful?   </span>
        <a href="" onClick={markQuestionHelpful}>Yes</a>
        <span>{`  (${question.question_helpfulness})    |    `}</span>
        <a href="" id="addAnswer" onClick={showAddAnswerModal}>Add Answer</a>
      </span>
      <div id="answersInQuestion">
        <div id="answerA">A:</div>
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