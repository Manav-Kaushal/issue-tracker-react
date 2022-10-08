import classNames from "classnames";
import { globalState } from "../signals/global-signal";
import { Helmet } from "react-helmet";
import FormSection from "../sections/FormSection";
import StatsSection from "../sections/StatsSection";
import Footer from "../components/Footer";
import IssuesDisplaySection from "../sections/IssuesDisplaySection";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Helmet>
        <title>Issue Tracker - React</title>
      </Helmet>
      <div
        className={classNames(
          "grid min-h-[calc(100vh-70px)] grid-col-1 md:grid-cols-2"
        )}
      >
        <div className="py-6 pl-4 space-y-4 font-light select-none rounded-br-md">
          <FormSection />
          {globalState.value.showStats === true && <StatsSection />}
          <Footer />
        </div>
        <div className="text-base w-full py-6 px-4 max-h-[85vh] overflow-y-scroll h-full">
          <IssuesDisplaySection />
        </div>
      </div>
    </>
  );
};

export default Home;
