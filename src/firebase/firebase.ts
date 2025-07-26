import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBmf_gZ9ci8TYAEaRHLgU0jxxP9dtSLEsY",
  authDomain: "quizapp-263ad.firebaseapp.com",
  projectId: "quizapp-263ad",
  storageBucket: "quizapp-263ad.firebasestorage.app",
  messagingSenderId: "235484693707",
  appId: "1:235484693707:web:ff0290dc62c2e55878074e",
  measurementId: "G-ERQBKY9P8P"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
