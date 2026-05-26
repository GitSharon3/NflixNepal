import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './firebase/config.js'
import App from './App.jsx'
import UserContext from './context/userContext.jsx'
import MoviePopUpProvider from './context/moviePopUpContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContext>
        <MoviePopUpProvider>
          <App />
        </MoviePopUpProvider>
      </UserContext>
    </BrowserRouter>
  </StrictMode>,
)
