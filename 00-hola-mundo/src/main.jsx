import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import {App} from './App'
import { TwitterFollowCard } from './TwitterFollowCard'


createRoot(document.getElementById('root')).render(
<>
  <App/>
</>
)
