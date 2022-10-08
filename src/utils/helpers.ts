const randomString = () => Math.random().toString(36).slice(2);

const uppercaseWords = (str: string) =>
  str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

const toCamelCase = (str: string) =>
  str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));

const removeDuplicates = (arr: any[]) => [...new Set(arr)];

const removeFalsy = (arr: any[]) => arr.filter(Boolean);

const isEven = (num: number) => num % 2 === 0;

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const average = (...args: any[]) => args.reduce((a, b) => a + b) / args.length;

const clearCookies = () =>
  document.cookie
    .split(";")
    .forEach(
      (c) =>
        (document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
    );

export {
  randomString,
  uppercaseWords,
  toCamelCase,
  removeDuplicates,
  removeFalsy,
  isEven,
  random,
  average,
  clearCookies,
};
