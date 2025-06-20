import React from 'react';
import { FaArrowRight, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Primary_btn from './Primary_btn';
import { BsSunFill } from 'react-icons/bs';

const Navbar = ({handleDarkmodemode,mode}) => {
    return (
        <nav className='nav_align py-[28px] px-[50px] sticky top-0 shadow-xl bg-white dark:bg-black z-50'>
              {/* nav logo */}
                 <div className="nav_logo ">
                      <h1 className='uppercase text-[34px] font-bold'>DEVLOP.ME</h1>
                 </div>

                 {/* nav list */}

                  <div className='flex justify-between items-center gap-x-[70px]'>

                      <div className="nav_list">
                             <Link className='text-base pl-[37px] font-normal capitalize'> home </Link>
                             <Link className='text-base pl-[37px] font-normal capitalize'> about </Link>
                             <Link className='text-base pl-[37px] font-normal capitalize'> portfolio</Link>
                             <Link className='text-base pl-[37px] font-normal capitalize'> blog </Link>
                     </div>

                     {/* nav buttons */}

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

                     <div className="nav_button">
                        {/* call reusable button */}
                                <Primary_btn Text={'Start Project'} icon={<FaArrowRight></FaArrowRight>}></Primary_btn>
                     </div>
                  

                  </div>
                   

                      
        </nav>
    );
};

export default Navbar;