import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/raleway/400.css' // Light
import '@fontsource/raleway/700.css' // Bold

import App from './App.tsx'

import './scss/pages/index.scss'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
