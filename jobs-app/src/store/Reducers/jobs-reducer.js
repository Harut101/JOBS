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

        case 'UPDATE' :
        return {
            ...state,
            jobs:  updateBokmarkJob(state.jobs, action.payload.id, action.payload.bookMark)
        }

        case 'ADVACE_FILTER' :
        return {
            ...state,
            jobs:  advanceFilterDataByQuery(state.staticJobsData, action.payload.query)
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


function updateBokmarkJob(jobs, id, bookMark) {
    let jobsData = [];

   jobs.forEach( job => {
       if ( job.id === id ) {
            job.bookMark = bookMark;
       }
       jobsData.push(job)
   })

    return jobsData;
    
}


function filterDataByQuery(jobs, query) {
    let filter;
    let jobsData = [];

    jobs.forEach(job => {
        filter = true;
        if(query.category && job.category !== query.category)  filter = false;
        
        if(query.location && job.country.indexOf(query.location) < 0) filter = false;

        if(query.title && job.title.toLowerCase().indexOf(query.title.toLowerCase())  < 0) filter = false;

        if(query.employment && job.employment !== query.employment) filter = false;

        filter && jobsData.push(job);
        
    });


    return jobsData;
}


function advanceFilterDataByQuery(jobs, query) {
    let filter;
    let jobsData = [];

    jobs.forEach(job => {
        filter = true;
        if(query.category.length && !query.category.includes(job.category)) filter = false;

        if(query.location.length && !query.location.includes(job.country))  filter = false;

        if(query.employment.length && !query.employment.includes(job.employment)) filter = false;

        if(query.title && job.title.toLowerCase().indexOf(query.title.toLowerCase())  < 0) filter = false;

        filter && jobsData.push(job);
        
    });


    return jobsData;
}