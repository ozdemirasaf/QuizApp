import { useSelector } from 'react-redux'
import type { RootState } from '../../Redux/store'

export default function Questions() {
    const questions = useSelector((state: RootState) => state.getQuiz.questions)

    console.log(questions);

    if (!questions || questions.length === 0) return <p>Soru yok</p>

    return (
        <div>
            {questions.map((q: any, index: number) => (
                <h1 key={index} className="questions">{q.question}</h1>
            ))}
        </div>
    )
}
