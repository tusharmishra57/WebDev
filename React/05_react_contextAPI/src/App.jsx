import {useState, createContext, useContext} from 'react'


//context storing
const BulbContext = createContext();

//Provider wrapping logic
function BulbProvider({children})
{
  const [bulbOn, setBulbOn] = useState(true);

  return <div>
      <BulbContext.Provider value ={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
    }}>
      {children}
    </BulbContext.Provider>
  </div>
}

function App()
{
  return <div>
    <Light />
  </div>
}

function Light()
{

  return <div>

    {/* wrapping in provider */}
    <BulbProvider>
      <LightBulb  />
      <LightSwitch />
    </BulbProvider>
    
  </div>
}

function LightBulb()
{
  //consume the context
  const {bulbOn} = useContext(BulbContext);  //const {bulbOn}, an object because useContext gives an object and we have to destructure the contexts

  return <div>
    light is {bulbOn ? 'ON' : 'OFF'}
  </div>
}

function LightSwitch()
{
  //consume the context
  const { setBulbOn } = useContext(BulbContext);  //const {setBulbOn}, an object because useContext gives an object and we have to destructure the contexts

  function Toggle()
  {
    setBulbOn(c => !c)
  }

  return <div>
    <button onClick = {Toggle}>Toggle</button>
  </div>
}

