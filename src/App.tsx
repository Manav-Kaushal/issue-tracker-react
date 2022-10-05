import "./App.css";
import Button from "./components/Button";
import IssueCard from "./components/Cards/IssueCard";
import { Issue } from "./interfaces/Issue";
import { formState, INITIAL_FORMSTATE } from "./signals/form-signal";
import { issues } from "./signals/issues-signal";
import { v4 as uuidv4 } from "uuid";
import { setLocalStorageValue } from "./utils/lib";
import toast from "react-hot-toast";

const similarTitleCheck = (title: string) => {
  if (
    issues.value.some(
      (issue) => issue.title.toLowerCase() === title.toLowerCase()
    )
  ) {
    return true;
  } else {
    return false;
  }
};

const handleFormChange = (e: any) => {
  formState.value = {
    ...formState.value,
    [e.target.name]: e.target.value,
  };
};

const addIssue = () => {
  let id = uuidv4().split("-").join("");
  issues.value = [...issues.value, { id, isClosed: false, ...formState.value }];
  setLocalStorageValue("issues", issues.value);
};

const handleSubmission = (e?: any) => {
  e.preventDefault();
  const titleExists = similarTitleCheck(formState.value.title);
  if (titleExists) {
    toast.error(
      <div className="flex flex-col">
        <p>Title already exists.</p>
        <p>Please change the title and try again!</p>
      </div>
    );
  } else {
    addIssue();
    formState.value = INITIAL_FORMSTATE; // Clear input value on add
  }
};

function App() {
  return (
    <div className="grid min-h-screen grid-col-1 md:grid-cols-2">
      <div className="py-5 space-y-4 font-light select-none rounded-br-md ">
        <div className="p-6 space-x-2 bg-white rounded-md">
          <form onSubmit={handleSubmission}>
            <p className="text-lg font-semibold">Add an issue:</p>
            <div className="grid items-center grid-cols-3 py-6 border-y">
              <label htmlFor="title" className="font-semibold">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formState.value.title}
                onChange={handleFormChange}
                className="block w-full col-span-2 p-2 mx-auto text-sm border rounded-lg bg-slate-50 border-slate-300 text-slate-900 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 transition-200 focus:outline-none"
                placeholder="Type an issue"
                autoComplete="off"
                required
              />
            </div>
            <div className="grid items-center grid-cols-3 py-6 border-y">
              <label htmlFor="description" className="font-semibold">
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                value={formState.value.description}
                onChange={handleFormChange}
                className="block w-full col-span-2 p-2 mx-auto text-sm border rounded-lg bg-slate-50 border-slate-300 text-slate-900 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 transition-200 focus:outline-none"
                placeholder="Give a brief description about the issue."
                autoComplete="off"
              />
            </div>
            <div className="grid items-center grid-cols-3 py-6 border-y">
              <label htmlFor="severity" className="font-semibold">
                Severity Level:
              </label>
              <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                {[
                  { value: "low", title: "Low" },
                  { value: "medium", title: "Medium" },
                  { value: "high", title: "High" },
                ].map((severityLevel) => (
                  <div key={severityLevel.value} className="flex items-center">
                    <input
                      id={severityLevel.value}
                      name="severity"
                      type="radio"
                      value={severityLevel.value}
                      onChange={handleFormChange}
                      defaultChecked={severityLevel.value === "low"}
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      required
                    />
                    <label
                      htmlFor={severityLevel.value}
                      className="block ml-3 text-sm font-medium text-gray-700"
                    >
                      {severityLevel.title}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button
                htmlType="submit"
                disabled={!formState.value.title.length}
              >
                Add Issue
              </Button>
            </div>
          </form>
        </div>
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
