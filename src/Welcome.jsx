import React from 'react';
import './Welcome.css'; 
import MovingButton from './button'; 

const Welcome = ({onStart}) => {
  return (
    <div className="welcome-section">
      <div className="quiz-header">
        <img src="logo192.png" alt="React Logo" className="react-logo" />
        <h1>The React Quiz</h1>
      </div>
      <p>Welcome to the react quiz!</p>
      <p className='Tex-one'>15 questions to test your React mastery</p>
      
    
      <MovingButton onClick={onStart} />
        
   
    
    </div>
  );
};

export default Welcome;
