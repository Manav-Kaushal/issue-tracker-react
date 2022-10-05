import { signal } from "@preact/signals-react";
import { getLocalStorageValue } from "@utils/lib";
import { Issue } from "../interfaces/Issue";

const issues = signal<Issue[]>(getLocalStorageValue("issues"));

export { issues };
