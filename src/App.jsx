import Welcome from './Welcome';
import React, { useState } from 'react';
import Difficulty from './Difficulty';
import Quiz from './Quiz'; 

function App() {
    const [currentPage, setCurrentPage] = useState('Welcome'); 
    const [selectedLevel, setSelectedLevel] = useState(null); 

    const handleStartQuiz = () => {
        setCurrentPage('Difficulty');
    };

    const handleSelectLevel = (level) => {
      setSelectedLevel(level); 
      setCurrentPage('Quiz');
  };

    return (
        <div>
            {currentPage === 'Welcome' && <Welcome onStart={handleStartQuiz} />}
            {currentPage === 'Difficulty' && <Difficulty onSelectLevel={handleSelectLevel} />}
            {currentPage === 'Quiz' && selectedLevel && <Quiz level={selectedLevel} />}

            
        </div>
    );
}

export default App;
