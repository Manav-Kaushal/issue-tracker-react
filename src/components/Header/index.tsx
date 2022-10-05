import React from "react";

type Props = {};

const Header: React.FC = (props: Props) => {
  return (
    <header className="z-10 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold uppercase cursor-pointer hover:text-sky-800 dark:hover:text-sky-400 transition-200">
            <a href="/">Issue Tracker</a>
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
