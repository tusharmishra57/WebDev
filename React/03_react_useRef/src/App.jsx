import {useRef, useState} from 'react'

function App()
{
  // referencing to a DOM using useRef
  const inputRef = useRef();
  function focusOnInput()
  {
    inputRef.current.focus();   //on clicking submit button, focus on input box
  }


  //referencing to a value using useRef
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef();
  
  function startClock()
  {
    setInterval(function(){
      setCurrentCount(c => c + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock()
  {
    clearInterval(timer.current);
  }

  return (
    <div>
      <p>Referencing to a DOM using useRef</p>
      <input type={"text"}  ref={inputRef}></input>
      <input type={"text"}></input>

      <button onClick={focusOnInput}>Submit</button>
      <br /><br />




      <p>Referencing to a value using useRef.  Starting and stoping a clock</p>
      {currentCount}
      <br />
      <button onClick = {startClock}>Start</button>
      <button onClick = {StopClock}>Stop</button> 

    </div>
  )
}
export default App