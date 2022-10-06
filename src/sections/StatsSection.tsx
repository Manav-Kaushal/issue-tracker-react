import StatCard from "../components/Cards/StatCard";
import { globalState } from "../signals/global-signal";
import { issues } from "../signals/issues-signal";

type Props = {};

const StatsSection = (props: Props) => {
  return (
    <div className="py-3 px-6 bg-white rounded-md dark:bg-slate-800">
      <div className="grid grid-cols-4 gap-4">
        <StatCard sx="hover:bg-red-100 dark:hover:bg-red-800">
          <h4>Total issues created:</h4>
          <p>{globalState.value.totalIssuesCreated}</p>
        </StatCard>
        <StatCard sx="hover:bg-red-100 dark:hover:bg-red-800">
          <h4>Total issues deleted:</h4>
          <p>{globalState.value.totalIssuesClosed}</p>
        </StatCard>
        <StatCard sx="hover:bg-yellow-100 dark:hover:bg-yellow-800">
          <h4>Opened issues:</h4>
          <p>
            {issues.value.filter((issue) => issue.isClosed === false).length}
          </p>
        </StatCard>
        <StatCard sx="hover:bg-emerald-100 dark:hover:bg-emerald-800">
          <h4>Closed issues:</h4>
          <p>
            {issues.value.filter((issue) => issue.isClosed === true).length}
          </p>
        </StatCard>
      </div>
    </div>
  );
};

export default StatsSection;
