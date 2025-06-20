import React from 'react';
import contactImg from '../../assets/Contact_img.png'
import { FaArrowDown, FaFacebook, FaInstagram, FaLocationArrow, FaTwitter } from 'react-icons/fa';
import Primary_btn from '../../Components/Primary_btn';
import { IoIosCall } from "react-icons/io";
import { FaMessage } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { TfiLayoutLineSolid } from 'react-icons/tfi';

const Contact = () => {
    return (
        <div className='w-full  px-[5%] py-12 flex gap-x-3 '  style={{
                backgroundImage: `url(${contactImg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>

                <div className="contact_info w-[60%]">
                       <div className='flex  items-center'>
                                                 <div className= {` w-[38px] h-[38px] flex justify-center items-center  text-black border border-black rounded-full`}>
                                                                    <FaArrowDown></FaArrowDown>
                                                            </div>   
                                                            <div>
                                                                 <p className='w-[200px] h-[44px] text-[16px] text-center text-black border border-black rounded-2xl capitalize flex items-center justify-center'>contact</p>
                                                                  </div>   
                    </div>

                     <h1 className="text-[78px] font-bold capitalize mt-5">
         Interested in <br /> <span className='banner_badge'>work</span> together?
        </h1>

         <p className='text-[18px] capitalize font-normal my-5'>We start every new client interaction with an in-depth discovery call wherewe get to know each other</p>

         {/* call reusable primary btn */}
            <Primary_btn Text={'sehedule a call'} icon={<IoIosCall></IoIosCall>}></Primary_btn>




                </div>
                <div className="contact_form w-[50%] rounded-[30px] px-7 py-11 bg-black" > 
                      <form action="#">

                                <input type="text"  placeholder='Enter Your Name ' className='w-full bg-transparent   focus:border-none focus:outline-none capitalize pb-2 text-white ' />
                                 <hr className='text-white opacity-[.5] mb-10 ' />

                                  <input type="email"  placeholder='Enter Your email Address ' className='w-full bg-transparent   focus:border-none focus:outline-none capitalize pb-2 text-white ' />
                                 <hr className='text-white opacity-[.5] mb-10 ' />


                                  <input type="text"  placeholder='Describe your project ' className='w-full bg-transparent   focus:border-none focus:outline-none capitalize pb-2 text-white ' />
                                 <hr className='text-white opacity-[.5]  mb-4' />
                {/* form btn */}
                                 <div className="form_btn mt-10 flex gap-x-5 items-center">
                                            {/* button -1 */}
                                         <button className='  flex  items-center gap-x-2 capitalize text-white  border border-white d py-2 pr-6 rounded-[29px]'>
                             <div className= {` w-[40px] h-[40px] flex justify-center items-center  text-white  border border-white  rounded-full`}>
                                    <FaLocationArrow></FaLocationArrow>
                                </div>
                                  send
                                        </button>
                                             <p className='text-white text-[18px] '>or</p>

                                             {/* button -2 */}

                                               <button className='  flex  items-center gap-x-2 capitalize text-white  border border-white d py-2 pr-6 rounded-[29px]'>
                             <div className= {` w-[40px] h-[40px] flex justify-center items-center  text-white  border border-white  rounded-full`}>
                                    <FaMessage></FaMessage>
                                </div>
                                  send
                                        </button>
                                 </div>

                                 {/* social icon */}

                                 <div className="social text-white  flex gap-x-6 mt-10" >
                                    <p className='text-lg'>@williamery</p>
                                <div className="social_icons flex gap-x-4 items-center text-xl">
                                     <Link>   <TfiLayoutLineSolid></TfiLayoutLineSolid></Link>
                                     <Link>   <FaFacebook></FaFacebook></Link>
                                     <Link>   <FaInstagram></FaInstagram></Link>
                                     <Link>   <FaTwitter></FaTwitter></Link>
                                </div>
                                 </div>

                      </form>
                         
                     </div>
            
        </div>
    );
};

export default Contact;