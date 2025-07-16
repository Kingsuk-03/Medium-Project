import type {ChangeEvent} from "react";

interface InputBoxProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function InputBox({label, placeholder, onChange}: InputBoxProps) {
  return (
    <div>
      <div className="text-base font-medium text-left py-2">{label}</div>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200 text-slate-900"
      />
    </div>
  );
}
