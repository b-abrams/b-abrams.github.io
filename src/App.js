import React, { Component } from "react";
import "./css/super.css";
import "./css/xs.css";
import "./css/sm.css";
import "./css/md.css";
import Sidebar from "./Components/Sidebar.js";
import Home from "./Components/pages/Home.js";
import About from "./Components/pages/About.js";
import Skills from "./Components/pages/Skills.js";
import Experience from "./Components/pages/Experinece.js";
import Projects from "./Components/pages/Projects.js";
import Topbar from "./Components/Topbar.js";
import AboutCarousel from "./Components/carousel_pages/AboutCarousel.js";
import ExperienceCarousel from "./Components/carousel_pages/ExperienceCarousel.js";
import ProjectCarousel from "./Components/carousel_pages/ProjectCarousel.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Sidebar />
        <Home />
        <AboutCarousel />
        <About />
        <Skills />
        <ExperienceCarousel />
        <Experience />
        <ProjectCarousel />
        <Projects />
      </div>
    );
  }
}

export default App;
