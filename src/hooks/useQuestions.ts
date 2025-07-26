import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebase"
import { setQuestions, setLoading } from "../Redux/questions"
import type { AppDispatch } from "../Redux/store"

const useFetchQuestions = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const fetchQuestions = async () => {
      dispatch(setLoading(true))

      try {
        const querySnapshot = await getDocs(collection(db, "questions"))

        const data = querySnapshot.docs.map((doc) => {
          const rawData = doc.data() as any
          let answersArray: string[] = []

          if (typeof rawData.answers === "string") {
            answersArray = rawData.answers
              .replace(/\\?"/g, "")
              .split(",")
              .map((s: string) => s.trim())
          } else if (Array.isArray(rawData.answers)) {
            answersArray = rawData.answers
          }

          return {
            id: doc.id,
            question: rawData.question,
            correctAnswer: rawData.correctAnswer,
            answers: answersArray,
          }
        })

        dispatch(setQuestions(data))
      } catch (error) {
        console.error("Error fetching questions:", error)
        dispatch(setLoading(false))
      }
    }

    fetchQuestions()
  }, [dispatch])
}

export default useFetchQuestions
