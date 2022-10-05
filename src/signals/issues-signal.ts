import { signal } from "@preact/signals-react";
import { Issue } from "../interfaces/Issue";

const issues = signal<Issue[]>([]);

export { issues };
