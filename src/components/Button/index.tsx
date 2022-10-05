import React, { ReactNode } from "react";
import classes from "classnames";

type Props = {
  variant?: "primary" | "secondary" | "disabled" | "auth";
  disabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
};

const getBaseClasses = () => {
  return "w-fit inline-block flex items-center font-semibold px-3 py-1.5 rounded-md cursor-pointer transition-200";
};

const getVariant = (variant: string) => {
  switch (variant) {
    case "primary":
      return "text-sky-200 bg-sky-800 hover:bg-sky-600 dark:bg-sky-200";
    case "disabled":
      return "text-gray-600 bg-gray-400 cursor-not-allowed";
    default:
      break;
  }
};

const Button = (props: Props) => {
  const {
    variant = "primary",
    disabled = false,
    onClick = () => {},
    htmlType = "button",
    children,
  } = props;

  return (
    <button
      type={htmlType}
      className={classes(
        getBaseClasses(),
        getVariant(!!disabled ? "disabled" : variant)
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
