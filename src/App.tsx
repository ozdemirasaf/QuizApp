import ModalStart from './Components/ModalStart'
import AnswerButton from './Components/QuestionButtons'
import Questions from './Components/Questions'
import StatusPanel from './Components/StatusPanel'

function App() {


  return (
    <>
      <div className='container'>

        <StatusPanel />
        <Questions />
        <AnswerButton />
      </div>
      <ModalStart />


    </>
  )
}

export default App
