import React from 'react';

const AddQuestion = ({ showAddQuestionModal }) => {

  return (
    <div id="addQuestion">
      <button id="addQButton" type="button" onClick={showAddQuestionModal}>{`ADD A QUESTION   +`}</button>
    </div>
    // <div className="wrapper">
    //   <div className="link_wrapper">
    //     <a href="#" className="hover" onClick={showAddQuestionModal}>ADD A QUESTION</a>
    //     <div className="icon">
    //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
    //     </div>
    //   </div>
    // </div>
  )
}

export default AddQuestion;