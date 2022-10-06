import FormSection from "./sections/FormSection";
import { globalState, INITIAL_GLOBALSTATE } from "./signals/global-signal";
import StatsSection from "./sections/StatsSection";
import { useEffect } from "react";
import { getLocalStorageValue, setLocalStorageValue } from "./utils/lib";
import { Global } from "./interfaces/enums/Global";
import IssuesDisplaySection from "./sections/IssuesDisplaySection";
import Helmet from "react-helmet";
import { issues } from "./signals/issues-signal";
import Footer from "./components/Footer";
import classNames from "classnames";

function App() {
  useEffect(() => {
    if (localStorage.getItem(Global.GlobalOptions) === null) {
      setLocalStorageValue(Global.GlobalOptions, INITIAL_GLOBALSTATE);
      globalState.value = getLocalStorageValue(Global.GlobalOptions);
    } else {
      globalState.value = getLocalStorageValue(Global.GlobalOptions);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("issues") === null) {
      setLocalStorageValue("issues", []);
      issues.value = getLocalStorageValue("issues");
    } else {
      issues.value = getLocalStorageValue("issues");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Issue Tracker - React</title>
      </Helmet>
      <div
        className={classNames(
          "grid min-h-[calc(100vh-70px)] grid-col-1 md:grid-cols-2"
        )}
      >
        <div className="py-6 pl-4 space-y-4 font-light select-none rounded-br-md">
          <FormSection />
          {globalState.value.showStats === true && <StatsSection />}
          <Footer />
        </div>
        <div className="text-base w-full py-6 px-4 max-h-[85vh] overflow-y-scroll h-full">
          <IssuesDisplaySection />
        </div>
      </div>
    </>
  );
}

export default App;
