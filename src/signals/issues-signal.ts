import { signal } from "@preact/signals-react";
import { Issue } from "../interfaces/Issue";
import { getLocalStorageValue } from "../utils/lib";

const issues = signal<Issue[]>(getLocalStorageValue("issues"));

export { issues };
