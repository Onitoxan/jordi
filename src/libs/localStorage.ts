type LocalStorageKey = "";
type LocalStorageValue = string | number | boolean | object;

const isPrimitive = (x: unknown): x is string | number | boolean => {
  switch (typeof x) {
    case "boolean":
    case "number":
    case "string":
      return true;
  }
  return false;
};
export const setLocalStorage = (
  key: LocalStorageKey,
  value: LocalStorageValue,
) => {
  if (isPrimitive(value)) {
    localStorage.setItem(key, value.toString());
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = <T extends LocalStorageValue>(
  key: LocalStorageKey,
  type: T,
): T | undefined => {
  const value = localStorage.getItem(key);
  if (!value) return;
  switch (type) {
    case "boolean":
      return Boolean(value) as T;
    case "number":
      return parseInt(value) as T;
    case "object":
      return JSON.parse(value) as T;
  }
  return value as T;
};
