import type {ChangeEvent} from "react";

interface InputBoxProps {
  type?: string;
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function InputBox({label, placeholder, type, onChange}: InputBoxProps) {
  return (
    <div>
      <label className="block mb-2 text-base font-medium text-gray-900">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
