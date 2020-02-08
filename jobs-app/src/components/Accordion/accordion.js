import React, { useState } from 'react';
import '../Accordion/accordion.scss'

function Accordion({title, options}) {
    const [closed, setClosed] = useState(false);

    function toggelAccordion () {
        setClosed(!closed)
    }

    return (
        <div className="Accordion">
            <div className="accordion-header" onClick={toggelAccordion}>
            <span className="accordion-title">{ title }</span>

                { closed ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i> }
            </div>
            <div className={`accordion-body ${closed ? 'closed' : ''}`}>
                { options.map( (option, index) => {
                        return (
                            <div className="filter-wrapper" key={index}>
                                <input className="checkbox" type="checkbox" name="" value=""/>
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
