import React, { InputHTMLAttributes } from "react";

type BaseInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const BaseInput = (props: BaseInputProps) => (
  <div className="mb-2">
    {props.label && (
      <label className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
    )}

    <div className="mt-1 relative rounded-md shadow-sm">
      <input
        {...props}
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
    </div>

    {props.error && <p className="text-sm text-red-400 mt-3">{props.error}</p>}
  </div>
);

export default BaseInput;
