import { ReactNode } from "react";
import classes from "classnames";

type Props = {
  variant?: "sky" | "yellow" | "red" | "green" | "disabled" | "auth";
  disabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  children: ReactNode;
};

const getBaseClasses = () => {
  return "w-fit inline-block flex items-center font-semibold rounded-md cursor-pointer transition-200";
};

const getVariant = (variant: string) => {
  switch (variant) {
    case "sky":
      return "text-sky-100 bg-sky-500 hover:bg-sky-600 dark:bg-sky-800 dark:hover:bg-sky-700";
    case "yellow":
      return "text-yellow-100 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-800 dark:hover:bg-yellow-700";
    case "red":
      return "text-red-100 bg-red-500 hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-700";
    case "green":
      return "text-emerald-100 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-800 dark:hover:bg-emerald-700";
    case "disabled":
      return "text-gray-600 bg-gray-400 cursor-not-allowed";
    default:
      break;
  }
};

const getSize = (size: string) => {
  switch (size) {
    case "sm":
      return "px-2.5 py-1 text-sm";
    case "md":
      return "px-3 py-1.5 text-base";
    case "lg":
      return "px-3.5 py-2 text-lg";
    default:
      break;
  }
};

const Button = (props: Props) => {
  const {
    variant = "sky",
    disabled = false,
    onClick = () => {},
    htmlType = "button",
    size = "md",
    children,
  } = props;

  return (
    <button
      type={htmlType}
      className={classes(
        getBaseClasses(),
        getSize(size),
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
