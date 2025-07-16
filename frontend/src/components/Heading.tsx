interface HeadingProps {
  label: string;
}

export const Heading = ({label}: HeadingProps) => {
  return <div className="font-bold text-3xl pt-6">{label}</div>;
};
