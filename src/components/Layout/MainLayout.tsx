import React, { useState } from "react";

import Sider from "./Sider";
import Header from "./Header";

const MainLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen w-screen flex">
      <Sider collapsed={collapsed}>
        <div className="flex justify-center items-center">
          <div className="bg-gray-500 w-[150px] h-[50px]">Logo</div>
        </div>
      </Sider>
      <div className="flex-grow">
        <Header
          collapsed={collapsed}
          onClickBurderIcon={() => setCollapsed(!collapsed)}
        />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
