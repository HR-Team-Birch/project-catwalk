import React from 'react';

import SearchQuestions from './components/searchQuestions.jsx';
import QuestionList from './components/questionList.jsx';


class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curProduct: {}
    }
  }

render() {
  return(
    <div className="questions">
      <h1>Questions</h1>
      <SearchQuestions/>
      <QuestionList/>
    </div>
  )
}

}

export default Questions;