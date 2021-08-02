import React, { useEffect, useState } from "react";

import { useViewPort } from "@hooks";
import { Logo } from "@assets/img";
import configs from "@helpers/configs";

import Menu from "@components/Menu";
import SideBar from "./Sidebar";
import Header from "./Header";

const {
  layout: { sideBarMaxWidth, sideBarMobileMaxWidth },
} = configs;

const MainLayout = ({ children }: any) => {
  const { isMobile } = useViewPort();
  const [collapsed, setCollapsed] = useState(isMobile);

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  const contentMaxWidth = isMobile
    ? "100vw"
    : `calc(100vw - ${isMobile ? sideBarMobileMaxWidth : sideBarMaxWidth}px)`;

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 overflow-hidden flex">
      <SideBar collapsed={collapsed}>
        <div className="w-full flex justify-center py-16">
          <img src={Logo} alt="logo" />
        </div>
        <Menu onClick={() => isMobile && setCollapsed(!collapsed)} />
      </SideBar>
      <div className="h-screen w-screen overflow-hidden flex flex-col">
        <Header
          collapsed={collapsed}
          onClickBurgerIcon={() => setCollapsed(!collapsed)}
        />
        <div
          className="relative mb-3 p-3 overflow-x-hidden overflow-y-scroll w-screen h-full"
          style={{ maxWidth: contentMaxWidth }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
