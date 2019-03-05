import React, { Component } from "react";
import "./css/super.css";
import "./css/xs.css";
import "./css/sm.css";
import "./css/md.css";
import Sidebar from "./Components/Sidebar.jsx";
import Home from "./Components/pages/Home.jsx";
import About from "./Components/pages/About.jsx";
import Skills from "./Components/pages/Skills.jsx";
import Experience from "./Components/pages/Experinece.jsx";
import Projects from "./Components/pages/Projects.jsx";
import Topbar from "./Components/Topbar.jsx";
import AboutCarousel from "./Components/carousel_pages/AboutCarousel.jsx";
import ExperienceCarousel from "./Components/carousel_pages/ExperienceCarousel.jsx";
import ProjectCarousel from "./Components/carousel_pages/ProjectCarousel.jsx";

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
