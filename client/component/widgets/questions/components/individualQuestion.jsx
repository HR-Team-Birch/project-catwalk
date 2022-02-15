import React from 'react';

const IndividualQuestion = ({question}) => {

  console.log('question in individual question', question);




  return (
    <div className="eachQuestion">
      {/* <div id="question">Q: {question.question_body}</div> */}
      <a href="" id="addAnswer">Add Answer</a>
      <div>A: Well if you don't use one right now you are going to learn so much more</div>
    </div>
  )
}

export default IndividualQuestion;