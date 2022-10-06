import IssueCard from "../components/Cards/IssueCard";
import Empty from "../components/Empty";
import { Issue } from "../interfaces/Issue";
import { issues } from "../signals/issues-signal";
import { motion } from "framer-motion";

type Props = {};

const IssuesDisplaySection = (props: Props) => {
  return (
    <>
      {Array.isArray(issues.value) && !!issues.value.length ? (
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
                type: "tween",
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="space-y-4"
        >
          {issues.value.map((issue: Issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </motion.div>
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
