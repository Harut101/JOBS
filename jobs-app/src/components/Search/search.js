import React, { useState } from 'react';
import DropDown from '../DropDown/dropDown.js';
import { useDispatch } from "react-redux";
import { filterData, filterQuery, advanceFilterQuery } from '../../helpers/filter-data.js';
import '../Search/search.scss';

function Search({ advanceSearch }) {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobLocation, setJobLocation] = useState('');

  function handleInputChange(e) {
    setInputValue(e.target.value);
    filterQuery.title =  e.target.value;
    advanceFilterQuery.title =  e.target.value;
  }

  function handleDropDownChange(title, e) {
      if(title === 'category') {
        setJobCategory(e.target.value);
        filterQuery.category =  e.target.value;

      } else {
        setJobLocation(e.target.value);
        filterQuery.location = e.target.value;

      }
  }

  function searchJobs() {
    if(advanceSearch) {
       dispatch({ type: "ADVACE_FILTER",  payload: { query: advanceFilterQuery }});
    } else {
       dispatch({ type: "FILTER", payload: { query: filterQuery } });
    }
  }

  return (
    <div className="Search">
      <DropDown data={filterData[0]} actionChange={handleDropDownChange} advanceSearch={advanceSearch}  value={jobCategory}/>
      <DropDown data={filterData[2]} actionChange={handleDropDownChange} advanceSearch={advanceSearch}  value={jobLocation}/>
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
