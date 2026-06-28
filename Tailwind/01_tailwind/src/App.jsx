import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 return <>
   {/*Flex in tailwind */}

  <div className= "flex justify-around bg-yellow-500">
    <div className = "bg-blue-300">class1</div>
    <div className = "bg-green-300">class2</div>
    <div className = "bg-red-300">class3</div>
 </div>  
 <br/> <br/>

   {/* Grids in tailwind */}
  <div className= "grid grid-cols-12">  
    <div className = "bg-blue-300  col-span-5">class1</div>   
    <div className = "bg-green-300 col-span-5">class2</div>   
    <div className = "bg-red-300 col-span-2">class3</div>     
 </div>
 </>
}

export default App
