import { StateCreator, create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { ILanguageOptions, IUpdateUserPasswordType, IUserType } from '@types';
import i18n from 'i18next';
import { fChangeUserPassword, fGetUser, fSaveUser } from '../firebase';

export interface IStore {
  lang: ILanguageOptions;
  user: IUserType | undefined;
  alert: {
    show: boolean;
    message: string;
    severity?: string;
  };
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
  updatePassword: (
    val: IUpdateUserPasswordType,
    success?: () => void,
    error?: (msg: string) => void
  ) => void;
  resetInvalidUserMessage: () => void;
  resetUserInfo: () => void;
  resetAlert: () => void;
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
  showAlert: false,
  alertMessage: '',
  invalidUserMessage: '',
  alert: {
    show: false,
    message: '',
  },
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
    success?: () => void,
    error?: (msg: string) => void
  ) => {
    set(() => ({ isLoading: true, invalidUserMessage: '' }));
    fGetUser(
      val,
      (user: IUserType) => {
        set(() => ({ user: { ...user, password: '' }, isLoading: false }));
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
  updatePassword: (
    val: IUpdateUserPasswordType,
    success?: () => void,
    error?: (msg: string) => void
  ) => {
    set(() => ({ isLoading: true, invalidUserMessage: '' }));
    fChangeUserPassword(
      val,
      () => {
        set(() => ({
          isLoading: false,
          alert: {
            show: true,
            message: i18n.t(`screen.welcome.changePassword.successMessage`),
          },
        }));
        if (success) {
          success();
        }
      },
      (code?: string) => {
        const errorMessage = i18n.t(`apiCodes.${code}`);
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
  resetAlert: () =>
    set(() => ({
      alert: {
        show: false,
        message: '',
      },
    })),
});

export const useStore = create<IStore>()(persist(store, storeOptions));

export const storeState = useStore.getState();
