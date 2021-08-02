import React, { BaseHTMLAttributes } from "react";
import { useAuth, useViewPort } from "@hooks";
import { BurgerIcon } from "@components/Icon";
import Avatar from "@components/Avatar";
import Breadcrumb from "@components/Layout/Breadcrumb";

type HeaderProps = BaseHTMLAttributes<HTMLElement> & {
  collapsed: boolean;
  onClickBurgerIcon: () => void;
};

const Header = ({ collapsed, onClickBurgerIcon }: HeaderProps) => {
  const { user } = useAuth();
  const { isMobile } = useViewPort();

  return (
    <header className="p-3 flex justify-end items-center">
      <div className="flex-grow">
        {isMobile ? (
          <BurgerIcon collapsed={collapsed} onClick={onClickBurgerIcon} />
        ) : (
          <Breadcrumb />
        )}
      </div>

      <div>
        <Avatar src={user?.avatar} badge />
      </div>
    </header>
  );
};

export default Header;
