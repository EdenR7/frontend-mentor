import React from "react";

function IconCard({ icon, title, body }) {
  return (
    <>
      <div className=" px-6">
        <img src={icon} alt="" className="max-w-14 mx-auto laptop:mx-0" />
        <h4 className=" mt-5 mb-2 text-center text-primary-700 font-semibold text-2xl font-dm-serif laptop:text-start">
          {title}
        </h4>
        <p className=" text-center text-base-500 laptop:text-start">{body}</p>
      </div>
    </>
  );
}

export default IconCard;
