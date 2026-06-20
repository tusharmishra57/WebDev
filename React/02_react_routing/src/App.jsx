import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App()
{
    return <div>
        <BrowserRouter> 

          <Routes>
            <Route path = "/" element = {<Layout/>}>
              <Route path = "/1stRoute" element = {<Component1/>} />
              <Route path = "/2ndRoute" element = {<Component2/>}  />
              <Route path = "/" element = {<Component3/>}  />

              <Route path = "*" element = {<Nopage/>} />   {/*if user goes to any undefined route */}
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
}

function Layout()
{
  return <div>
    <Header/>
     <Outlet/>  {/*this is going to be the body, will change according to the routes that we are on. */}
    <footer/>
  </div>
}

function Header()
{
  return <div style = {{backgound: "red"}}>
        {/* we are using link instead of anchor tag because we want to make it a single page application */}

          <Link to = "/">Home</Link>   {/* making a href just like anchor tag */}
          <Link to = "1stRoute">1stRoute</Link>
          <Link to = "2ndRoute">2ndRoute</Link>
        </div>
}

function Footer()
{
  return <div style = {{backgroud: "green"}}>
    This is the footer
  </div>
}

function Nopage()
{
  return <div>
    Sorry error, page not found
  </div>
}

function Component1()
{
  const navigate = useNavigate();  //useNavigate is a hook react provides to directly navigate to another route
  
  function redirectUser()
  {
    navigate("/")
  }

    return <div>
        Hi there from 1st route

        <button onClick = {redirectUser}>Go back to landing page</button>

    </div>
}

function Component2()
{
  const navigate = useNavigate();  //useNavigate is a hook react provides to directly navigate to another route
  
  function redirectUser()
  {
    navigate("/")
  }


    return <div>
        Hi there from 2st route
        <button onClick = {redirectUser}>Go back to landing page</button>

    </div>
}

function Component3()
{

    return <div>
        Hi there from 3st route


    </div>
}
export default App;
