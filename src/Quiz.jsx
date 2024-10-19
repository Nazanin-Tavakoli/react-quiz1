
import React, { useState } from 'react';
import { beginnerQuestions, intermediateQuestions, professionalQuestions } from './questions';
import './Quiz.css';
function Quiz({ level }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = 
        level === 'beginner' ? beginnerQuestions :
        level === 'intermediate' ? intermediateQuestions :
        level === 'professional' ? professionalQuestions : [];
        if (questions.length === 0) {
            return <div>هیچ سوالی برای این سطح وجود ندارد.</div>;
        }
    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div>
            {showResult ? (
                <div>امتیاز شما: {score} از {questions.length}</div>
            ) : (
                <div>
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option)}>
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Quiz;
