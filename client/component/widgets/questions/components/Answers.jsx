import React, { useEffect, useState } from 'react';

const moment = require('moment');
const axios = require('axios');
const url = 'http://localhost:3000/qa/answers/';

const Answers = ({ answer }) => {

  const [markedAHelpful, setMarkedAHelpful] = useState(false);
  const [reportAnswerStatus, setReportAnswerStatus] = useState('Report');

  const markAnswerHelpful = (event) => {
    event.preventDefault();
    if (!markedAHelpful) {
      axios({
        method: 'PUT',
        url: `${url}${answer.answer_id}/helpful`
      })
        .then(() => {
          answer.helpfulness++;
          setMarkedAHelpful(true);
        })
        .catch(() => {
          console.log('error marking answer helpful');
        })
    } else {
      console.log('Already Marked Answer Helpful')
    }
  }

  const reportAnswer = () => {
    event.preventDefault();
    if(reportAnswerStatus === 'Report') {
      axios({
        method: 'PUT',
        url: `${url}${answer.answer_id}/report`
      })
      .then(() => {
        setReportAnswerStatus('Reported');
      })
      .catch(() => {
        console.log('error reporting answer');
      })
    } else {
      console.log('already reported answer');
    }
  }

  // console.log('answer', answer);
  return (
    <div id="answerContainer">
      <span id="answerBody">{answer.body}</span>
      <div id="answers">
        <span id="answerUser">{`by ${answer.answerer_name},`}</span>
        <span id="answerDate">{`${moment(answer.date).format('MMMM D, YYYY')}     |     `}</span>
        <span>Helpful?</span>
        <a href="" onClick={markAnswerHelpful}>Yes</a>
        <span>{`(${answer.helpfulness})     |     `}</span>
        <a href="" onClick={reportAnswer}>{reportAnswerStatus}</a>
      </div>
    </div>
  )
}

export default Answers;