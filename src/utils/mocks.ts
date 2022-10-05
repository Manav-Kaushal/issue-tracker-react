import { SeverityLevel } from "../interfaces/SeverityLevel";

export enum SeverityLevelsValuesEnum {
  Low = "low",
  Medium = "medium",
  High = "high",
}
enum SeverityLevelsLabelsEnum {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

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
