import React from "react";
import FAMILY_IMG_MOBILE from "../assets/images/image-intro-mobile.jpg";
import FAMILY_IMG_DESKTOP from "../assets/images/image-intro-desktop.jpg";
import INTRO_LEFT_DESKTOP from "../assets/images/bg-pattern-intro-left-desktop.svg";
import INTRO_RIGHT_DESKTOP from "../assets/images/bg-pattern-intro-right-desktop.svg";
import INTRO_LEFT_MOBILE from "../assets/images/bg-pattern-intro-left-mobile.svg";
import INTRO_RIGHT_MOBILE from "../assets/images/bg-pattern-intro-right-mobile.svg";
import Button from "./ui/Button";

function HeaderSection() {
  return (
    <div className="bg-primary-700 relative">
      <div className=" grid gap-8 max-w-7xl laptop:grid-cols-2 laptop:px-16 laptop:max-h-128 laptop:mx-auto">
        <img src={FAMILY_IMG_MOBILE} alt="" className=" w-full laptop:hidden" />
        <header className=" relative flex flex-col gap-8 px-8 pt-8 pb-24 laptop:px-0 laptop:py-20 font-karla">
          <img
            src={INTRO_LEFT_MOBILE}
            alt=""
            className=" laptop:hidden absolute top-[-2rem] left-0"
          />
          {/* Line */}
          <div className="   laptop:bg-base-110 laptop:p-px laptop:w-24"></div>

          <h1 className=" font-dm-serif text-purple-50 text-6xl text-center laptop:text-left laptop:pr-4">
            Humanizing your insurance.
          </h1>
          <p className=" text-base text-center text-purple-100 laptop:text-left">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button inverse className="mx-auto laptop:ml-0 max-w-48">
            VIEW PLANS
          </Button>
        </header>
        <img
          src={FAMILY_IMG_DESKTOP}
          alt=""
          className=" hidden justify-self-end laptop:block relative laptop:top-20 "
        />
      </div>
      <img
        src={INTRO_LEFT_DESKTOP}
        alt=""
        className="hidden laptop:block absolute top-80"
      />

      <img
        src={INTRO_RIGHT_DESKTOP}
        alt=""
        className="hidden laptop:block absolute right-0 top-0 max-h-96"
      />
      <img
        src={INTRO_RIGHT_MOBILE}
        alt=""
        className=" laptop:hidden absolute right-0 bottom-[-11rem]"
      />
    </div>
  );
}

export default HeaderSection;
