import React, { BaseHTMLAttributes } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { BurgerIcon } from "@components/Icon";
import Avatar from "@components/Avatar";

type HeaderProps = BaseHTMLAttributes<HTMLElement> & {
  collapsed: boolean;
  onClickBurderIcon: () => void;
};

const Header = ({ collapsed, onClickBurderIcon }: HeaderProps) => (
  <header className="p-3 flex justify-end">
    <div className="flex-grow">
      <MobileView>
        <BurgerIcon collapsed={collapsed} onClick={onClickBurderIcon} />
      </MobileView>

      <BrowserView>
        <nav aria-label="breadcrumb">
          <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
            <li className="pr-4">Home</li>
            <li className="px-4 text-gray-700" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>
      </BrowserView>
    </div>

    <div>
      <Avatar src="" badge />
    </div>
  </header>
);

export default Header;
