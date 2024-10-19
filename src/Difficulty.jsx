import React, { useState } from 'react';
import './Difficulty.css';

const SimpleButton = ({ onClick, label, isActive }) => {
    return (
        <button onClick={onClick} className={`button ${isActive ? 'active' : ''}`}>
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
                <SimpleButton 
                    onClick={() => handleLevelClick('beginner')} 
                    label="Beginner" 
                    isActive={selectedLevel === 'beginner'} 
                />
                <SimpleButton 
                    onClick={() => handleLevelClick('intermediate')} 
                    label="Intermediate" 
                    isActive={selectedLevel === 'intermediate'} 
                />
                <SimpleButton 
                    onClick={() => handleLevelClick('professional')} 
                    label="Professional" 
                    isActive={selectedLevel === 'professional'} 
                />
            </div>
            <SimpleButton onClick={handleSubmitClick} label="Submit" />
        </div>
    );
};

export default Difficulty;
