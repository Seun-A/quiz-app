import { useState } from "react"
import Option from "./Option"

export default function Question({
  id,
  isCorrect,
  isCheckAnswers,
  questionBank,
  setQuestionBank,
  question,
  options
}) {
  const [optionsSet, setOptionsSet] = useState(options)
  
  
  const handleSelectOption = (optionId) => {
    const thisOption = options.find(option => option.id === optionId)
    const thisQuestion = questionBank.find(question => question.id === id)

    setOptionsSet(prev => 
      prev.map(option => ({
        ...option,
        isSelectedOption: true
      }))
    )
  }

  return (
    <div className="border-b border-lavender py-4 space-y-3">
      <h2 className="text-xl">{question}</h2>
      <section className="options-container flex flex-wrap gap-3">
        {
          options.map(({option, ...props}, index) => (
            <Option
              id={index}
              key={index}
              isCheckAnswers={isCheckAnswers}
              selectOption={handleSelectOption}
              // {...props}
            >{option}</Option>
          ))
        }
      </section>
    </div>
  )
}