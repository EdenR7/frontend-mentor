import React from "react";
import { cn } from "../../utils/utils";

function Button({ children, className, inverse, onClick }) {
  return (
    <button
      className={cn(
        "border border-primary-700 py-1 px-4 text-primary-700 font-semibold hover:bg-base-700 hover:text-base-110",
        className,
        inverse && "border-2 border-gray-300 border-solid text-gray-300 py-2 px-8 hover:bg-base-110 hover:text-primary-700"
      )}
    >
      {children}
    </button>
  );
}

export default Button;
