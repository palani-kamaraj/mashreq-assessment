import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ILanguageOptions, IThemeOptions, IUserType } from '@types';

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
  devtools(
    persist(store, {
      name: 'store',
    })
  )
);

export const storeState = useStore.getState();
