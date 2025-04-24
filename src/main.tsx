import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/raleway/400.css'; // Light
import '@fontsource/raleway/700.css'; // Bold

import App from './App.tsx'

import './scss/pages/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
