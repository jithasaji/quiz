import React, { useState } from 'react'
import { quiz } from '../Data/quiz'
import './Quizapp.css';

function QuizApp() {

    const [activeQuestion, setActiveQuestions] = useState(0)

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null)

    const handleNext = () => {
        setActiveQuestionIndex(null)
        if (activeQuestion !== quiz.questions.length - 1) {
            setActiveQuestions(activeQuestion + 1)
        } else {
            setActiveQuestions(0)
        }
    }
    const handleList = (item, index) => {
        setActiveQuestionIndex(index)
    }

    return (
        <>
            <div className='container'>
                {
                    <div className='section'>
                        <h1>{activeQuestion + 1}/{quiz.questions.length}</h1>
                        <h3>{quiz.questions[activeQuestion].question}</h3>
                        <ul>
                            {quiz.questions[activeQuestion].choices.map((item, index) => (
                                <li className={activeQuestionIndex === index ? 'list-style' : null} onClick={() => handleList(item, index)}>
                                    {item}
                                </li>
                            ))
                            }
                        </ul>
                        <div className='next-button'>
                            <button disabled={activeQuestionIndex === null} onClick={() => handleNext()} type="button">{activeQuestion === quiz.questions.length - 1 ? 'Finish' : 'Next'}</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
export default QuizApp
