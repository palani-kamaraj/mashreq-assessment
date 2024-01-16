import { Buffer } from 'buffer';

export const encode = (val: string) => {
  return Buffer.from(val, 'utf-8').toString('base64');
};
