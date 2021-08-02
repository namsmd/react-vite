import React, { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  // eslint-disable-next-line react/button-has-type
  <button
    {...props}
    className={`${
      "w-full inline-flex justify-center px-4 py-2 " +
      "rounded-md border border-transparent shadow-sm " +
      "bg-blue-600 text-base font-medium text-white " +
      "hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm "
    }${props.className}`}
  >
    {props.children}
  </button>
);

export default Button;
