import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Secondary_btn = ({text}) => {
    return (
        <div>
             <div className='flex items-center '>
                                 <div className= 'icon w-[38px] h-[38px] flex justify-center items-center  text-white border border-white rounded-full'>
                                                    <FaArrowDown></FaArrowDown>
                                            </div>   
                                            <div>
                                                 <p className='w-[200px] h-[44px] text-[16px] text-center text-white border border-white rounded-2xl capitalize flex items-center justify-center'>{text}</p>
                                                  </div>   
                               </div>
        </div>
    );
};

export default Secondary_btn;