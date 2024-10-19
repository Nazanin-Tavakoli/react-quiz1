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

    const handleCardUpdate = (e) => {
        let pos = [e.clientX, e.clientY];
        e.preventDefault();
        if (e.type === "touchmove") {
            pos = [e.touches[0].clientX, e.touches[0].clientY];
        }
        const card = e.currentTarget;
        const dimensions = card.getBoundingClientRect();
        const l = pos[0] - dimensions.left;
        const t = pos[1] - dimensions.top;
        const h = dimensions.height;
        const w = dimensions.width;
        const px = Math.min(Math.max((100 / w) * l, 0), 100);
        const py = Math.min(Math.max((100 / h) * t, 0), 100);

        card.style.setProperty("--pointer-x", `${px}%`);
        card.style.setProperty("--pointer-y", `${py}%`);
    };

    return (
        <div className="quiz-container">
            {showResult ? (
                <div className="result">
                    <h2>the end </h2>
                    <p> Score {score} of {questions.length}</p>
                </div>
            ) : (
                <div 
                    className="card"
                    onMouseMove={handleCardUpdate}
                    onTouchMove={handleCardUpdate}
                >
                    <div className="inside">
                        <h2>{questions[currentQuestionIndex].question}</h2>
                        <div>
                            {questions[currentQuestionIndex].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option)}
                                    className="option-button"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Quiz;
