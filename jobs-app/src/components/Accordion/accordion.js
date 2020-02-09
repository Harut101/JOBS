import React, { useState } from 'react';
import { buildQuery } from '../../helpers/filter-data.js';
import '../Accordion/accordion.scss';

function Accordion({ title, options, advanceSearch }) {
    const [closed, setClosed] = useState(false);

    function toggelAccordion () {
        setClosed(!closed);
    }

    function filterJobs(e) {
        let type = e.target.getAttribute('data-filter');

        buildQuery(type, e.target.checked, e.target.value);
    }

    return (
        <div className={`Accordion ${!advanceSearch ? 'disable' : ''}`}>
            <div className="accordion-header" onClick={toggelAccordion}>
            <span className="accordion-title">{ title }</span>

                { closed || !advanceSearch ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i> }
            </div>
            <div className={`accordion-body ${closed || !advanceSearch ? 'closed' : ''}`}>
                { options.map( (option, index) => {
                        return (
                            <div className="filter-wrapper" key={index}>
                                <input className="checkbox" type="checkbox" data-filter={ title } onChange={filterJobs} value={option}/>
                                <span className="checkbox-title" >{ option }</span>
                            </div>
                        )
                  }) 
                }
            </div>
        </div>
    );
}

export default Accordion;
