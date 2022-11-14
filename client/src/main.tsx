import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Global } from './GlobalCss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>
)
