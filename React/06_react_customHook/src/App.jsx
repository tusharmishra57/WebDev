import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


//Custome Hook
function useCounter()
{
  const [count, setCount] = useState(0);

  function increase()
  {
    setCount(c => c+1)
  }

  return {
    count: count,
    increase: increase

  }
}

function App() {

  return <div>
    <Counter />
    <Counter />
  </div>
}

function Counter()
{

  const {count, increase} = useCounter();

  return <div>
    <button onClick = {increase}>Increase {count}</button>
  </div>
}

export default App
