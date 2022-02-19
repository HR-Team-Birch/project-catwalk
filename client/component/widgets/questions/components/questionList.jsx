import React, { useEffect, useState } from 'react';

import IndividualQuestion from './individualQuestion.jsx';
import MoreQuestions from './moreQuestions.jsx';
import AddQuestion from './addQuestion.jsx'
import AddQuestionModal from './AddQuestionModal.jsx';


const QuestionList = ({productQuestions, product}) => {

  const [showQuestionModal, setShowQuestionModal] = useState(false);

  const showAddQuestionModal = () => {
    setShowQuestionModal(true);
  }

  return(
    <div id="questionlist">
      <span id="modalContainer">
      {showQuestionModal ? <AddQuestionModal show={setShowQuestionModal} name={product.name} productId={product.id}/> : null }
      </span>
      <h3>Question List!!!</h3>
      {productQuestions ? productQuestions.map((question, index) => {
        return (
          <IndividualQuestion question={question} key={index}/>
        )
      }) : null }
      <div id="questionFoot">
      <MoreQuestions/>
      <AddQuestion showAddQuestionModal={showAddQuestionModal}/>
      </div>
    </div>
  )
}

export default QuestionList;