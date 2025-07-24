import { Box, Button, Modal, Typography } from '@mui/material'
import { BoxStyle, TitleStyle, ButtonContent, ButtonStyle } from '../../ModalStyle'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startQuiz } from '../../Redux/quizSlice';


export default function ModalStart() {


    const [open, setOpen] = useState<boolean>(true)
    const dispatch = useDispatch()

    const handleClose = () => {
        setOpen(false);
        dispatch(startQuiz())
    }

    return (
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
    )
}