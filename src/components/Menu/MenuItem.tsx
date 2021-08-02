import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const MenuItem = (props: any) => {
  const location = useLocation();
  const history = useHistory();
  const isActive = location.pathname === props.path;

  const handleOnclick = () => {
    if (location.pathname !== props.path) {
      history.push(props.path);
    }
  };

  return (
    <li
      className="h-[56px] cursor-pointer text-white"
      onClick={handleOnclick}
      aria-hidden="true"
    >
      <p className="flex items-center">
        {props.icon && (
          <props.icon style={{ color: isActive ? "#F7931E" : "unset" }} />
        )}
        <span className="ml-2">{props.name}</span>
      </p>
    </li>
  );
};

export default MenuItem;
