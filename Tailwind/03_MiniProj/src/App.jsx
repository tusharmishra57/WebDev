import { SideBarToggle } from "./icons/sideBarToggle"
import {useState} from 'react'

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return <div className="flex">
    <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
    <Content/>
    </div>
}

function SideBar({sideBarOpen, setSideBarOpen})
{
  if(!sideBarOpen)
  {
    return <div className="bg-red-500 w-20 h-screen">
      <div className="fixed left-0 top-0 hover:bg-slate-200" onClick={() => {setSideBarOpen(!sideBarOpen)}}>
        <SideBarToggle />
      </div>
    </div>
  }
  return <div className="bg-red-500 w-72 h-screen ">
      <div className="fixed left-0 top-0 hover:bg-slate-200" onClick={() => {setSideBarOpen(!sideBarOpen)}}>
        <SideBarToggle />
      </div>
      
    </div>

    
  
  
}

function Content()
{
  return <div className="w-full">
    <div className="bg-black h-30">

    </div>
    <div className="grid grid-cols-10 gap-8 p-8">
    <div className="bg-blue-300 rounded-2xl col-span-2 h-48 -translate-y-12 shadow-lg"> 

    </div>
    <div className="bg-green-300 rounded-2xl col-span-5 h-96 shadow-lg"> 

    </div>
    <div className="bg-yellow-300 rounded-2xl col-span-3 h-96 shadow-lg"> 

    </div>
  </div>
    </div>
}

export default App
