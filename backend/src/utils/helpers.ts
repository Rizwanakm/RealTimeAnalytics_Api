import dotenv from 'dotenv';
dotenv.config();

export const getEnv = (key: string, fallback = ''): string => {
  const val = process.env[key];
  if (!val && !fallback) {
    throw new Error(`Missing env variable: ${key}`);
  }
  return val || fallback;
};
