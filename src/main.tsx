import { StrictMode } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { createRoot } from 'react-dom/client'
import theme from './theme';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
       <App />
    </ThemeProvider>
   
  </StrictMode>,
)
