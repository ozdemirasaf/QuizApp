import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"


interface Question {
    id: string
    question: string
    answers: string[]
    correctAnswer: string
}

interface QuizState {
    questions: Question[]
    loading: boolean
}

const initialState: QuizState = {
    questions: [],
    loading: true,
}



const questions = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuestions(state, action: PayloadAction<Question[]>) {
            state.questions = action.payload
            state.loading = false
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
    },
})


export const { setQuestions, setLoading } = questions.actions
export default questions.reducer