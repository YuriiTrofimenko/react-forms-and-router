import {Route, BrowserRouter, Switch} from "react-router-dom"
import NavBar from "./components/base/NavBar"
import Home from "./components/pages/Home"
import Form from "./components/pages/Form"
import About from "./components/pages/About"
function App() {
  return (
    <div>
      <h1>Router Demo</h1>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/about" component={About} />
          <Route children={()=><h2>Error 404: Page Not Found</h2>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
