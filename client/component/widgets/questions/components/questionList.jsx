import React from 'react';

import IndividualQuestion from './individualQuestion.jsx';
import MoreQuestions from './moreQuestions.jsx';
import AddQuestion from './addQuestion.jsx'




const QuestionList = ({productQuestions}) => {

  //console.log('product Questions in QuestionList', productQuestions)

  return(
    <div id="questionlist">
      <h3>Question List!!!</h3>
      {productQuestions ? productQuestions.map((question, index) => {
        return (
          <IndividualQuestion question={question} key={index}/>
        )
      }) : null }
      <div id="questionFoot">
      <MoreQuestions/>
      <AddQuestion/>
      </div>
    </div>
  )
}

export default QuestionList;