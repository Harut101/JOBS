import React, { useState } from 'react';
import { changeColor } from '../../helpers/site-style/site-style.js';
import '../Color-Settings/color-settings.scss';

function ColorSettings() {
    const [openBox, setOpenBox] = useState(false);

    function selectColor(event) {
        if (event.target.classList.contains('color')) {
            changeColor(event.target.getAttribute('data-color'));
        }
        
    }

    return (
        <div className="Color-Settings" onClick={() => setOpenBox(!openBox)}>
            <i className="fas fa-cog 3x"></i>

            <div className={`style-box ${openBox ? 'open' : ''}`}>
                <span className="title">Site Style</span>
                <div className="color-box" onClick={selectColor}>
                    <div className="color green" data-color="green"></div>
                    <div className="color orange" data-color="orange"></div>
                    <div className="color blue" data-color="blue"></div>
                    <div className="color purple" data-color="purple"></div>
                </div>
            </div>
            
        </div>
    );
}

export default ColorSettings;
