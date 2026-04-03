import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import OTTProvider from './api/OTT_Context.jsx'
import LikeAuthProvider from './pages/OTT_Like/LikeAuth.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OTTProvider>
      <LikeAuthProvider>
      <HashRouter>
        <App />
      </HashRouter>
      </LikeAuthProvider>
    </OTTProvider>
  </StrictMode>,
)