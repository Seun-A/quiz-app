import { useState } from "react"

export default function Option({
  id,
  isCorrectOption,
  isSelectedOption,
  isCheckAnswers,
  selectOption,
  children,
}) {
  const [borderState, setBorderState] = useState("default")

  const utilities = {
    default: "border-yinmn-blue hover:bg-lavender/50",
    selected: "bg-lavender border-lavender",
    success: "bg-success border-success",
    danger: "bg-danger border-danger opacity-55",
  }

  const handleSelect = () => {
    selectOption(id)
  }

  return (
    <button
      onClick={handleSelect}
      disabled={isCheckAnswers}
      className={`
        btn-option px-4 py-1 border rounded-[0.8rem] font-medium text-sm md:min-w-[6rem] md:text-base select-none whitespace-nowrap transition-colors
        ${utilities[borderState]}
      `}
    >
      {children}
    </button>
  )
}