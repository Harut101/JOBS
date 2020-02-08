const initialState = {
    staticJobsData: [],
    jobs: []
}

export default function jobsReducer(state = initialState, action){
    switch(action.type) {
        case 'BULK_ADD' :
        return {
            staticJobsData: action.payload.jobs,
            jobs:  action.payload.jobs
        }

        case 'CHUNK_ADD' :
        return {
            ...state,
        }

        case 'FILTER' :
        return {
            ...state,
            jobs:  filterDataByQuery(state.staticJobsData, action.payload.query)
        }

        default: 
        return state
    }

}


function filterDataByQuery(jobs, query) {
    let filter;
    let jobsData = [];

    jobs.forEach(job => {
        filter = true;
        if(query.category && job.category !== query.category) {
            filter = false;
        }

        if(query.location && job.location.indexOf(query.location) < 0) {
            filter = false;
        }

        if(query.title && job.title.toLowerCase().indexOf(query.title.toLowerCase())  < 0) {
            filter = false;
        }

        if(query.employment && job.employment !== query.employment) {
            filter = false;
        }

        filter && jobsData.push(job)
        
    });


    return jobsData;
}