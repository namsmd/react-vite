import React, { BaseHTMLAttributes } from "react";

type SliderProps = BaseHTMLAttributes<HTMLDivElement> & {
  collapsed: boolean;
};

const Sider = ({ children, collapsed }: SliderProps) => (
  <div
    className="h-full bg-red-100 z-30 overflow-hidden"
    style={{
      minWidth: collapsed ? 0 : 200,
      maxWidth: collapsed ? 0 : 200,
      transition: "all 333ms",
    }}
  >
    {collapsed}
    {children}
  </div>
);

export default Sider;
