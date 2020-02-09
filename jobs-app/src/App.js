import React, { useEffect, useState } from 'react';
import Search from './components/Search/search.js';
import Accordion from './components/Accordion/accordion.js';
import JobsItem from './components/Jobs-Item/jobs-item.js';
import ColorSettings from './components/Color-Settings/color-settings.js';
import { getColor } from './helpers/site-style/site-style.js';
import { getJobs } from './store/Actions/jobs-action.js';
import { filterData } from './helpers/filter-data.js';
import { useDispatch, useSelector } from "react-redux";
import './App.scss';
import './style/responsive.scss';

function App() {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobsReducer.jobs);
  const [advanceSearch, setAdvanceSearch] = useState(false);

  useEffect(() =>{

      getColor();
      getJobs(dispatch);

  }, [dispatch])


  return (
    <div className="App">
      <div className="advance-search">
        <span className="title">Advance Search</span>
        <input className="apple-switch" type="checkbox" onChange={() => setAdvanceSearch(!advanceSearch)}/>
      </div>
      <ColorSettings />
      <Search advanceSearch={advanceSearch}/>
      <div className="app-body">
        <div className="filter-section">
          { filterData.map( (data, index) => <Accordion key={index} advanceSearch={advanceSearch} title={data.title} options={data.option} /> ) }
        </div>
        <div className="jobs-section">
          <JobsItem/>

          {
            jobs.length === 0 ?

            <div className="not-result">
              <span>Sorry, no results found </span>
            </div>
            
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
