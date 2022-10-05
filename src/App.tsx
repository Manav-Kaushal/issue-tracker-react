import IssueCard from "./components/Cards/IssueCard";
import { Issue } from "./interfaces/Issue";
import { issues } from "./signals/issues-signal";
import FormSection from "./sections/FormSection";

function App() {
  return (
    <div className="grid min-h-[calc(100vh-70px)] grid-col-1 md:grid-cols-2">
      <div className="py-5 pl-4 font-light select-none spa4ce-y-4 rounded-br-md ">
        <FormSection />
        <div className="p-6 bg-purple-800 rounded-md dark:bg-gray-800">
          Test
        </div>
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
