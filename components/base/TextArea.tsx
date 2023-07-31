import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const Textarea = ({ id, label, placeholder }: TextareaProps) => {
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
        placeholder={placeholder}
        rows={4}
        className="rounded-md py-3 px-4 bg-transparent border border-purple text-gray font-thin tracking-[0.15em]"
      />
    </div>
  );
};
