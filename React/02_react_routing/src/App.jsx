import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App()
{
    return <div>
        <BrowserRouter> 

        {/* we are using link instead of anchor tag because we want to make it a single page application */}

          <Link to = "/">Home</Link>   {/* making a href just like anchor tag */}
          <Link to = "1stRoute">1stRoute</Link>
          <Link to = "2ndRoute">2ndRoute</Link>

          <Routes>
              <Route path = "/1stRoute" element = {<Component1/>} />
              <Route path = "/2ndRoute" element = {<Component2/>}  />
              <Route path = "/" element = {<Component3/>}  />

          </Routes>
        </BrowserRouter>
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
