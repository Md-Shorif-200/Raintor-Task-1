import React from 'react';
import bannerImg from '../../assets/banner_img.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Primary_btn from '../../Components/Primary_btn';
import { IoIosCall } from "react-icons/io";



const Banner = () => {
    return (
        <div className='w-full min-h-screen pl-[50px] pr-[262px] flex flex-col justify-center  ' style={{backgroundImage : `url(${bannerImg})`,backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat : 'no-repeat'}}>
            
                 <div className="banner_heading">
                       <h1 className='text-[78px] font-[700]'>Trusted <span className='banner_badge'>Partner</span> for <br /> Your Website <span className='banner_badge'>Develop.</span></h1>
                 </div>

                 <div className="banner_cnt relative mt-12 flex ">
                      <div className="social_media ">
                      <p className='absolute -left-6 top-10 text-[18px] transform -rotate-[90deg]'> @williamrey </p>
                          <div className="social_icon  flex flex-col gap-3 ml-10">
                      
                              <FaTwitter className='w-[28px]'></FaTwitter>
                              <FaInstagram className='w-[28px]'></FaInstagram>
                              <FaFacebook className='w-[28px]'></FaFacebook>
                               <TfiLayoutLineSolid className='-rotate-90 w-[28px]'></TfiLayoutLineSolid>
                          </div>
                          
                      </div>
                      <div className="banner_description ml-64">
                            <div className="paragrap ">
                              <p className=''>  Building the worlds best marketing websites for over a decade. <br />Your trusted partner for strategy, design, and dev.</p>
                            </div>

                            <div className="banner_btn mt-4">
                                        <Primary_btn Text={'Schedule a Call'} icon={<IoIosCall></IoIosCall>}></Primary_btn>
                            </div>
                      </div>
                 </div>
        </div>
    );
};

export default Banner;