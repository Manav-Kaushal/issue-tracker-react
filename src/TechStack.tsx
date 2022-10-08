import TechCard from "./components/Cards/TechCard";

type Props = {};

export interface TechData {
  title: string;
}

const techStackData = [
  {
    title: "React",
  },
];

const TechStack = (props: Props) => {
  return (
    <div className="min-h-[calc(100vh-70px)] px-4 py-8">
      <div>
        {techStackData.map((data) => (
          <TechCard tech={data} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
