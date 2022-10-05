import { signal } from "@preact/signals-react";

const INITIAL_GLOBALSTATE = {
  showStats: false,
};

const globalState = signal(INITIAL_GLOBALSTATE);

export { INITIAL_GLOBALSTATE, globalState };
