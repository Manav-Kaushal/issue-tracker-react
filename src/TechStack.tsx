import TechCard from "./components/Cards/TechCard";
import { motion } from "framer-motion";
import { techStackData } from "./utils/mocks";
import { TechData } from "./interfaces/TechStack";

type Props = {};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TechStack = (props: Props) => {
  return (
    <div className="min-h-[calc(100vh-70px)] px-4 py-8 space-y-10">
      <div className="w-full">
        <h3 className="text-xl font-semibold underline">Frontend:</h3>
        <motion.div
          className="container grid grid-cols-5 gap-16 mt-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {techStackData
            .filter((data: TechData) => data.category === "Frontend")
            .map((data: TechData, index: number) => (
              <motion.div key={index} className="item" variants={item}>
                <TechCard tech={data} />
              </motion.div>
            ))}
        </motion.div>
      </div>
      <div>
        <h3 className="text-xl font-semibold underline">State-Management:</h3>
        <motion.div
          className="container grid grid-cols-5 gap-16 mt-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {techStackData
            .filter((data: TechData) => data.category === "State-Management")
            .map((data: TechData, index: number) => (
              <motion.div key={index} className="item" variants={item}>
                <TechCard tech={data} />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
