import React, { BaseHTMLAttributes } from "react";

type AvatarProps = BaseHTMLAttributes<HTMLDivElement> & {
  badge: boolean;
  src: string;
};

const Avatar = (props: AvatarProps) => (
  <div className="relative inline-block">
    <img
      className="inline-block object-cover w-12 h-12 rounded-lg"
      src={props.src}
      alt="Profile"
    />
    {props.badge && (
      <span className="absolute top-[-4px] right-[-4px] inline-block w-3 h-3 bg-red-600 border-2 border-white rounded-full" />
    )}
  </div>
);

export default Avatar;
