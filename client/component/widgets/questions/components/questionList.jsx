import React, { useEffect, useState } from 'react';

import IndividualQuestion from './individualQuestion.jsx';
import MoreQuestions from './moreQuestions.jsx';
import AddQuestion from './addQuestion.jsx'
import AddQuestionModal from './AddQuestionModal.jsx';

const QuestionList = ({ productQuestions, product }) => {

  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [sliceIndex, setSliceIndex] = useState(4);
  const [showMoreQuestions, setShowMoreQuestions] = useState(true);

  const showAddQuestionModal = () => {
    setShowQuestionModal(true);
  }

  useEffect(() => {
    if(sliceIndex >= productQuestions.length && productQuestions.length > 4) {
      setShowMoreQuestions(false);
    }
  }, [sliceIndex]);

  return (
    <div id="qlistParent">
      <div id="questionlist">
        <span id="modalContainer">
          {showQuestionModal ? <AddQuestionModal show={setShowQuestionModal} name={product.name} productId={product.id} /> : null}
        </span>
        {productQuestions ? productQuestions.slice(0, sliceIndex).map((question, index) => {
          return (
            <IndividualQuestion question={question} key={index} product={product} />
          )
        }) : null}
      </div>
      <div id="questionFoot">
        {productQuestions.length > 4 && showMoreQuestions ? <MoreQuestions productQuestions={productQuestions} setSliceIndex={setSliceIndex} /> : null}
        {productQuestions ? <AddQuestion showAddQuestionModal={showAddQuestionModal}/> : null}
      </div>
    </div>
  )
}

export default QuestionList;