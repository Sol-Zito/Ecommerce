import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import ThemeContext from "../../Context/Themes";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";


const Layout = () => {
  
  const {theme} = useContext(ThemeContext);

  return (
    <div style={{background: theme.background, color:theme.font}}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
