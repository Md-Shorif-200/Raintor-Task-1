import React from "react";
import ReusableIcon from "../../Components/ReusableIcon";
import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import react_icon from "../../assets/React_icon.png";
import Secondary_btn from "../../Components/Secondary_btn";

const Skill = () => {
  return (
    <div className="w-full bg-black dark:bg-[#0a0a0a]  px-[5%] py-[90px] rounded-3xl z-0">
      {/* call reuable button */}
      <Secondary_btn text={'why choose me'}></Secondary_btn>
      {/* skill heading */}
      <div className="skill_heading my-10 md:flex justify-between ">
        <div className="skill_title">
          <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-bold capitalize text-white">
            My Extensive <br /> List of Skills
          </h1>
        </div>
        <div className="skill_desc">
          <p className="text-[18px] font-normal capitalize text-white my-10 md:my-0">
            {" "}
            Building the worlds best marketing Your trusted partner for
            strategy, design, and dev.
          </p>
          <hr className=" border mt-5 mb-9 border-white opacity-[.4]" />
          {/* arrow btn */}
          <div className="skill_arrow_btn flex gap-x-5 md:justify-end">
            {/* left arrow */}
            <div className="left_btn w-[60px] h-[60px] border border-white hover:bg-white  transition-all rounded-full flex justify-center items-center">
              <FaArrowLeftLong className="w-9 h-6 text-white hover:text-black"></FaArrowLeftLong>
            </div>
            {/* right arrow */}
            <div className="left_btn w-[60px] h-[60px] border border-white hover:bg-white  transition-all rounded-full flex justify-center items-center">
              <FaArrowRightLong className="w-9 h-6 text-white hover:text-black"></FaArrowRightLong>
            </div>
          </div>
        </div>
      </div>

      {/* skill card */}

      <div className="skill_cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-1 ">
        {/* card-1 */}
        <div className="card bg-white/10 p-12 rounded-3xl">
          <div className=" w-[97px] h-[99px] ">
            <img
              src={react_icon}
              className="w-full text-white"
              alt="react_icon"
            />
          </div>
          <h2 className="text-[26px] font-bold text-white capitalize  mt-9 mb-5">
            html & css
          </h2>
          <p className="text-[16px] capitalize text-white ">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad
            minim veniam, quis{" "}
          </p>
        </div>

        {/* card-2 */}
        <div className="card bg-white/10 p-12 rounded-3xl transform rotate-[6.74deg]">
          <div className=" w-[97px] h-[99px] ">
            <img
              src={react_icon}
              className="w-full text-white"
              alt="react_icon"
            />
          </div>
          <h2 className="text-[26px] font-bold text-white capitalize  mt-9 mb-5">
            Javascript
          </h2>
          <p className="text-[16px] capitalize text-white ">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad
            minim veniam, quis{" "}
          </p>
        </div>

        {/* card-3 */}
        <div className="card bg-white/10 p-12 rounded-3xl">
          <div className=" w-[97px] h-[99px] ">
            <img
              src={react_icon}
              className="w-full text-white"
              alt="react_icon"
            />
          </div>
          <h2 className="text-[26px] font-bold text-white capitalize  mt-9 mb-5">
            webFlow
          </h2>
          <p className="text-[16px] capitalize text-white ">
            Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad
            minim veniam, quis{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
