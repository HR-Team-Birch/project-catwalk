import React, {useEffect, useState} from 'react';

const Answers = ({answer}) => {

console.log('answers', answer);

  return (
    <div id="answers">
      <span id="answerBody">{answer.body}</span>
      <span id="answerUser">by {answer.answerer_name}</span>
      <span id="answerDate">{answer.date}</span>
      <span>Helpful?</span>
      <span>{answer.helpfulness}</span>
    </div>
  )
}

export default Answers;