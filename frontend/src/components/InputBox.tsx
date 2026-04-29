import type {ChangeEvent} from "react";

interface InputBoxProps {
  type?: string;
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function InputBox({label, placeholder, type, onChange}: InputBoxProps) {
  return (
    <div className="group">
      <label className="eyebrow block mb-2.5">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-transparent border-b border-[var(--line)] text-[var(--ink)] text-base font-body block w-full pb-2.5 pt-1 px-0.5 placeholder:text-[var(--ink-muted)] placeholder:font-light transition-colors duration-300 focus:border-[var(--accent)]"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
