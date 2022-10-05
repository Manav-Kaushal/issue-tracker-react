import { Issue } from "../interfaces/Issue";
import { formState, INITIAL_FORMSTATE } from "../signals/form-signal";
import { issues } from "../signals/issues-signal";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { setLocalStorageValue } from "../utils/lib";
import Button from "../components/Button";
import { severityLevels } from "../utils/mocks";
import { SeverityLevel } from "../interfaces/SeverityLevel";
import { SeverityLevelsValuesEnum } from "../interfaces/enums/SeverityLevels";
import { globalState } from "../signals/global-signal";
import { Global } from "../interfaces/enums/Global";

type Props = {};

const similarTitleCheck = (title: string) => {
  if (
    issues.value.some(
      (issue: Issue) => issue.title.toLowerCase() === title.toLowerCase()
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
  globalState.value = {
    ...globalState.value,
    totalIssuesCreated: globalState.value.totalIssuesCreated + 1,
  };
  setLocalStorageValue("issues", issues.value);
  setLocalStorageValue(Global.GlobalOptions, globalState.value);
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
    toast.success("Issue added!");
    formState.value = INITIAL_FORMSTATE; // Clear input value on add
  }
};

const FormSection = (props: Props) => {
  return (
    <div className="p-6 space-x-2 bg-white rounded-md dark:bg-slate-800">
      <form onSubmit={handleSubmission}>
        <p className="mb-2 text-lg font-semibold">Add an issue:</p>
        <div className="grid items-center grid-cols-3 py-6 border-t dark:border-gray-600">
          <label htmlFor="title" className="font-semibold">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formState.value.title}
            onChange={handleFormChange}
            className="block w-full col-span-2 p-2 mx-auto text-sm font-medium border rounded-lg bg-slate-50 border-slate-300 text-slate-900 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 transition-200 focus:outline-none "
            placeholder="Type an issue"
            autoComplete="off"
            required
          />
        </div>
        <div className="grid items-center grid-cols-3 py-6 border-y dark:border-gray-600">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={formState.value.description}
            onChange={handleFormChange}
            className="block w-full col-span-2 p-2 mx-auto text-sm font-medium border rounded-lg bg-slate-50 border-slate-300 text-slate-900 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 transition-200 focus:outline-none"
            placeholder="Give a brief description about the issue."
            autoComplete="off"
          />
        </div>
        <div className="grid items-center grid-cols-3 py-6 border-b dark:border-gray-600">
          <label htmlFor="severity" className="font-semibold">
            Severity Level <span className="text-red-500">*</span>
          </label>
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
            {severityLevels.map((severityLevel: SeverityLevel) => (
              <div key={severityLevel.value} className="flex items-center">
                <input
                  id={severityLevel.value}
                  name="severity"
                  type="radio"
                  onChange={handleFormChange}
                  defaultChecked={
                    severityLevel.value === SeverityLevelsValuesEnum.Low
                  }
                  className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500"
                  required
                />
                <label
                  htmlFor={severityLevel.value}
                  className="block ml-3 text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  {severityLevel.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button htmlType="submit" disabled={!formState.value.title.length}>
            Add Issue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
