interface GetLocalStorageValueProps {
  <T>(name: string): T;
}

interface SetLocalStorageValue {
  <T>(name: string, value: T): boolean;
}

interface DeleteKeysFromLocalStorage {
  (keys: string[]): boolean;
}

interface ClearLocalStorage {
  (): boolean;
}

const getLocalStorageValue: GetLocalStorageValueProps = (name) => {
  if (typeof Storage !== "undefined") {
    return JSON.parse(localStorage.getItem(name) || "{}");
  }
  return {};
};

const setLocalStorageValue: SetLocalStorageValue = (name, value) => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(name, JSON.stringify(value));
    return true;
  }
  return false;
};

const deleteKeysFromLocalStorage: DeleteKeysFromLocalStorage = (
  keys: string[]
) => {
  if (typeof Storage !== "undefined") {
    keys.map((key) => localStorage.removeItem(key));
    return true;
  }
  return false;
};

const clearLocalStorage: ClearLocalStorage = () => {
  if (typeof Storage !== "undefined") {
    localStorage.clear();
    return true;
  }
  return false;
};

export {
  getLocalStorageValue,
  setLocalStorageValue,
  deleteKeysFromLocalStorage,
  clearLocalStorage,
};
