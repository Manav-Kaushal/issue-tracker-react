import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Global } from "../../interfaces/enums/Global";
import { globalState } from "../../signals/global-signal";
import { setLocalStorageValue } from "../../utils/lib";
import Button from "../Button";

type Props = {};

const toggleShowStats = () => {
  globalState.value = {
    ...globalState.value,
    showStats: !globalState.value.showStats,
  };
  setLocalStorageValue(Global.GlobalOptions, globalState.value);
};

const switchTheme = () => {
  globalState.value = {
    ...globalState.value,
    theme: globalState.value.theme === "light" ? "dark" : "light",
  };
  setLocalStorageValue(Global.GlobalOptions, globalState.value);
};

const Header: React.FC = (props: Props) => {
  const location = useLocation();

  return (
    <header className="z-10 p-4 shadow-lg h-[70px]">
      <div className="flex items-center justify-between h-full">
        <div>
          <Link to="/">
            <h2 className="text-xl font-bold uppercase cursor-pointer hover:text-sky-800 dark:hover:text-sky-400 transition-200">
              Issue Tracker
            </h2>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer" onClick={() => switchTheme()}>
            {globalState.value.theme === "light" ? (
              <FaMoon className="w-5 h-5" />
            ) : (
              <FaSun className="w-5 h-5" />
            )}
          </div>
          {location.pathname === "/" && (
            <Button onClick={() => toggleShowStats()}>
              {globalState.value.showStats === true ? "Hide" : "Show"} Stats
            </Button>
          )}
          {location.pathname === "/" ? (
            <Link to={"/tech-stack"}>
              <Button>Tech Stack</Button>
            </Link>
          ) : (
            <Link to={"/"}>
              <Button>Home</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
