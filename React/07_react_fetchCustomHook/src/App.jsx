import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {useFetch} from './hooks'
function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { data } = useFetch("https://jsonplaceholder.typicode.com/todos/" + currentPost);

  return <div>
    <button onClick = { () => setCurrentPost(1)}>Get data for 1</button><br/>
    <button onClick = { () => setCurrentPost(2)}>Get data for 2</button><br/>
    <button onClick = { () =>  setCurrentPost(3) }>Get data for 3</button><br/>
    {JSON.stringify(data)}  
  </div>
}

export default App
