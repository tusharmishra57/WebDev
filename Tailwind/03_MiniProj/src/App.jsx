
function App() {
  return <div className="flex">
    <SideBar/>
    <Content/>
    </div>
}

function SideBar()
{
  return <div className="bg-red-500 w-72 h-screen ">

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
