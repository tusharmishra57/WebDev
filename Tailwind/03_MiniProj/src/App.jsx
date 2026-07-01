import { Profile } from "./icons/profile";
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
    return <div>
        <div className="fixed top-0 left-0 z-50 md:static transition-all duration-1000 w-0 md:w-10 bg-red-500 h-screen">
      <div className="cursor-pointer fixed left-0 top-0 hover:bg-slate-200" onClick={() => {setSideBarOpen(!sideBarOpen)}}>
        <SideBarToggle />
        </div>    
      </div>
    </div>
    
  }
  return <div className="fixed top-0 left-0 z-50 w-48 md:static transition-all duration-1000 md:w-72 bg-red-500 h-screen">
      <div className="cursor-pointer fixed left-0 top-0 hover:bg-slate-200" onClick={() => {setSideBarOpen(!sideBarOpen)}}>
        <SideBarToggle />
      </div>
      
    </div>
}

function Content()
{
  return <div className="w-full">
    <div className="bg-black h-30 hidden md:block">

    </div>


    <div className="grid grid-cols-10 gap-8 p-8">
    <div className=" bg-blue-300 rounded-2xl md:col-span-2 h-48 -translate-y-12 shadow-lg hidden md:block "> 
      <div className="flex justify-center items-center pt-[20%] scale-150">
        <Profile/>
      </div> <br/>
      <div className="flex justify-center font-bold">
        <p>Tushar Mishra</p>
      </div>
      <div className="flex justify-center scale-75">
        tusharmishra.developer@gmail.com
      </div>
      <div className="flex justify-center scale-75">
        991****019
      </div>

    </div>
    <div className="bg-green-300 rounded-2xl md:col-span-5 h-96 shadow-lg col-span-10"> 

    </div>

    <div className="bg-yellow-300 rounded-2xl md:col-span-3 h-96 shadow-lg col-span-10"> 

    </div>
  </div>
    </div>
}

export default App
