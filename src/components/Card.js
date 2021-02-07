import React, { useState, useEffect } from "react";
import Data from "../json/data.json";

export default function Card() {

    const userChoice = "html";
    const questions = Data[userChoice];



    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {  
        document.title = `You're at question ${currentQuestion + 1}`;  
    });

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    
    return (
        <div className="code-quiz__bloc-card">
            <h2><span>{userChoice}</span> Quiz!</h2>
            {showScore ? (
                <CardScore score={score} questionsLength={questions.length} />
            ) : (
                <>
                    <CardQuestionCount currentQuestion={currentQuestion} questionsLength={questions.length}/>

                    <CardQuestion currentQuestion={questions[currentQuestion].questionText}/>

                    <div className="code-quiz__answer">
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} key={index}>{answerOption.answerText}</button>
						))}
                    </div>
                </>
            )}
        </div>  
        
    )
}

function CardQuestionCount(props) {
    return (
        <div className="code-quiz__question-count">
            <p>Question {props.currentQuestion + 1}/{props.questionsLength}</p>
        </div>
    );
}

function CardQuestion(props) {
    return (
        <div className="code-quiz__question">
            <p>{props.currentQuestion}</p>
        </div>
    );
}

function CardScore(props) {
    return (
        <div className='code-quiz__score'>
            <p>You scored {props.score} out of {props.questionsLength}</p>
        </div>
    );
}
