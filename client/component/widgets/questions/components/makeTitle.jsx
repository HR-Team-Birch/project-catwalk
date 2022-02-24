import React from 'react';

const MakeTitle = ({titleText, filteredStatus}) => {
  //console.log('titleText', titleText);
  return (
    <div className='question'> Q: {titleText}</div>
  );
}

export default MakeTitle;