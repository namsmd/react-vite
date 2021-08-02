import React, { BaseHTMLAttributes } from "react";
import configs from "@helpers/configs";
import { useViewPort } from "@hooks";

type SliderProps = BaseHTMLAttributes<HTMLDivElement> & {
  collapsed: boolean;
};

const {
  layout: {
    sideBarMaxWidth,
    sideBarMinWidth,
    sideBarMobileMaxWidth,
    sideBarMobileMinWidth,
    sideBarBackgroundColor,
  },
} = configs;

const Sidebar = ({ children, collapsed }: SliderProps) => {
  const { isMobile } = useViewPort();
  const minWidth = isMobile ? sideBarMobileMinWidth : sideBarMinWidth;
  const maxWidth = isMobile ? sideBarMobileMaxWidth : sideBarMaxWidth;
  const width = collapsed ? minWidth : maxWidth;

  return (
    <div
      className="h-full z-30 overflow-hidden rounded-br-[90px]"
      style={{
        transition: "all 333ms",
        backgroundColor: sideBarBackgroundColor,
        minWidth: width,
        maxWidth: width,
      }}
    >
      {children}
    </div>
  );
};

export default Sidebar;
