import { StateCreator, create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ILanguageOptions, IUserType } from '@types';
import i18n from 'i18next';
import { fGetUser, fSaveUser } from '../firebase';

interface IStore {
  lang: ILanguageOptions;
  user: IUserType | undefined;
  isLoading: boolean;
  invalidUserMessage: string;
  setLang: (val: ILanguageOptions) => void;
  setUser: (val: IUserType, success: () => void) => void;
  getUser: (val: IUserType, success: () => void) => void;
}

const storeOptions = {
  name: 'store',
  storage: createJSONStorage(() => localStorage),
  partialize: (state: IStore) =>
    Object.fromEntries(
      Object.entries(state).filter(
        ([key]) => !['isLoading', 'invalidUserMessage'].includes(key)
      )
    ),
};

const store: StateCreator<IStore> = (set) => ({
  lang: ILanguageOptions.EN,
  user: undefined,
  isLoading: false,
  invalidUserMessage: '',
  setLang: (val: ILanguageOptions) => set(() => ({ lang: val })),
  setUser: (val: IUserType, success: () => void) => {
    set(() => ({ isLoading: true }));
    fSaveUser(
      val,
      () => {
        set(() => ({ user: val, invalidUserMessage: '', isLoading: false }));
        if (success) {
          success();
        }
      },
      () => {
        set(() => ({
          invalidUserMessage: i18n.t('screen.login.error.invalidUser'),
          isLoading: false,
        }));
      }
    );
  },
  getUser: (val: IUserType, success: () => void) => {
    set(() => ({ isLoading: true }));
    fGetUser(
      val,
      () => {
        set(() => ({ user: val, invalidUserMessage: '', isLoading: false }));
        if (success) {
          success();
        }
      },
      () => {
        set(() => ({
          invalidUserMessage: i18n.t('screen.login.error.invalidUser'),
          isLoading: false,
        }));
      }
    );
  },
});

export const useStore = create<IStore>()(persist(store, storeOptions));

export const storeState = useStore.getState();
