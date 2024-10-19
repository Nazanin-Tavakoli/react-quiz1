import Welcome from './Welcome';
import React, { useState } from 'react';
import Difficulty from './Difficulty';
import Quiz from './Quiz'; // اضافه کردن کامپوننت Quiz

function App() {
    const [currentPage, setCurrentPage] = useState('Welcome'); // حالت اولیه صفحه شروع است
    const [selectedLevel, setSelectedLevel] = useState(null); // وضعیت برای ذخیره‌سازی سطح انتخابی

    const handleStartQuiz = () => {
        setCurrentPage('Difficulty');
    };

    const handleSelectLevel = (level) => {
      setSelectedLevel(level); // تنظیم سطح انتخاب‌شده
      setCurrentPage('Quiz'); // به صفحه آزمون تغییر می‌کند
  };

    return (
        <div>
            {currentPage === 'Welcome' && <Welcome onStart={handleStartQuiz} />}
            {currentPage === 'Difficulty' && <Difficulty onSelectLevel={() => setCurrentPage('LevelSelector')} />}
            {currentPage === 'Quiz' && selectedLevel && <Quiz level={selectedLevel} />}

            
        </div>
    );
}

export default App;
