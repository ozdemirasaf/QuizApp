import { createSlice } from "@reduxjs/toolkit"

interface QuizState {
    isStarted: boolean
}

const initialState: QuizState = {
    isStarted: false
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        startQuiz: (state) => {
            state.isStarted = true
        },
        resetQuiz: (state) => {
            state.isStarted = false

        }
    }
})

export const {startQuiz, resetQuiz} = quizSlice.actions
export default quizSlice.reducer
