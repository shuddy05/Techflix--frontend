import React from "react";
import { PiTelevisionFill } from "react-icons/pi";
import { MdWindow } from "react-icons/md";
import { RiFilmFill } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import logo from "../assets/Oval.svg";
import redmovie from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const links = [
    {
      id: 1,
      to: "/",
      content: (
        <MdWindow className="hover:text-[#FC4747] text-[16px] md:text-[20px]" />
      ),
      title: "dashboard home",
    },
    {
      id: 2,
      to: "movies",
      content: (
        <RiFilmFill className="hover:text-[#FC4747] text-[16px] md:text-[20px]" />
      ),
      title: "dashboard home",
    },
    {
      id: 3,
      to: "tv-series",
      content: (
        <PiTelevisionFill className="hover:text-[#FC4747] text-[16px] md:text-[20px]" />
      ),
      title: "dashboard home",
    },
    {
      id: 4,
      to: "bookmark",
      content: (
        <FaBookmark className="hover:text-[#FC4747] text-[16px] md:text-[20px]" />
      ),
      title: "dashboard home",
    },
  ];

  return (
    <div className=" lg:mx-[5px] sticky top-0 left-0 max-h-screen z-10 ">
      <div className="w-full relative bg-[#161d2f] py-[18px] px-[16px] flex items-center justify-between  md:py-[24px] md:px-[24px] lg:absolute lg:flex-col lg:justify-center lg:items-center lg:top-[32px] lg:left-[32px] lg:max-w-[96px] lg:rounded-[20px] lg:py-[35.41px] lg:px-[31.86px]  ">
        <Link to="/">
          <img
            src={redmovie}
            alt=""
            className="w-[25px] h-[20px] md:w-[32px] md:h-[25.6px]"
          />
        </Link>

        <div className="w-[133.54px] flex items-center justify-between md:w-[172.92px] lg:flex-col lg:justify-center lg:items-center lg:gap-[40px] lg:mt-[74.99px]">
          {links.map((link) => {
            const { id, title, to, content } = link;
            return (
              <NavLink
                key={id}
                to={to}
                className={({ isActive }) =>
                  isActive ? "text-white" : "text-[#5a698f]"
                }
                end={id === 1}
                title={title}
              >
                {content}
              </NavLink>
            );
          })}
        </div>

        <div className="lg:mt-[200px]">
          <img
            src={logo}
            alt="applogo"
            className="w-[24px] md:w-[32px] lg:w-[40px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
