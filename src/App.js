import React from "react";

//Components
import Navbar from "./components/Navbar";
import About from "./components/About";
import Content from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testemonials from "./components/Testemonials";
import Contact from "./components/Contact";


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testemonials />
      <Contact />
    </main>
  );
}

export default App;
