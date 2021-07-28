import React from "react";

const InputLabel = ({ label, htmlFor }: any) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {label}
  </label>
);

const Input = ({
  type = "text",
  name,
  label,
  placeholder,
  value,
  onChange,
}: any) => (
  <div className="mb-3">
    {label && <InputLabel label={label} htmlFor={name} />}
    <div className="mt-1 relative rounded-md shadow-sm">
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default Input;
