export const parseEnvValues = (...keys: string[]): Record<string, string> => {
  let res = {};

  keys.length >= 1 &&
    keys.forEach((key) => {
      res = { ...res, [key]: process.env[key] } as Record<string, string>;
    });

  return res;
};
