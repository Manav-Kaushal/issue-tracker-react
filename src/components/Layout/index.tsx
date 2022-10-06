import { ReactNode, useEffect } from "react";
import Header from "../Header";
import classes from "classnames";
import { getLocalStorageValue } from "../../utils/lib";
import { Global } from "../../interfaces/enums/Global";
import { globalState } from "../../signals/global-signal";
import { effect } from "@preact/signals-react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  effect(() => {
    if (globalState.value.theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  });

  return (
    <div
      className={classes(
        "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
      )}
    >
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
