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
  setUser: (
    val: IUserType,
    success: () => void,
    error?: (msg: string) => void
  ) => void;
  getUser: (
    val: IUserType,
    success: () => void,
    error?: (msg: string) => void
  ) => void;
  resetInvalidUserMessage: () => void;
  resetUserInfo: () => void;
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
  setUser: (
    val: IUserType,
    success: () => void,
    error?: (msg: string) => void
  ) => {
    set(() => ({ isLoading: true, invalidUserMessage: '' }));
    fSaveUser(
      val,
      () => {
        set(() => ({ user: { ...val, password: '' }, isLoading: false }));
        if (success) {
          success();
        }
      },
      (code?: string) => {
        const errorMsg = i18n.t(
          `screen.login.error.${
            code === 'USER_EXISTS' ? 'userNameAlreadyExists' : 'invalidUser'
          }`
        );
        set(() => ({
          invalidUserMessage: errorMsg,
          isLoading: false,
        }));
        error && error(errorMsg);
      }
    );
  },
  getUser: (
    val: IUserType,
    success: () => void,
    error?: (msg: string) => void
  ) => {
    set(() => ({ isLoading: true, invalidUserMessage: '' }));
    fGetUser(
      val,
      () => {
        set(() => ({ user: { ...val, password: '' }, isLoading: false }));
        if (success) {
          success();
        }
      },
      () => {
        const errorMessage = i18n.t('screen.login.error.invalidUser');
        set(() => ({
          invalidUserMessage: errorMessage,
          isLoading: false,
        }));
        error && error(errorMessage);
      }
    );
  },
  resetInvalidUserMessage: () => set(() => ({ invalidUserMessage: '' })),
  resetUserInfo: () => set(() => ({ user: undefined })),
});

export const useStore = create<IStore>()(persist(store, storeOptions));

export const storeState = useStore.getState();
