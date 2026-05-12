import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GenreProvider } from './context/GenreContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GenreProvider>
      <App />
    </GenreProvider>
  </StrictMode>
)
