import IssueCard from "../components/Cards/IssueCard";
import Empty from "../components/Empty";
import { Issue } from "../interfaces/Issue";
import { issues } from "../signals/issues-signal";

type Props = {};

const IssuesDisplaySection = (props: Props) => {
  return (
    <>
      {Array.isArray(issues.value) && !!issues.value.length ? (
        issues.value.map((issue: Issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))
      ) : (
        <Empty
          width={500}
          height={300}
          message="No issues found. Please add a issue!"
        />
      )}
    </>
  );
};

export default IssuesDisplaySection;
