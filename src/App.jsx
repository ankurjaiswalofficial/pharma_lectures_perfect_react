// import logo from "./logo.svg";
import "./App.css";
import Home from "./app/page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./app/about_us/page";
function App() {
    return (
        <Router>
            <Home />
          
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={AboutUs} />
          </Routes>
        </Router>
    );
}

export default App;
