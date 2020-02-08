import React, { useState } from 'react';
import DropDown from '../DropDown/dropDown.js';
import { useDispatch } from "react-redux";
import { filterData, filterQuery } from '../../store/data/filter-data';
import '../Search/search.scss';

function Search() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobLocation, setJobLocation] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
    filterQuery.title =  e.target.value;
  }

  function handleropDownChange(title, e) {
      if(title === 'Category') {

        setJobCategory(e.target.value);
        filterQuery.category =  e.target.value;
      } else {

        setJobLocation(e.target.value)
        filterQuery.location = e.target.value;
      }
  }

  function searchJobs() {
    dispatch({
      type: "FILTER",
      payload: {
          query: filterQuery
      }
      
    })
    
  }

  return (
    <div className="Search">
      <DropDown data={filterData[0]} actionChange={handleropDownChange} value={jobCategory}/>
      <DropDown data={filterData[2]} actionChange={handleropDownChange} value={jobLocation}/>
      <input 
        className='search-input' 
        type="text" 
        name="search" 
        placeholder="Type your key word" 
        value={inputValue} 
        onChange={handleInputChange} />
      <button className='search-button' onClick={searchJobs}>Search</button>
    </div>
  );
}

export default Search;
