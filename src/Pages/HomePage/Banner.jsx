import React from "react";
import bannerImg from "../../assets/banner_img.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Primary_btn from "../../Components/Primary_btn";
import { IoIosCall } from "react-icons/io";

const Banner = () => {
  return (
    <div
      className="w-full min-h-screen pl-[5%] lg:pr-[262px] flex flex-col justify-center  "
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_heading">
        <h1 className=" text-4xl leading-[50px] sm:text-5xl sm:leading-[70px] md:text-7xl md:leading-[110px]  lg:text-[78px] font-bold capitalize">
          Trusted <span className="banner_badge">Partner</span> for <br className="hidden md:block" /> Your
          Website <span className="banner_badge">Develop.</span>
        </h1>
      </div>

      <div className="banner_cnt lg:relative mt-12 lg:flex ">
        <div className="social_media ">
          <p className="lg:absolute -left-6 top-10 text-[18px] transform lg:-rotate-[90deg]">
            {" "}
            @williamrey{" "}
          </p>
          <div className="social_icon  flex lg:flex-col gap-3 lg:ml-10 my-3 lg:my-0 text-2xl">
            <FaTwitter className="w-[28px]"></FaTwitter>
            <FaInstagram className="w-[28px]"></FaInstagram>
            <FaFacebook className="w-[28px]"></FaFacebook>
            <TfiLayoutLineSolid className="lg:-rotate-90 w-[28px]"></TfiLayoutLineSolid>
          </div>
        </div>
        <div className="banner_description lg:ml-64">
          <div className="paragrap ">
            <p className="">
              {" "}
              Building the worlds best marketing websites for over a decade.{" "}
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>
          </div>

          <div className="banner_btn mt-4">
            <Primary_btn
              Text={"Schedule a Call"}
              icon={<IoIosCall></IoIosCall>}
            ></Primary_btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
