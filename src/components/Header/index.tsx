import React from "react";
import { globalState } from "../../signals/global-signal";

type Props = {};

const toggleShowStats = () => {
  globalState.value = {
    ...globalState.value,
    showStats: !globalState.value.showStats,
  };
};

const Header: React.FC = (props: Props) => {
  return (
    <header className="z-10 p-4 shadow-lg h-[70px]">
      <div className="flex items-center justify-between h-full">
        <div>
          <h2 className="text-xl font-bold uppercase cursor-pointer hover:text-sky-800 dark:hover:text-sky-400 transition-200">
            <a href="/">Issue Tracker</a>
          </h2>
        </div>
        <div>
          <label className="switch">
            <input type="checkbox" onClick={toggleShowStats} />
            <span className="slider round" />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
