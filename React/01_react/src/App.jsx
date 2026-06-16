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


// function App() {
  
//   return <div>
//     Hi there
  
//   <Counter></Counter>
//   </div>
  
// }

// function Counter()
// {
//   // defining a state
//   const [count, setCount] = useState(0);  //value of count is 0 only once, after that it will be according to state change because of useState hook.

//   console.log("counter"); //logs everytime state changes (re render).

//   useEffect(function(){
//     setInterval(function(){
//       setCount(function(variable){
//         return variable+1;
//       });
//     }, 1000)
//   }, []);      //[] is a dependency array, useEffect has two arguments

  
//   return <div>
//     <h1>{count}</h1>
//   </div>

  
// }


//conditional rendering, mounting, unmounting, cleanup

function App() {

  // conditional rendering
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setCounterVisible(c => !c)
    }, 5000)
  }, [])
  
  return <div>
    Hi there
    {counterVisible &&<Counter></Counter>}  {/*means counter will show only when counterVisible is true after every 5 sec */}
    Hello!!!!!
  </div>
  
}

function Counter()
{
  // defining a state
  const [count, setCount] = useState(0);  //value of count is 0 only once, after that it will be according to state change because of useState hook.

  console.log("counter before setInterval"); //logs everytime state changes (re render).

  useEffect(function(){
    let clock = setInterval(function(){
      setCount(function(variable){
        console.log("from inside setInterval");
        return variable+1;
      });
    }, 1000)

    return () => {
      console.log("On unmount");
      clearInterval(clock);   //Cleanup
    }
  }, []);      //[] is a dependency array, useEffect has two arguments

  
  return <div>
    <h1>{count}</h1>
  </div>
}

export default App
