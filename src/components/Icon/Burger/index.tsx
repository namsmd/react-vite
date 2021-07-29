import React, { ButtonHTMLAttributes } from "react";

import "./style.css";

type BurgerIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  collapsed: boolean;
};

const BurgerIcon = (props: BurgerIconProps) => (
  <button
    type="button"
    onClick={props.onClick}
    className={props.collapsed ? "burger" : "burger nav-open"}
  >
    <span />
    <span />
    <span />
  </button>
);

export default BurgerIcon;
