import React, { useState } from 'react'
import { quiz } from '../Data/quiz'
import './Quizapp.css';

function QuizApp() {

    const [activeQuestion, setActiveQuestions] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null)
    const [resultStatus, setResultStatus] = useState('')
    const [answer, setAnswer] = useState({
        score: 0,
        correctAnswer: 0,
        wrongAnswer: 0
    })

    const handleNext = () => {
        setActiveQuestionIndex(null)

        if (activeQuestion !== quiz.questions.length - 1) {
            setActiveQuestions(activeQuestion + 1)
        } else {
            setShowResult(true)
            setActiveQuestions(0)
        }
        if (resultStatus === true) {
            setAnswer((pre) => ({
                ...pre,
                score: pre.score + 5,
                correctAnswer: pre.correctAnswer + 1

            }))
        } else {
            setAnswer((pre) => ({
                ...pre, wrongAnswer: pre.wrongAnswer + 1
            }))
        }
    }
    const handleList = (item, index) => {
        setActiveQuestionIndex(index)
        if (item === quiz.questions[activeQuestion].correctAnswer) {
            setResultStatus(true)
        } else {
            setResultStatus(false)
        }
    }

    return (
        <>
            {!showResult ?
                <div className='container'>
                  <h1 className='heading'>QUIZ - APP</h1>
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
                </div>

                :
               <div className='results'>
                    <div className='result-style'>
                        <div style={{padding:'50px',borderRadius:'20px'}} className='left-style'>
                            <h1>Result</h1>
                            <p>Total Score: {answer.score}</p>
                            <p>Correct Answers: {answer.correctAnswer}</p>
                            <p>Wrong Answers: {answer.wrongAnswer}</p>
                        </div>
                        
                    </div>
                    <div className='imagesection'>
                    <img src="https://i.pinimg.com/originals/b9/88/b7/b988b7c3e84e1f83ef9447157831b460.gif" alt="" />
                </div>
               </div>
            }
        </>
    )
}
export default QuizApp
