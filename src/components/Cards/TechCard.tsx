import React from "react";
import { TechData } from "../../TechStack";

type Props = { tech: TechData };

const TechCard = ({ tech }: Props) => {
  return <div>{tech.title}</div>;
};

export default TechCard;
