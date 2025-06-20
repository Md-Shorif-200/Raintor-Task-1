import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-[5%] py-10 lg:py-[90px] bg-black text-white rounded-3xl ">
                    {/* footer section */}
      <div className="lg:flex gap-x-4">
        <div className="footer_logo lg:w-[40%] flex flex-col justify-between">
          <h1 className="uppercase text-[34px] text-[#C5FF41] font-extrabold">
            develop.me
          </h1>

           <h2 className="text-[24px] uppercase text-white font-bold my-6 lg:my-0">BESNIK</h2>
        </div>

        {/*  */}
        <div className=" lg:w-[60%]">
          <div className="footer_title mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-bold capitalize text-white">
              as you can
            </h1>
          </div>

          {/* FOOTER LINK */}
          <div className="footer_link_section sm:flex justify-between">
            <div className="section_1">
              <div>
                <h3 className="capitalize opacity-[.7]"> say hellow</h3>
                <Link className="my-4 block">HELLO@DEVLOP.ME.COM</Link>
                <Link>MAHBUBUL@ME.COM</Link>
              </div>

              <div className="mt-12">
                <h3 className="capitalize opacity-[.7]">call</h3>

                <Link className="block my-4">+8845 0100 211</Link>
                <Link>+784549 4981 00</Link>
                <p className="mt-20 opacity-[.7] my-4 sm:my-0">© devlop.me 2022</p>
              </div>
            </div>

            {/*  */}
            <div className="section_2">
              <h3 className="capitalize opacity-[.7]">menu</h3>

              <ul>
                <li className="my-3">
                  <Link className="uppercase text-white "> home </Link>
                </li>
                <li className="my-3">
                  <Link className="uppercase text-white "> about </Link>
                </li>
                <li className="my-3">
                  <Link className="uppercase text-white "> portfolio </Link>
                </li>
                <li className="my-3">
                  <Link className="uppercase text-white "> blog </Link>
                </li>
              </ul>
            </div>
            {/* SOCIAL LINK */}
            <div className="section_3">
              <h3>social</h3>

              <ul>
                <li className="my-3">
                  <Link className="uppercase text-white "> twitter </Link>
                </li>
                <li className="my-3">
                  <Link className="uppercase text-white "> instagram </Link>
                </li>
                <li className="my-3">
                  <Link className="uppercase text-white "> facebook </Link>
                </li>
                <li className="my-3">
                  <Link className="uppercase text-white "> behance </Link>
                </li>
                <li className="my-3">
                  <Link className="uppercase text-white "> dribble </Link>

                    <p className="mt-32 opacity-[.7]">PRIVACY - TERMS</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
