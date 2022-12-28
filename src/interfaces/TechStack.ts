import { ReactNode } from "react";

export interface TechData {
  title: string;
  icon: ReactNode;
  description?: string;
  bgColor: string;
  version: string;
  category: string;
}
