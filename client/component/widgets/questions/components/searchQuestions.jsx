import React, { useEffect, useState } from 'react';

const SearchQuestions = ({ productQuestions, setFilteredQuestions, setFilteredStatus }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const searchBarChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const searchQuestions = () => {
    let filtered = [];
    for (let i = 0; i < productQuestions.length; i++) {
      if (productQuestions[i].question_body.indexOf(searchTerm) !== -1) {
        filtered.push(productQuestions[i]);
      }
    }
    setFilteredQuestions(filtered);
    setFilteredStatus(true);
  }

  useEffect(() => {
    searchTerm.length >= 3 ? searchQuestions() : null;
    searchTerm.length < 3 ? setFilteredStatus(false): null;
  }, [searchTerm]);

  return (
    <div id="searchQuestions">
      <input id="searchBar" type="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={searchBarChange}></input>
    </div>
  )
}

export default SearchQuestions;