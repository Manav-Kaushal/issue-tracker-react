import { signal } from "@preact/signals-react";

const INITIAL_FORMSTATE = {
  title: "",
  description: "",
  severity: "",
};

const formState = signal({
  title: "",
  description: "",
  severity: "",
});

export { INITIAL_FORMSTATE, formState };
