import React from "react";
import ResponsiveAppBar from "./components/navbar";
import NavScrollExample from "./components/navbar"
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Work from "./pages/Work/work";
import Test from "./pages/Test/test";
import Prising from "./pages/Prising/prising";
import Projekt from "./pages/Projekt/project";
import Blog from "./pages/Blog/blog";
import Contact from "./pages/Contact/contact";
import Coyp from "./pages/Coyp/copy";
import "./style.css"


function App() {

  return (
    <>
      <div id="welcom">
        <ResponsiveAppBar />
        <Home />
        <About />
        <Work />
        <Test />
        <Prising />
        <Projekt />
        <Blog />
        <Contact />
        <Coyp />
      </div>

    </>
  );
}

export default App;
