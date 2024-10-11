import Welcome from './Welcome'; 
import React, { useState } from 'react';
import Difficulty from './Difficulty';

function App() {
  const [currentPage, setCurrentPage] = useState('Welcome'); // حالت اولیه صفحه شروع است
  const handleStartQuiz = () => {
    setCurrentPage('Difficulty'); 
  };
  return (
    <div>
    {currentPage === 'Welcome' && <Welcome onStart={handleStartQuiz} />}
    {currentPage === 'Difficulty' && <Difficulty />}
  </div>
    
  );
}

export default App;
