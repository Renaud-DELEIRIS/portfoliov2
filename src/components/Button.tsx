import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
}: Props) {
  return (
    <button
      className={`
    ${className} px-8 py-2 border-yellow-600 border-2 text-yellow-600 relative button-anim
     after:bg-yellow-600 dark:hover:text-neutral-800 hover:text-neutral-100 z-10 duration-200

    `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
