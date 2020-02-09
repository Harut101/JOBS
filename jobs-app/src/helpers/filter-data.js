export const filterData = [
    {
        title: 'category',
        option: ['Software Development', 'Designer']
    },

    {
        title: 'employment',
        option: ['Full Time', 'Part Time', 'Intern']
    },

    {
        title: 'location',
        option: ['Armenia', 'USA', 'Russia', 'Ukraine']
    }
];



export const filterQuery = { };


export const advanceFilterQuery = {
    title: '',
    category: [],
    location: [],
    employment: [],

};


export function buildQuery(type, state, value) {
    if(state) {
        !advanceFilterQuery[type].includes(value) && advanceFilterQuery[type].push(value);
    } else {
      let index =  advanceFilterQuery[type].indexOf(value);
      advanceFilterQuery[type].splice(index, 1);
        
    }

    return advanceFilterQuery;
}