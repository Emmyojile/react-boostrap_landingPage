import { Outlet } from "react-router-dom";
import CustomNav from "./components/Nav";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <CustomNav />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
