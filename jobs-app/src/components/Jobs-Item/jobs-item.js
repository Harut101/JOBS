import React from 'react';
import { useSelector } from "react-redux";
import '../Jobs-Item/jobs-item.scss';


function JobsItem() {
    const jobs = useSelector(state => state.jobsReducer.jobs);

    return (
        <>
        {   jobs.map( (data, index) => {

                return (
                    <div className="Jobs-Item" key={index}>
                        <div className="job-icon" style={{backgroundImage: `url(${data.img})`,}}></div>
                        <div className="info-wrapper">
                            <div className="job-info">
                                <span className="title">{ data.title }</span>
                                <span className="location"><i className="fas fa-map-marker-alt"></i>{ data.location }</span>
                                <span className="employment"><i className="far fa-clock"></i>{ data.employment }</span>
                            </div>
                            <div className="buttons-wrapper">
                                <button className="bookmark"><i className="far fa-bookmark"></i>Bookmark</button>
                                <button className="apply-job"><i className="fas fa-briefcase"></i>Apply For This Job</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    );
}

export default JobsItem;
