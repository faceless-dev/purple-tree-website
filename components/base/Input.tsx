import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const Input = ({ id, label, name, placeholder, type, required = false, ...rest }: InputProps) => {
  return (
    <div
      className="flex flex-col gap-1"
      {...rest}
    >
      <label
        htmlFor={id}
        className="ml-1 text-white"
      >
        {label}
      </label>

      <input
        required={required}
        name={name}
        id={id}
        placeholder={placeholder}
        className="rounded-md p-2 px-4 bg-transparent border border-purple text-white font-thin tracking-[0.15em]"
        type={type}
        {...rest}
      />
    </div>
  );
};
