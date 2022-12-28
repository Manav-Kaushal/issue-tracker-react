import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMemo } from "react";
import { TechData } from "../../interfaces/TechStack";

const StyledLink = styled(Link)<{ bgColor: string }>`
  transition: all 0.3s ease-in-out;

  .badgeOuter {
    background: none;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    .badgeOuter {
      background-color: ${({ bgColor }) =>
        !bgColor.includes("gradient") ? bgColor : null};
      background-image: ${({ bgColor }) =>
        bgColor.includes("gradient") ? bgColor : null};
    }
  }
`;

type Props = { tech: TechData };

const TechCard = ({ tech }: Props) => {
  const { title, icon, description, bgColor, version } = tech;
  const gradient = useMemo(() => {
    if (bgColor.includes("gradient")) {
      return bgColor;
    } else {
      return "";
    }
  }, [bgColor]);

  return (
    <>
      <StyledLink
        bgColor={!!gradient.length ? gradient : bgColor}
        className="relative block p-4 border border-gray-100 shadow-xl group rounded-xl dark:border-none dark:shadow-lg dark:bg-slate-800"
        to=""
      >
        <span className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600 dark:bg-slate-900 dark:text-slate-400">
          {version}
        </span>

        <div className="mt-4 text-gray-500 sm:pr-8">
          <div className="relative w-[6.4em] h-[6.4em] rounded-[20%] inline-block top-0 transition-300 shadow-badge badgeOuter">
            <div className="w-[70px] h-[70px] bg-white dark:bg-slate-800 absolute rounded-[30%] flex items-center justify-center shadow-innerBadge top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]">
              {icon}
            </div>
          </div>

          <h5 className="mt-4 text-xl font-bold text-gray-900 dark:text-slate-200">
            {title}
          </h5>

          {description && (
            <p className="hidden mt-2 text-sm sm:block">{description}</p>
          )}
        </div>
      </StyledLink>
    </>
  );
};

export default TechCard;
