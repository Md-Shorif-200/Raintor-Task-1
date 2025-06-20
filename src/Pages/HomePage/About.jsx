import React from 'react';
import aboutImg from '../../assets/about_img.png'
import { FaArrowDown } from 'react-icons/fa';




const About = () => {
    return (
        <div className=' px-[5%] mx-auto  pt-14 lg:pt-[208px] dark:bg-white/10 ' style={{backgroundImage : `url(${aboutImg})`,backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat : 'no-repeat'}}>
                
                  <div className='flex lg:justify-end items-center'>
                                                 <div className= {` w-[38px] h-[38px] flex justify-center items-center dark:text-white text-black border border-black dark:border-white rounded-full`}>
                                                                    <FaArrowDown></FaArrowDown>
                                                            </div>   
                                                            <div>
                                                                 <p className='w-[200px] h-[44px] text-[16px] text-center text-black border border-black  dark:text-white  dark:border-white  rounded-2xl capitalize flex items-center justify-center'>About</p>
                                                                  </div>   
                    </div>

               <div className='lg:pl-[130px]'>
                     <h1 className='text-4xl leading-[50px] sm:text-5xl sm:leading-[70px] md:text-7xl md:leading-[110px]  lg:text-[78px]  font-bold capitalize lg:text-end mt-9 mb-4'>I've been <span className='banner_badge'>Developing <br /> </span> Websites since <span className='banner_badge'>2013</span></h1>

                    <p className='text-[18px] capitalize font-normal lg:text-center mb-[70px]'> We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.</p>
               </div>

               <div className="lg:flex items-center gap-x-8">
                    <h2 className='uppercase text-[26px] font-bold'>priviously <br /> worked on</h2>

                    <div className="about-btn">
                          <div className="btn_group lg:ml-36">
                                  <button className=' dark:border-white dark:text-white lg:rotate-[11.73deg] my-2 lg:my-0 ' >awwards</button>
                                  <button className=' dark:border-white dark:text-white  ' >facebook</button>
                                  <button className=' dark:border-white dark:text-white lg:rotate-[16.97deg] my-2 lg:my-0 hidden lg:block '>CSS<span className='font-bold'>Design</span>Awareds </button>
                          </div>
                          <div className="btn_group mt-3">
                            <button className='dark:border-white dark:text-white'>CSS V INNER</button>
                            <button className=' dark:border-white dark:text-white font-bold lg:-rotate-[9.34deg] my-2 lg:my-0 ' >/thougtworks</button>
                            <button className=' dark:border-white dark:text-white font-bold' >autodesk</button>
                          </div>
                    </div>
               </div>
            
        </div>
    );
};

export default About;