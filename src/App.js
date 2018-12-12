import React, { Component } from "react";
import "./css/md.css";
import "./css/super.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Skills from "./Components/pages/Skills";
import Experience from "./Components/pages/Experinece";
import Projects from "./Components/pages/Projects";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    );
  }
}

export default App;
