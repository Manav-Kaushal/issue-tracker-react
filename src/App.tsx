import IssueCard from "./components/Cards/IssueCard";
import { Issue } from "./interfaces/Issue";
import { issues } from "./signals/issues-signal";
import FormSection from "./sections/FormSection";
import { globalState } from "./signals/global-signal";
import StatsSection from "./sections/StatsSection";

function App() {
  return (
    <div className="grid min-h-[calc(100vh-70px)] grid-col-1 md:grid-cols-2">
      <div className="py-5 pl-4 space-y-4 font-light select-none rounded-br-md ">
        <FormSection />
        {globalState.value.showStats === true && <StatsSection />}
      </div>
      <div className="text-base w-full p-6 space-y-2 max-h-[85vh] overflow-y-scroll h-full">
        {Array.isArray(issues.value) &&
          !!issues.value.length &&
          issues.value.map((issue: Issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
      </div>
    </div>
  );
}

export default App;
