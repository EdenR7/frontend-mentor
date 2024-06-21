import React, { useState } from "react";
import LOGO from "./assets/images/logo.svg";
import SNAPPY_ICON from "./assets/images/icon-snappy-process.svg";
import AFFORDABLE_ICON from "./assets/images/icon-affordable-prices.svg";
import PEOPLE_ICON from "./assets/images/icon-people-first.svg";
import HOW_WE_WORK_DESKTOP from "./assets/images/bg-pattern-how-we-work-desktop.svg";
import HOW_WE_WORK_MOBILE from "./assets/images/bg-pattern-how-we-work-mobile.svg";
import FOOTER_DESKTOP from "./assets/images/bg-pattern-footer-desktop.svg";
import FOOTER_MOBILE from "./assets/images/bg-pattern-footer-mobile.svg";
import FACEBOOK_ICON from "./assets/images/icon-facebook.svg";
import TWITTER_ICON from "./assets/images/icon-twitter.svg";
import PINTREST_ICON from "./assets/images/icon-pinterest.svg";
import INSTAGRAM_ICON from "./assets/images/icon-instagram.svg";
import MENU_DECORATOR from "./assets/images/bg-pattern-mobile-nav.svg";
import CLOSE_ICON from "./assets/images/icon-close.svg";
import HAMBURGER from "./assets/images/icon-hamburger.svg";

import NavBar from "./components/NavBar";
import HeaderSection from "./components/HeaderSection";
import IconCard from "./components/ui/IconCard";
import Button from "./components/ui/Button";

export function MenuBar(props) {
  return (
    <div className=" absolute flex flex-col px-8 bg-base-700 items-center gap-5 pt-10 font-semibold h-128 z-40 w-full tablet:hidden">
      <a href="#" className=" text-base-110 w-full text-center">
        HOW WE WORK
      </a>
      <a href="#" className=" text-base-110 w-full text-center">
        BLOG
      </a>
      <a href="#" className=" text-base-110 w-full text-center">
        ACCOUNT
      </a>
      <Button inverse className="w-full">
        <a href="#">VIEW PLANS</a>
      </Button>
      <img src={MENU_DECORATOR} alt="" className="absolute bottom-0 right-0" />
    </div>
  );
}

function App() {
  const [menuState, setMenuState] = useState(false);
  const icon = menuState ? CLOSE_ICON : HAMBURGER;
  const iconOnClick = menuState ? closeMenu : openMenu;

  function openMenu() {
    setMenuState(true);
  }
  function closeMenu() {
    setMenuState(false);
  }

  return (
    <>
      <NavBar icon={icon} iconOnClick={iconOnClick} />
      <main className=" max-w-lg mx-auto laptop:max-w-full relative">
        {menuState && <MenuBar />}
        {/* <div className=" absolute flex flex-col px-8 bg-base-700 items-center gap-5 pt-10 font-semibold h-128 z-40 w-full">
          <a href="#" className=" text-base-110 w-full text-center">
            HOW WE WORK
          </a>
          <a href="#" className=" text-base-110 w-full text-center">
            BLOG
          </a>
          <a href="#" className=" text-base-110 w-full text-center">
            ACCOUNT
          </a>
          <Button inverse className="w-full">
            <a href="#">VIEW PLANS</a>
          </Button>
          <img
            src={MENU_DECORATOR}
            alt=""
            className="absolute bottom-0 right-0"
          />
        </div> */}
        <HeaderSection />
        <section className=" pt-36 laptop:pt-64 max-w-7xl laptop:px-16 laptop:mx-auto">
          <div className=" bg-gray-300 p-px w-32 mx-auto mb-8 laptop:mx-0"></div>
          <h3 className="text-5xl font-dm-serif text-primary-700 font-semibold text-center tracking-tight laptop:text-start">
            We're different
          </h3>
          <div className=" mt-16 flex flex-col gap-8 laptop:flex-row laptop:justify-between laptop:gap-0">
            <IconCard
              icon={SNAPPY_ICON}
              title="Snappy Process"
              body="Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms."
            />
            <IconCard
              icon={AFFORDABLE_ICON}
              title="Affordable Prices"
              body="We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
            />
            <IconCard
              icon={PEOPLE_ICON}
              title="People First"
              body="Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
            />
          </div>
        </section>
        <section className=" py-36 max-w-7xl px-6 laptop:px-16 laptop:mx-auto">
          <div className=" bg-primary-700 flex flex-col px-6 py-12 items-center relative overflow-hidden gap-6 laptop:flex-row tablet:justify-between laptop:px-16">
            <h3 className=" text-base-110 font-dm-serif text-5xl text-center tracking-tight z-10 laptop:text-left max-w-96">
              Find out more about how we work
            </h3>
            <Button inverse className=" max-w-48 px-10 z-10">
              HOW WE WORK
            </Button>
            <img
              src={HOW_WE_WORK_MOBILE}
              alt=""
              className=" absolute top-0 right-0 laptop:hidden"
            />
            <img
              src={HOW_WE_WORK_DESKTOP}
              alt=""
              className=" hidden absolute top-0 right-0 laptop:block"
            />
          </div>
        </section>
      </main>
      <footer className="bg-base-110 px-6 pb-12 relative laptop:px-16 flex flex-col xl:items-center">
        <div className="xl:w-6xl flex flex-col gap-6 pt-20 py-12 items-center border-b border-solid border-gray-300 laptop:flex-row laptop:justify-between ">
          <img src={LOGO} alt="" className="max-w-24 z-10" />
          <div className="flex gap-3">
            <img
              src={FACEBOOK_ICON}
              alt=""
              className=" w-5 h-5 cursor-pointer z-10 hover:scale-105"
            />
            <img
              src={TWITTER_ICON}
              alt=""
              className=" w-5 h-5 cursor-pointer z-10 hover:scale-105"
            />
            <img
              src={PINTREST_ICON}
              alt=""
              className=" w-5 h-5 cursor-pointer z-10 hover:scale-105"
            />
            <img
              src={INSTAGRAM_ICON}
              alt=""
              className=" w-5 h-5 cursor-pointer z-10 hover:scale-105"
            />
          </div>
        </div>
        <div className=" xl:w-6xl flex flex-col pt-12 gap-8 font-karla laptop:flex-row laptop:gap-32">
          <div className=" text-center space-y-2 font-semibold laptop:text-left">
            <h1 className=" text-base-500 font-semibold pb-4 z-10">
              Our company
            </h1>
            <p>
              <a href="" className=" hover:underline">How we work</a>
            </p>
            <p>
              <a href="" className=" hover:underline">Why Insure?</a>
            </p>
            <p>
              <a href="" className=" hover:underline">View plans</a>
            </p>
            <p>
              <a href="" className=" hover:underline">Reviews</a>
            </p>
          </div>
          <div className=" text-center space-y-2 font-semibold laptop:text-left">
            <h1 className=" text-base-500 font-semibold pb-4 z-10">Help me</h1>
            <p>
              <a href="" className=" hover:underline">FAQ</a>
            </p>
            <p>
              <a href="" className=" hover:underline">Terms of use</a>
            </p>
            <p>
              <a href="" className=" hover:underline">Privacy policy</a>
            </p>
            <p>
              <a href="" className=" hover:underline">Cookies</a>
            </p>
          </div>
          <div className=" text-center space-y-2 font-semibold laptop:text-left">
            <h1 className=" text-base-500 font-semibold pb-4 z-10">Contact</h1>
            <p>
              <a href="" className=" hover:underline">Sales</a>
            </p>
            <p>
              <a href="" className=" hover:underline">Support</a>
            </p>
            <p>
              <a href="" className=" hover:underline">Live chat</a>
            </p>
          </div>
          <div className=" text-center space-y-2 font-semibold laptop:text-left">
            <h1 className=" text-base-500 font-semibold pb-4 z-10">Others</h1>
            <p>
              <a href="" className=" hover:underline">Careers</a>
            </p>
            <p>
              <a href="" className=" hover:underline">Press</a>
            </p>
            <p>
              <a href="" className=" hover:underline">Licenses</a>
            </p>
          </div>
        </div>
        <img
          src={FOOTER_MOBILE}
          alt=""
          className="absolute top-0 left-0 laptop:hidden"
        />
        <img
          src={FOOTER_DESKTOP}
          alt=""
          className="hidden absolute top-0 left-0 laptop:block"
        />
      </footer>
    </>
  );
}

export default App;
