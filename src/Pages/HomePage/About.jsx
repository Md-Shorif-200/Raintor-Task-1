import React from 'react';
import aboutImg from '../../assets/about_img.png'
import { FaArrowDown } from 'react-icons/fa';




const About = () => {
    return (
        <div className=' w-[88%] mx-auto  pt-[208px]  ' style={{backgroundImage : `url(${aboutImg})`,backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat : 'no-repeat'}}>
                
                  <div className='flex justify-end items-center'>
                                                 <div className= {` w-[38px] h-[38px] flex justify-center items-center  text-black border border-black rounded-full`}>
                                                                    <FaArrowDown></FaArrowDown>
                                                            </div>   
                                                            <div>
                                                                 <p className='w-[200px] h-[44px] text-[16px] text-center text-black border border-black rounded-2xl capitalize flex items-center justify-center'>Why choose me</p>
                                                                  </div>   
                    </div>

               <div className='pl-[130px]'>
                     <h1 className='text-[78px] font-bold capitalize text-end mt-9 mb-4'>I've been <span className='banner_badge'>Developing <br /> </span> Websites since <span className='banner_badge'>2013</span></h1>

                    <p className='text-[18px] capitalize font-normal text-center mb-[70px]'> We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.</p>
               </div>

               <div className="flex items-center gap-x-8">
                    <h2 className='uppercase text-[26px] font-bold'>priviously <br /> worked on</h2>

                    <div className="about-btn">
                          <div className="btn_group ml-36">
                                  <button className='rotate-[11.73deg] ' >awwards</button>
                                  <button className=' ' >facebook</button>
                                  <button className='rotate-[16.97deg]  '>CSS<span className='font-bold'>Design</span>Awareds </button>
                          </div>
                          <div className="btn_group mt-3">
                            <button >CSS V INNER</button>
                            <button className='font-bold -rotate-[9.34deg]' >/thougtworks</button>
                            <button className='font-bold' >autodesk</button>
                          </div>
                    </div>
               </div>
            
        </div>
    );
};

export default About;