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
import { batch, useSignal } from "@preact/signals-react";
import { globalState } from "../../signals/global-signal";
import { Global } from "../../interfaces/enums/Global";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

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
    batch(() => {
      issues.value = issues.value.filter((issue: Issue) => issue.id !== id);
      globalState.value = {
        ...globalState.value,
        totalIssuesClosed: globalState.value.totalIssuesClosed + 1,
      };
    });
    setLocalStorageValue("issues", issues.value);
    setLocalStorageValue(Global.GlobalOptions, globalState.value);
    toast.success("Issue removed!");
  } else {
    toast.success("Issue could not be removed!");
    return;
  }
}

const IssueCard = ({ issue }: Props) => {
  const openModal = useSignal(false);

  const toggleModal = () => {
    if (openModal.value === false) {
      openModal.value = true;
    } else {
      openModal.value = false;
    }
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: { x: 200, opacity: 0 },
          show: { x: 0, opacity: 1 },
        }}
        className={classNames(
          "w-full flex flex-col p-4 rounded-md",
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
            {issue.severity === "high" && (
              <FcHighPriority className="w-5 h-5" />
            )}
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
          <Button variant="red" onClick={toggleModal}>
            Remove
          </Button>
        </div>
      </motion.div>
      <Transition appear show={openModal.value} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Are You Sure?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Once deleted, this issue will be removed from the list and
                      cannot be restored back!
                    </p>
                  </div>

                  <div className="flex items-center justify-end mt-4 space-x-2">
                    <Button onClick={toggleModal}>Cancel</Button>
                    <Button
                      onClick={() => deleteIssue(issue.id || "")}
                      variant="red"
                    >
                      Proceed
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default IssueCard;
