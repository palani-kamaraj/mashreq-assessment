import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateCreator, create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ILanguageOptions, IThemeOptions, IUserType } from '@types';
import { Platform } from 'react-native';

interface IStore {
  lang: ILanguageOptions;
  user: { name: string; lang: IThemeOptions; createdOn: string } | undefined;
  setLang: (val: ILanguageOptions) => void;
  setUser: (val: IUserType) => void;
}

const store: StateCreator<IStore> = (set) => ({
  lang: ILanguageOptions.EN,
  user: undefined,
  setLang: (val: ILanguageOptions) => set(() => ({ lang: val })),
  setUser: (val: IUserType) => set(() => ({ user: val })),
});

export const useStore = create<IStore>()(
  persist(store, {
    name: 'store',
    storage: createJSONStorage(() =>
      Platform.OS === 'web' ? localStorage : AsyncStorage
    ),
  })
);

export const storeState = useStore.getState();
