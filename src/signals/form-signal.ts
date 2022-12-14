import { signal } from "@preact/signals-react";

const INITIAL_FORMSTATE = {
  title: "",
  description: "",
  severity: "low",
};

const formState = signal(INITIAL_FORMSTATE);

export { INITIAL_FORMSTATE, formState };
