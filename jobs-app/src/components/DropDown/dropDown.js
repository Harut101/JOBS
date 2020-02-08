import React from 'react';
import '../DropDown/dropDown.scss'

function DropDown({ data, actionChange, value }) {
  
  return (
    <div className="DropDown">
      <select className="select" onChange={(e) => actionChange(data.title, e)} value={value}>
        <option value="">{ `Job ${data.title}` }</option>
        {
          data.option.map((option, index) => <option key={index} value={ option } >{ option }</option>)
        }
      </select>
    </div>
  );
}

export default DropDown;
