import React from 'react';

const AddQuestion = ({ showAddQuestionModal }) => {

  return (
    <div id="addQuestion">
      <button id="addQButton" type="button" onClick={showAddQuestionModal}>{`ADD A QUESTION   +`}</button>
    </div>
  )
}

export default AddQuestion;