import Lottie from "react-lottie";
import animationData from "../../lotties/empty.json";

type Props = {
  width?: number;
  height?: number;
  message?: string;
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid",
  },
};

const Empty = ({ width = 400, height = 400, message = "" }: Props) => {
  return (
    <div className="text-center">
      <Lottie options={defaultOptions} width={width} height={height} />
      {!!message.length && (
        <p className="text-lg text-slate-800 dark:text-slate-200 font-medium">
          {message}
        </p>
      )}
    </div>
  );
};

export default Empty;
