import React from "react";
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
  console.log(globalState.value);
  setLocalStorageValue(Global.GlobalOptions, globalState.value);
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
        <div className="space-x-2">
          <Button onClick={() => toggleShowStats()}>
            {globalState.value.showStats === true ? "Hide" : "Show"} Stats
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
