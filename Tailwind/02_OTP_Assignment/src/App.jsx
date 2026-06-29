import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {Otp} from './otp'

function App() {
  return <div className="flex min-h-screen items-center justify-center">
    <Otp className = "bg-green-300"/>
  </div>
}

export default App
