import React from 'react';
import Secondary_btn from '../../Components/Secondary_btn';
import { FaRightLong } from 'react-icons/fa6';

const Work = () => {
    return (
        <div className='bg-[#141414] dark:bg-[#0a0a0a] px-[5%] py-12 lg:py-[90px] mt-6'>

             {/* work section heading */}
                <div className="work_heading lg:flex items-center gap-x-[97px] mb-8">
                      <Secondary_btn text={'work process'}></Secondary_btn>
                       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] my-4 lg:my-0 font-bold capitalize text-white">
            My work process
          </h1>
                </div>

                {/* word cards */}

                <div className="work_cards grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* card */}
                      <div className="card bg-black dark:bg-[#232323] text-white p-8">
                            <div className="card_link flex  justify-between">
                                        <div className="button bg-[#C5FFEE] text-[20px] text-black py-[5px] px-4 sm:px-8 rounded-[30px] capitalize">discovery</div>

                                         <div className='flex items-center gap-x-2 '>  <FaRightLong></FaRightLong> <span className='underline'>Read more</span> </div>
                            </div>

                            <div className="card_desc py-11">
                                 <p>We start every new client interactionwith an in-depth discovery call wherewe get to know each other, discussyour current and future objectives,and recommend the best course ofaction.</p>
                            </div>
                      </div>

                            {/* card */}
                      <div className="card bg-black dark:bg-[#232323] text-white p-8 transform rotate-[3.85deg]">
                            <div className="card_link flex  justify-between">
                                        <div className="button bg-[#C5FFEE] text-[20px] text-black py-[5px] px-4 sm:px-8 rounded-[30px] capitalize">strategy</div>

                                         <div className='flex items-center gap-x-2 '>  <FaRightLong></FaRightLong> <span className='underline'>Read more</span> </div>
                            </div>

                            <div className="card_desc py-11">
                                 <p>We start every new client interactionwith an in-depth discovery call wherewe get to know each other, discussyour current and future objectives,and recommend the best course ofaction.</p>
                            </div>
                      </div>

                            {/* card */}
                      <div className="card bg-black dark:bg-[#232323] text-white p-8">
                            <div className="card_link flex  justify-between">
                                        <div className="button bg-[#C5FFEE] text-[20px] text-black py-[5px] px-4 sm:px-8 rounded-[30px] capitalize">design</div>

                                         <div className='flex items-center gap-x-2 '>  <FaRightLong></FaRightLong> <span className='underline'>Read more</span> </div>
                            </div>

                            <div className="card_desc py-11">
                                 <p>We start every new client interactionwith an in-depth discovery call wherewe get to know each other, discussyour current and future objectives,and recommend the best course ofaction.</p>
                            </div>
                      </div>


                            {/* card */}
                      <div className="card bg-black dark:bg-[#232323] text-white p-8">
                            <div className="card_link flex  justify-between">
                                        <div className="button bg-[#C5FFEE] text-[20px] text-black py-[5px] px-4 sm:px-8 rounded-[30px] capitalize">build</div>

                                         <div className='flex items-center gap-x-2 '>  <FaRightLong></FaRightLong> <span className='underline'>Read more</span> </div>
                            </div>

                            <div className="card_desc py-11">
                                 <p>We start every new client interactionwith an in-depth discovery call wherewe get to know each other, discussyour current and future objectives,and recommend the best course ofaction.</p>
                            </div>
                      </div>


                </div>
            
        </div>
    );
};

export default Work;