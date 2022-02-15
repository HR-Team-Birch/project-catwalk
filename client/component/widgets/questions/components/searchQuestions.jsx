import React, {useEffect, useState} from 'react';

const SearchQuestions = ({fetchQuestions}) => {

  const [searchTerm, setSearchTerm] = useState ('');

  const searchBarChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const submitSearch = () => {
    console.log('submitting search for', searchTerm);
    fetchQuestions(searchTerm);
  }

  return (
    <div id="searchQuestions">
      <input id="searchBar" type="search" size="122" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={searchBarChange}></input>
      {/* <button onClick={submitSearch}>Submit</button> */}
    </div>
  )
}

export default SearchQuestions;