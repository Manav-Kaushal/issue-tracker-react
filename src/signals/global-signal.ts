import { signal } from "@preact/signals-react";
import { GlobalState } from "../interfaces/Global";

const INITIAL_GLOBALSTATE = {
  showStats: false,
  totalIssuesCreated: 0,
  totalIssuesClosed: 0,
  theme: "light",
};

const globalState = signal<GlobalState>(INITIAL_GLOBALSTATE);

export { INITIAL_GLOBALSTATE, globalState };
