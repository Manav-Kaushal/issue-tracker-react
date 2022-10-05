import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  sx?: string;
};

const StatCard = ({ sx = "", children }: Props) => {
  return (
    <div
      className={classNames(
        "p-2 font-medium rounded-md shadow dark:bg-slate-700 hover:shadow-md transition-200",
        sx
      )}
    >
      {children}
    </div>
  );
};

export default StatCard;
