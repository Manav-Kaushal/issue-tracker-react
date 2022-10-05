interface GetLocalStorageValueProps {
  <T>(name: string): T;
}

interface SetLocalStorageValue {
  <T>(name: string, value: T): boolean;
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

export { getLocalStorageValue, setLocalStorageValue };
