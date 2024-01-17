import { createJSONStorage } from 'zustand/middleware';
import { IStore } from '@types';

export const removeKeysFromPersist = [
  'isLoading',
  'invalidUserMessage',
  'alert',
];

export const storeOptions = (
  storageData?:
    | {
        name: string;
        storage: Storage | unknown;
      }
    | undefined
) => {
  const { storage: storagePkg, name } = storageData || {};
  return {
    name: name ?? 'store',
    storage: createJSONStorage(
      () => (storagePkg ? storagePkg : localStorage) as Storage
    ),
    partialize: (state: IStore) =>
      Object.fromEntries(
        Object.entries(state).filter(
          ([key]) => !removeKeysFromPersist.includes(key)
        )
      ),
  };
};

