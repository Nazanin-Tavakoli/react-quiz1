import React from 'react';
import './Welcome.css'; // برای استایل‌دهی
import MovingButton from './button'; // آدرس به کامپوننت دکمه

const Welcome = () => {
  return (
    <div className="welcome-section">
      <div className="quiz-header">
        <img src="/react-logo.png" alt="React Logo" className="react-logo" />
        <h1>The React Quiz</h1>
      </div>
      <p>Welcome to the react quiz!</p>
      <p>15 questions to test your React mastery</p>
      
    
      <MovingButton />
        
   
    
    </div>
  );
};

export default Welcome;
