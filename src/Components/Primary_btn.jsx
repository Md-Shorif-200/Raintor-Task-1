import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ReusableIcon from "./ReusableIcon";

const Primary_btn = ({ Text, icon }) => {
  return (
    <button className=" w-[182px] h-[58px] flex  items-center gap-x-2 capitalize border border-black dark:border-white hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black transition-all py-5 rounded-[29px]">
      <div className="icon w-[38px] h-[38px] flex justify-center items-center  text-black dark:text-white  border border-black dark:border-white hover:bg-black hover:text-white transition-all rounded-full">
        {icon}
      </div>
      {Text}
    </button>
  );
};

export default Primary_btn;
