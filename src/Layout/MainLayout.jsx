import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  // store dark mode mode 
    const [mode, setmode] = useState(localStorage.getItem('mode') || 'light')

    useEffect(() => {

        if(mode === 'dark'){
          document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark')
        }

            // set mode  in localstorage
            localStorage.setItem('mode',mode)
          

    },[mode])

    
            // darkmode toggle function
            const handleDarkmodemode = () => {
                  setmode((prev) => (prev === 'light' ? 'dark' : 'light'))
            }



  return (
    <div className="bg-white text-black dark:bg-black dark:text-white" >
      
      <Navbar handleDarkmodemode={handleDarkmodemode} mode={mode} ></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
