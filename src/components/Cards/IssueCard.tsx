import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from "react-icons/fc";
import { Issue } from "../../interfaces/Issue";
import { issues } from "../../signals/issues-signal";
import { setLocalStorageValue } from "../../utils/lib";
import Button from "../Button";
import { toast } from "react-hot-toast";
import classNames from "classnames";

type Props = {
  issue: Issue;
};

function updateIssue(incomingIssue: Issue) {
  const updatedIssue = issues.value.map((issue: Issue) => {
    if (issue.id === incomingIssue.id) {
      return { ...issue, isClosed: true };
    }
    return issue;
  });
  issues.value = updatedIssue;
  if (!!issues.value.length) {
    setLocalStorageValue("issues", issues.value);
    toast.success("Issue closed!");
  } else {
    toast.error("Issue could not be closed!");
    return;
  }
}

function deleteIssue(id: string) {
  if (!!issues.value.length) {
    issues.value = issues.value.filter((issue: Issue) => issue.id !== id);
    setLocalStorageValue("issues", issues.value);
    toast.success("Issue removed!");
  } else {
    toast.success("Issue could not be removed!");
    return;
  }
}

const IssueCard = ({ issue }: Props) => {
  return (
    <div
      className={classNames(
        "flex flex-col p-4 rounded-md",
        !issue.isClosed
          ? "text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800"
          : "text-slate-800 dark:text-slate-200 bg-emerald-100 dark:bg-emerald-800"
      )}
    >
      <div className="flex space-x-2 text-sm font-semibold divide-x">
        <p>Unique ID: {issue.id}</p>
        {!issue.isClosed ? (
          <p className="tag inline-flex items-center px-2 py-0.5 rounded text-xs transition-200 font-medium bg-yellow-200 text-yellow-800 w-fit">
            Open
          </p>
        ) : (
          <p className="tag inline-flex items-center px-2 py-0.5 rounded text-xs transition-200 font-medium bg-emerald-200 text-emerald-800 w-fit">
            Closed
          </p>
        )}
      </div>
      {!!issue.severity.length && (
        <div className="flex items-center mt-2 space-x-2">
          {issue.severity === "low" && <FcLowPriority className="w-5 h-5" />}
          {issue.severity === "medium" && (
            <FcMediumPriority className="w-5 h-5" />
          )}
          {issue.severity === "high" && <FcHighPriority className="w-5 h-5" />}
          <p className="text-sm font-semibold capitalize">{issue.severity}</p>
        </div>
      )}
      <div className="mt-2">
        <h3 className="text-2xl font-semibold leading-normal line-clamp-1">
          {issue.title}
        </h3>
        {!!issue.description.length && (
          <p className="line-clamp-2">{issue.description}</p>
        )}
      </div>
      <div className="flex items-center mt-4 space-x-2">
        <Button
          variant="yellow"
          onClick={() => updateIssue(issue)}
          disabled={!!issue.isClosed}
        >
          Close
        </Button>
        <Button variant="red" onClick={() => deleteIssue(issue.id || "")}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default IssueCard;
