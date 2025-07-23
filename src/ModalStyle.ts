import { alignItems, borderRadius, color, display, flex, fontSize, fontWeight, height, justifyContent, textAlign, width } from "@mui/system"

const BoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 300, sm: 400, md: 420 },
  height: { xs: 130, sm: 160 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { xs: 2, sm: 3, md: 4 },
  borderRadius: 2,
  outline: 'none',
};

const TitleStyle = {
  textAlign: 'center',
  fontSize: { xs: 20, sm: 24, md: 25 },
  fontWeight: 600,
  color: '#e17c57',
};

const ButtonContent = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

const ButtonStyle = {
  backgroundColor: '#5eb490',
  color: '#fff',
  height: 40,
  width: { xs: 180, sm: 200, md: 220 },
  borderRadius: 2,
  transition: 'background-color 0.3s ease, color 0.3s ease, border 0.1s ease',
  fontSize: { xs: 14, sm: 15, md: 16 },
  fontWeight: 500,
  '&:hover': {
    border: '3px solid var(--background)',
    color: 'var(--background)',
    backgroundColor: 'transparent',
  },
};

export { BoxStyle, TitleStyle, ButtonContent, ButtonStyle }