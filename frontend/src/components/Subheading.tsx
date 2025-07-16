import {Link} from "react-router-dom";

interface HeadingProps {
  label: string;
  buttonText: string;
  to: string;
}

export const SubHeading = ({label, buttonText, to}: HeadingProps) => {
  return (
    <div className="text-slate-500 text-md pt-1 px-4 pb-4">
      {label}
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
  );
};
