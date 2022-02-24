import React, { useEffect, useState } from 'react';

import IndividualQuestion from './individualQuestion.jsx';
import MoreQuestions from './moreQuestions.jsx';
import AddQuestion from './addQuestion.jsx'
import AddQuestionModal from './AddQuestionModal.jsx';

const QuestionList = ({ productQuestions, product, searchTerm, filteredStatus }) => {

  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [sliceIndex, setSliceIndex] = useState(2);
  const [showMoreQuestions, setShowMoreQuestions] = useState(true);
  const [questionGrow, setQuestionGrow] = useState('questionlist');

  const showAddQuestionModal = () => {
    setShowQuestionModal(true);
  }

  useEffect(() => {
    console.log('hit useEffect questions');
  }, [productQuestions]);

  useEffect(() => {
    console.log('changed search term');
  }, [searchTerm]);

  useEffect(() => {
    if (sliceIndex >= productQuestions.length && productQuestions.length > 2) {
      setShowMoreQuestions(false);
    }
  }, [sliceIndex]);

  return (
    <div id="qlistParent">
      <div id={`${questionGrow}`}>
        <span id="modalContainer">
          {showQuestionModal ? <AddQuestionModal show={setShowQuestionModal} name={product.name} productId={product.id} /> : null}
        </span>
        {productQuestions ? productQuestions.slice(0, sliceIndex).map((question, index) => {
          return (
            <IndividualQuestion question={question} key={index} product={product} searchTerm={searchTerm} filteredStatus={filteredStatus} />
          )
        }) : null}
      </div>
      <div id="questionFoot">
        {productQuestions.length > 2 && showMoreQuestions ? <MoreQuestions productQuestions={productQuestions} setSliceIndex={setSliceIndex} grow={setQuestionGrow} /> : null}
        {productQuestions ? <AddQuestion showAddQuestionModal={showAddQuestionModal} /> : null}
      </div>
    </div>
  )
}

export default QuestionList;