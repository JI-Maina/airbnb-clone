import React from "react";

type CustomButtonProps = {
  label: string;
  className?: string;
  onClick: () => void;
};

export const CustomButton = ({
  label,
  className,
  onClick,
}: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark transition rounded-xl text-white ${className}`}
    >
      {label}
    </button>
  );
};
