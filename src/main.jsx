import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode basename={import.meta.env.BASE_URL}>
    <App />
  </StrictMode>,
)
