import React, { ButtonHTMLAttributes } from "react";

const Button = ({
  onClick,
  type = "button",
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
