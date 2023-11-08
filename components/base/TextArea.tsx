import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const Textarea = ({ id, label, placeholder, name, required = false, ...rest }: TextareaProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="ml-1 text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        required={required}
        name={name}
        placeholder={placeholder}
        rows={4}
        className="rounded-md py-3 px-4 bg-transparent border border-purple text-white font-thin tracking-[0.15em]"
        {...rest}
      />
    </div>
  );
};
