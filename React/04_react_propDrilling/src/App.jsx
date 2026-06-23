import {useState} from 'react'

function App()
{
  const [bulbOn, setBulbOn] = useState(true);
  return <div>
    <Light bulbOn={bulbOn} setBulbOn = {setBulbOn} />
  </div>
}

function Light()
{
  

  return <div>
    <LightBulb  bulbOn={bulbOn}/>
    <LightSwitch setBulbOn = {setBulbOn}/>
  </div>
}

function LightBulb({bulbOn})
{

  return <div>
    light is {bulbOn ? 'ON' : 'OFF'}
  </div>
}

function LightSwitch({setBulbOn})
{
  function Toggle()
  {
    setBulbOn(c => !c)
  }

  return <div>
    <button onClick = {Toggle}>Toggle</button>
  </div>
}

