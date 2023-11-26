import React from "react";
import CriaSidebar from './criaSidebar.jsx'
import { Outlet } from "react-router-dom";


function Home() {
  console.log(<Outlet />);
  return (
    <div className="home">
     <CriaSidebar />
      <Outlet />
    </div>
      
    )
  }
  
  export default Home