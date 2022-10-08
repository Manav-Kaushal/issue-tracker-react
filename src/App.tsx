import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TechStack from "./TechStack";
import { useEffect } from "react";
import { Global } from "./interfaces/enums/Global";
import { globalState, INITIAL_GLOBALSTATE } from "./signals/global-signal";
import { getLocalStorageValue, setLocalStorageValue } from "./utils/lib";
import { issues } from "./signals/issues-signal";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-stack" element={<TechStack />} />
      </Routes>
    </>
  );
}

export default App;
