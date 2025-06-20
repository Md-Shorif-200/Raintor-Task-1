import React, { useState } from 'react';
import { FaArrowRight, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Primary_btn from './Primary_btn';
import { BsSunFill } from 'react-icons/bs';
import { MdCancel, MdMenu } from 'react-icons/md';

const Navbar = ({handleDarkmodemode,mode}) => {

    // manage menu active role
    const [isActive,setIsActive] = useState(false);
    

    return (
        <nav className='nav_align  py-[28px] px-[5%] sticky top-0 shadow-sm bg-white dark:bg-black z-50 '>
              {/* nav logo */}
                 <div className="nav_logo ">
                      <h1 className='uppercase text-[20px] lg:text-[34px] font-bold'>DEVLOP.ME</h1>
                 </div>

                 {/* nav list */}

                  <div className='flex justify-between items-center gap-x-[70px]'>

                      <div className="nav_list hidden lg:block">
                             <Link className='text-base pl-[37px] font-normal capitalize'> home </Link>
                             <Link className='text-base pl-[37px] font-normal capitalize'> about </Link>
                             <Link className='text-base pl-[37px] font-normal capitalize'> portfolio</Link>
                             <Link className='text-base pl-[37px] font-normal capitalize'> blog </Link>
                     </div>

                     
                     {/* responsive nav list */}

                       <div className={`w-[50%] sm:w-[40%] md:w-[20%] mt-2 mr-4 responsive_nav_list absolute top-[100%] text-center text-black right-0 bg-white shadow-sm border border-gray-300 rounded-xl ${isActive ? 'block' : 'hidden'} transition-all duration-100 `}>
                          <ul>
                             <li className='text-base  py-4 border border-b-gray-100  font-normal capitalize hover:bg-gray-200 transition-all'> home </li>
                             <li className='text-base  py-4 border border-b-gray-100  font-normal capitalize hover:bg-gray-200 transition-all'> about </li>
                             <li className='text-base  py-4 border border-b-gray-100  font-normal capitalize hover:bg-gray-200 transition-all'> portfolio</li>
                             <li className='text-base  py-4 border border-b-gray-100  font-normal capitalize hover:bg-gray-200 transition-all'> blog </li>
                          </ul>
                     </div>

                    {/* dark mode /light mode */}

                     <div className="toggle_btn text-2xl"  onClick={handleDarkmodemode} >
                        {
                            mode === 'light' 
                            ?
                             <>  <FaMoon></FaMoon> </>
                             : 

                             <>  <BsSunFill></BsSunFill> </>
                        }
                     </div>

                     {/*  nav menu icon */}
                     <div className="menu_icon text-black dark:text-white text-4xl lg:hidden transition-all duration-[.5s]" onClick={() => setIsActive(!isActive)}>
                            {
                                  isActive ? <> <MdCancel></MdCancel> </>  : <> <MdMenu></MdMenu> </>
                            }
                
                     </div>

                     <div className="nav_button hidden lg:block">
                        {/* call reusable button */}
                                <Primary_btn Text={'Start Project'} icon={<FaArrowRight></FaArrowRight>}></Primary_btn>
                     </div>
                  

                  </div>
                   

                      
        </nav>
    );
};

export default Navbar;