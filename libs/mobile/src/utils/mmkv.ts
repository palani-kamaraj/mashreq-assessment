import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

/* Note: mmkv id and zustand persist store name should be same */
export const appStorage = new MMKV({ id: 'mStore' });

export const mmKvStorage: StateStorage = {
  setItem: (name, value) => {
    return appStorage.set(name, value);
  },
  getItem: (name) => {
    const value = appStorage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return appStorage.delete(name);
  },
};
