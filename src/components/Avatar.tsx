import React, { BaseHTMLAttributes } from "react";

type AvatarProps = BaseHTMLAttributes<HTMLDivElement> & {
  badge: boolean;
  src: string;
};

const defaultAvatar =
  "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";

const Avatar = (props: AvatarProps) => (
  <div className="relative inline-block">
    <img
      className="inline-block object-cover w-12 h-12 rounded-lg shadow"
      src={props.src || defaultAvatar}
      alt="Profile"
    />
    {props.badge && (
      <span
        className={
          "absolute top-[2px] right-[-4px] inline-block w-2.5 h-2.5 bg-[#FF2060] " +
          "border-[1px] border-white rounded-full z-50 shadow"
        }
      />
    )}
  </div>
);

export default Avatar;
