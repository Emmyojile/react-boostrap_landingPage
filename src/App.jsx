import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Nav";
import Carousel from "./Carousel";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Carousel />
      <About />
      <Service />
      <Portfolio />
      <Team />
      <Contact />
      <footer className="bg-dark p-2 text-center">
        <div className="container">
          <p className="text-white">All Rights Reserved @EmmyOjile</p>
        </div>
      </footer>
    </>
  );
}

export default App;
