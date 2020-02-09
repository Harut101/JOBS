import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import '../Jobs-Item/jobs-item.scss';


function JobsItem() {
    const dispatch = useDispatch();
    const jobs = useSelector(state => state.jobsReducer.jobs);

    function addBookMark(id, bookMark) {
        axios.patch(`https://jobs-df7d6.firebaseio.com/jobs/${id}.json`, {'bookMark': !bookMark}) 
        .then( ({ data }) => {
             dispatch({
                type: "UPDATE",
                payload: {
                    id: id,
                    bookMark: data.bookMark
                }
            });
            
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            {   jobs.map( (data, index) => {

                    return (
                        <div className="Jobs-Item" key={index}>
                            <div className="job-icon" style={{backgroundImage: `url(${data.img})`,}}></div>
                            <div className="info-wrapper">
                                <div className="job-info">
                                    <span className="title">{ data.title }</span>
                                    <span className="location"><i className="fas fa-map-marker-alt"></i>{ data.city }, {data.country}</span>
                                    <span className="employment"><i className="far fa-clock"></i>{ data.employment }</span>
                                </div>
                                <div className="buttons-wrapper">
                                    <button 
                                        className={`bookmark ${ data.bookMark  ? 'active' : '' }`} 
                                        onClick={(e) => addBookMark(data.id, data.bookMark)}>

                                        <i className="far fa-bookmark"></i>
                                        Bookmark
                                    </button>
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
