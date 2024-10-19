import React, { useState } from 'react';
import './Difficulty.css';

const SimpleButton = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className='button'>
            {label}
            <div className="stars"></div>
        </button>
    );
};


const Difficulty = ({ onSelectLevel }) => {
    const [selectedLevel, setSelectedLevel] = useState(null); 

    const handleLevelClick = (level) => {
        setSelectedLevel(level); 
    };

    const handleSubmitClick = () => {
        if (selectedLevel) {
            onSelectLevel(selectedLevel); 
        } else {
            alert("Please select a level.");
        }
    };

    return (
        <div className="container">
            <div className="button-group">
                <SimpleButton onClick={() => handleLevelClick('beginner')} label="Beginner" />
                <SimpleButton onClick={() => handleLevelClick('intermediate')} label="Intermediate" />
                <SimpleButton onClick={() => handleLevelClick('professional')} label="Professional" />
            </div>
            <SimpleButton onClick={handleSubmitClick} label="Submit" />
        </div>
    );
};

export default Difficulty;
