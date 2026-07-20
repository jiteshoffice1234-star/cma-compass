import React from 'react'
import ReactDOM from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { setStatusBarColor, isNative } from './lib/capacitor'

if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'production') {
  const noop = () => {}
  console.error = noop
  console.warn = noop
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </React.StrictMode>,
)

if (isNative) {
  // status bar is updated on theme change in components
  setStatusBarColor('dark').catch(() => {})
}
