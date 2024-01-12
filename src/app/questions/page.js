"use client"
import { useEffect, useState } from "react"
import Question from "@/components/Question"
import questionsData from "@/data/questionBank"

export default function QuestionsPage() {
  const [isCheckAnswers, setCheckAnswers] = useState(false)
  const [score, setScore] = useState(0)
  const [questionBank, setQuestionBank] = useState([])
    
  useEffect(() => setQuestionBank(
    questionsData
    .map(({question, correct_answer, incorrect_answers}, index) => ({
      id: index,
      isCorrect: false,
      question: question,
      __typename: "question",
      options: [...incorrect_answers.map((ans, index) => ({
        id:index,
        option: ans,
        isCorrectOption: false,
        isSelectedOption: false,
        __typename: "option"
      })), {
        id: incorrect_answers.length,
        option: correct_answer,
        isCorrectOption: true,
        isSelectedOption: false,
        __typename: "option"
      }] //.sort(() => Math.random() - 0.5)
    }))
  ), [])

  const handleCheckAnswers = () => {
    setCheckAnswers(true)
  }
  const handleNewGame = () => {
    setCheckAnswers(false)
  }

  return (
    <main className="px-[4.5rem] py-10">
      {
        questionBank.map((question, index) => (
          <Question
            key={index}
            {...question}
            questionBank={questionBank}
            setQuestionBank={setQuestionBank}
            isCheckAnswers={isCheckAnswers}
            setCheckAnswers={setCheckAnswers}
          />
        ))
      }

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start pt-5 gap-5 md:gap-10 ">
        {
          isCheckAnswers?(
            <h3 className="font-[0.8rem]">You scored {score}/{questionBank.length} correct answers</h3>
          ) : null
        }
        <button
          onClick={!isCheckAnswers ? handleCheckAnswers : handleNewGame}
          className="btn btn--sm"
        >
          {
            isCheckAnswers ? "Play again" : "Check Answers"
          }
        </button>
      </div>
    </main>
  )
}
