import { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material'
import AnswerButton from './Components/QuestionButtons'
import Questions from './Components/Questions'
import { BoxStyle, TitleStyle, ButtonContent,ButtonStyle } from './ModalStyle'

function App() {

  const [open, setOpen] = useState<boolean>(true)

  const handleClose = () => {
    setOpen(false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 420,
    height: 170,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2
  };
  return (
    <>
      <div className='container'>
        <div>

        </div>

        <div>
          <Questions />
        </div>

        <div>
          <AnswerButton />
        </div>


      </div>
      <div>
        <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={BoxStyle}>
            <Typography sx={TitleStyle} id="modal-modal-title" variant="h6" component="h2">
              Sınava Başla
            </Typography>

            <Box sx={ButtonContent}>
              <Button sx={ButtonStyle} onClick={handleClose}>Başla</Button>
            </Box>
          </Box>
        </Modal>

      </div>
    </>
  )
}

export default App
