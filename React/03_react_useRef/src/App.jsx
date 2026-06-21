import {useRef} from 'react'

function App()
{
  // referencing to a DOM using useRef
  const inputRef = useRef();

  function focusOnInput()
  {
    inputRef.current.focus();   //on clicking submit button, focus on input box
  }



  return <div>
    <p>Referencing to a DOM using useRef</p>
    <input type={"text"}  ref={inputRef}></input>
    <input type={"text"}></input>

    <button onClick={focusOnInput}>Submit</button>
    <br /><br />


    <p>Referencing to a value using useRef.  Starting and stoping a clock</p>

  </div>
}
export default App