import React from 'react';
import Highlighter from 'react-highlight-words';

const MakeTitle = ({ titleText, filteredStatus, searchTerm}) => {

  if(searchTerm) {
    if(searchTerm.length < 3) {
      searchTerm = '';
    }
  }

  return (
    <div id="question">
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={[searchTerm]}
        autoEscape={true}
        textToHighlight={`Q:   ${titleText}`}
      />
    </div>
  );
}

export default MakeTitle;