import { configureStore } from "@reduxjs/toolkit";
import quizReducer from './quizSlice';
import getQuiz from './questions';


export const store = configureStore({
    reducer: {
        quiz: quizReducer,
        getQuiz: getQuiz
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch