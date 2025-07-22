import { useState } from "react"

export default function QuestionButtons() {

    const [selectedOption, setSelectedOption] = useState<number | null>(null)

    return (
        <div className='QuestionButtonsContainer'>

            <div className="buttonContent">
                {[1, 2, 3, 4].map((_, index) => (
                    <button
                        className={`questionButtons ${selectedOption === index ? "selected" : ""}`}
                        key={index}
                        onClick={() => setSelectedOption(index)}
                    >
                        A. Fatih Sultan Mehmet
                    </button>
                ))}

            </div>

            <p>1. Soru</p>
        </div>
    )
}