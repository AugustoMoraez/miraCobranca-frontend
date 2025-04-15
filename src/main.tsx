import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './globalStyle.ts'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
     <GlobalStyle/>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
