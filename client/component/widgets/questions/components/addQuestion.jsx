import React from 'react';
import AddQuestionModal from './AddQuestionModal.jsx';

const AddQuestion = ({ showAddQuestionModal }) => {

  return (
    <div id="addQuestion">
      <button id="addQButton" onClick={showAddQuestionModal}>ADD A QUESTION +</button>
    </div>
  )
}

export default AddQuestion;