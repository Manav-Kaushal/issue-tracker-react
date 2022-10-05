import Header from "src/components/Header";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
