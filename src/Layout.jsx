import React from "react";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";
import CustomNav from "./components/Nav";

const Layout = () => {
  return (
    <div>
      <CustomNav />
      <Carousel />
      <About />
      <Service />
      <Portfolio />
      <Team />
      <Contact />
      <Outlet />
      <footer className="bg-dark p-2 text-center">
        <div className="container">
          <p className="text-white">All Rights Reserved @EmmyOjile</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
