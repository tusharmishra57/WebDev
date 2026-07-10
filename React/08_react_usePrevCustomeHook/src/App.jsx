import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import {usePrev} from './usePrev'

function App() {
  const [currentValue, setCurrentValue] = useState(0);

  const prev = usePrev(currentValue);

  function increase()
  {
    setCurrentValue(c => c+1);
  }

  return <div>
    {currentValue}
    <button onClick = {increase}>Click Me</button>
    <p>The prev value was {prev}</p>
  </div>
}

export default App
