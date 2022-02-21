import React, { useEffect, useState } from 'react';

const MoreQuestions = ({productQuestions, setSliceIndex}) => {

  const [maxQuestionCount, setMaxQuestionCount] = useState(null);
  const [currentQuestionCount, setCurrentQuestionCount] = useState(4);

  const addTwoQuestions = () => {
   if (currentQuestionCount < maxQuestionCount) {
     setSliceIndex(currentQuestionCount + 2);
     setCurrentQuestionCount(currentQuestionCount + 2);
   }
  }

  useEffect(() => {
    setMaxQuestionCount(productQuestions.length)
  }, [productQuestions])

  return (
    <div id="moreQuestions">
      <button id="moreQButton" onClick={addTwoQuestions}>MORE ANSWERED QUESTIONS</button>
    </div>
  )
}

export default MoreQuestions;