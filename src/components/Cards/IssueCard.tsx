import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { Issue } from "../../interfaces/Issue";

type Props = {
  issue: Issue;
};

const IssueCard = ({ issue }: Props) => {
  return (
    <div className="flex flex-col p-4 bg-red-500 rounded-md">
      <p className="font-semibold">Unique ID: {issue.id}</p>
      <span className="tag inline-flex items-center px-2 py-0.5 rounded text-xs transition-200 font-medium bg-yellow-200 text-yellow-800 w-fit">
        Open
      </span>
      <h3 className="text-2xl font-semibold leading-7">{issue.title}</h3>
      <div className="flex items-center mt-3">
        <HiOutlineInformationCircle className="w-5 h-5" />
        <p className="text-sm font-medium text-slate-900 dark:text-slate-200">
          {issue.severity}
        </p>
      </div>
    </div>
  );
};

export default IssueCard;
