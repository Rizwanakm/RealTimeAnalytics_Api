import dotenv from 'dotenv';
dotenv.config();

export const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) throw new Error(`${key} is missing`);
  return value;
};
