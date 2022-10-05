import {
  SeverityLevelsLabelsEnum,
  SeverityLevelsValuesEnum,
} from "../interfaces/enums/SeverityLevels";
import { SeverityLevel } from "../interfaces/SeverityLevel";

export const severityLevels: SeverityLevel[] = [
  {
    value: SeverityLevelsValuesEnum.Low,
    title: SeverityLevelsLabelsEnum.Low,
  },
  {
    value: SeverityLevelsValuesEnum.Medium,
    title: SeverityLevelsLabelsEnum.Medium,
  },
  {
    value: SeverityLevelsValuesEnum.High,
    title: SeverityLevelsLabelsEnum.High,
  },
];
