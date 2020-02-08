import axios from 'axios';

export function getJobs(dispatch) {
    axios.get(`https://jobs-df7d6.firebaseio.com/jobs.json`)
    .then( ({ data }) =>{
        let jobs = convertData(data);
        
        dispatch(addJobs(jobs))
    })
    .catch(error =>{
        // dispatch(getQuizFail(error))
    })
}


 function addJobs(jobs){
    return {
        type: "BULK_ADD",
        payload: {
            jobs: jobs
        }
    }
}


function convertData (data) {
    let jobs = [];

    for (let key in data) {
        data[key].id = key;
       jobs.push(data[key])
        
    }

    return jobs;
}