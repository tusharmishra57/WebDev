import { useState, useEffect } from "react";

//Counter in React-

// function App() {
  
//   return <div>
//     Hi there
  
//   <Counter></Counter>
//   </div>
  
// }

// function Counter()
// {
//   // defining a state
//   const [count, setCount] = useState(0);

//   function increaseCount()
//   {
//     setCount(count + 1);
//   }

//   function decreaseCount()
//   {
//     setCount(count - 1);
//   }

//   function resetCount()
//   {
//     setCount(0);
//   }

//   //defining a component
//   return <div>
//     <h1>{count}</h1>
//     <button onClick={increaseCount}>Increase Count</button>
//     <button onClick={decreaseCount}>Decrease Count</button>
//     <button onClick={resetCount}>Reset Count</button>
//   </div>

  
// }



//Timer in react-


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

  console.log("counter");

  useEffect(function(){
    setInterval(function(){
      setCount(function(variable){
        return variable+1;
      });
    }, 1000)
    console.log("mounted")
  }, []);      //[] is a dependency array, useEffect has two arguments

  return <div>
    <h1>{count}</h1>
  </div>

  
}

export default App
