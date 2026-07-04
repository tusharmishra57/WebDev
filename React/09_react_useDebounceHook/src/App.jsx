import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

//Read Debounce hook notes code, that is even more important 
function useDebounce(searchBackend)
{
    const clock = useRef();
    const fn = () =>
    {
        clearTimeout(clock.current);
        clock.current = setTimeout(searchBackend, 200)
    }
    
    return fn;
}

function App() {

    function searchBackend()
    {
        console.log("searching the backend");
    }

    const debouncefn = useDebounce(searchBackend);

  return <div>
    <input type="text" onChange={debouncefn}></input>
  </div>
}

export default App
