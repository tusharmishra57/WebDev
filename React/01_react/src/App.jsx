import { useState } from "react";

function App() {
  
  return <div>
    Hi there
  
  <Counter></Counter>
  </div>
  
}

function Counter()
{
  // defining a state
  const [count, setCount] = useState(0);

  function increaseCount()
  {
    setCount(count + 1);
  }

  function decreaseCount()
  {
    setCount(count - 1);
  }

  function resetCount()
  {
    setCount(0);
  }

  //defining a component
  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={resetCount}>Reset Count</button>
  </div>

  
}

export default App
