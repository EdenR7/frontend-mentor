import React from "react";
import LOGO from "../assets/images/logo.svg";
import HAMBURGER from "../assets/images/icon-hamburger.svg";
import CLOSE_ICON from "../assets/images/icon-close.svg";
import Button from "./ui/Button";

function NavBar(props) {
  const { icon, iconOnClick } = props;
  return (
    <div className="  6xl:flex 6xl:justify-center">
      <nav className="flex justify-between items-center py-4 px-6 border-b border-solid 6xl:w-6xl 6xl:px-0 laptop:px-16">
        <div>
          <img src={LOGO} alt="" />
        </div>
        <div className=" font-karla text-sm">
          <div className="space-x-3 hidden tablet:block">
            <a href="#" className=" text-base-500 font-semibold">
              HOW WE WORK
            </a>
            <a href="#" className=" text-base-500 font-semibold">
              BLOG
            </a>
            <a href="#" className=" text-base-500 font-semibold">
              ACCOUNT
            </a>
            <Button>VIEW PLANS</Button>
          </div>
          <img
            onClick={iconOnClick}
            src={icon}
            alt=""
            className=" cursor-pointer tablet:hidden"
          />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
