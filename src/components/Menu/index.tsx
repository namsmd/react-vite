import React, { BaseHTMLAttributes } from "react";

import configs from "@helpers/configs";
import { ROLE } from "@helpers/contants";
import MenuItem from "./MenuItem";

const { modules } = configs;

const Menu = (props: BaseHTMLAttributes<HTMLUListElement>) => {
  // Mock role
  const role = ROLE.PATIENT;
  const { menu } = modules[role];

  return (
    <ul className="p-0 m-0" {...props}>
      {menu.map((i) => (
        <MenuItem {...i} />
      ))}
    </ul>
  );
};

export default Menu;
