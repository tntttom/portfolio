import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";

import "./sass/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
