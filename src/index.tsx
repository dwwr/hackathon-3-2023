import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import Zdog from 'zdog'

const container = document.getElementById('root')
const root = createRoot(container!)

Zdog.waitForFonts().then(() => {
  // Once the fonts are loaded, render app
  root.render(<App />)
})