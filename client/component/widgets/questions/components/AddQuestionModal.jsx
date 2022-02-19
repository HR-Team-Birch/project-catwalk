import React, { useEffect, useState } from 'react';
const axios = require('axios');
const url = 'http://localhost:3000/qa/questions';

const AddQuestionModal = ({ name, productId, show }) => {

  const [questionField, setQuestionField] = useState('');
  const [nicknameField, setNicknameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const questionFieldChange = (event) => {
    setQuestionField(event.target.value);
  }

  const nicknameFieldChange = (event) => {
    setNicknameField(event.target.value);
  }

  const emailFieldChange = (event) => {
    setEmailField(event.target.value);
  }

  const submitQuestion = () => {
    let message = 'You must enter the following: '
    if (questionField.length === 0) {
      message += 'question * ';
    }
    if (nicknameField.length === 0) {
      message += 'nickname * ';
    }
    if (emailField.length === 0) {
      message += 'email * ';
    } else if (emailField.indexOf('@') === -1) {
      message += 'correct email format '
    }

    if (message !== 'You must enter the following: ') {
      setSubmitMessage(message);
    } else {
      axios({
        method: 'POST',
        url: url,
        data: {
          body: questionField,
          name: nicknameField,
          email: emailField,
          product_id: productId
        },
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(() => {
          console.log('success!!!!!!')
          show(false);
        })
    }
  }

  const clickCloseModal = () => {
    show(false);
  }

  return (
    <div id="questionModal">
      <span id="closeQModal" onClick={clickCloseModal}>&times;</span>
      <h3 id="QmodalTitle">Ask Your Question</h3>
      <h5 id="QmodalSubTitle">{`About the ${name}`}</h5>
      <div id="questionFields">
        <label className="qFieldNames">Your Question *</label>
        <textarea id="questionBody" type="text" maxLength="1000" onChange={questionFieldChange}></textarea>
        <label className="qFieldNames">What is your nickname *</label>
        <input type="text" maxLength="60" placeholder="Example: jackson11!" onChange={nicknameFieldChange}></input>
        <span className="qModalInfo">For privacy reasons, do not use your full name or email address</span>
        <label className="qFieldNames">Your email *</label>
        <input type="text" maxLength="60" placeholder="Why did you like the product or not?" onChange={emailFieldChange}></input>
        <span className="qModalInfo">For authentication reasons, you will not be emailed</span>
        <button id="submitQuestion" onClick={submitQuestion}>Submit Question</button>
        <span id="submitQMessage">{submitMessage}</span>
      </div>
    </div>
  )
}

export default AddQuestionModal;