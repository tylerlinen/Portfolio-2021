import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import "./utils/App.css"
import "./utils/Home.css"
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
       
       
      </div>
    </Router>
  );
}

export default App;
