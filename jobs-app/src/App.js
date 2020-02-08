import React, { useEffect } from 'react';
import Search from './components/Search/search.js';
import Accordion from './components/Accordion/accordion.js';
import JobsItem from './components/Jobs-Item/jobs-item.js';
import ColorSettings from './components/Color-Settings/color-settings.js';
import { getColor } from './helpers/site-style/site-style.js';
import { getJobs } from './store/Actions/jobs-action.js';
import { filterData } from './store/data/filter-data.js';
import { useDispatch } from "react-redux";
import './App.scss';
import './style/responsive.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() =>{

      getColor();
      getJobs(dispatch);

  }, [dispatch])


  return (
    <div className="App">
      <ColorSettings />
      <Search />
      <div className="app-body">
        <div className="filter-section">
          { filterData.map( (data, index) => <Accordion key={index} title={data.title} options={data.option} /> ) }
        </div>
        <div className="jobs-section">
          <JobsItem/>
        </div>
      </div>

    </div>
  );
}

export default App;
