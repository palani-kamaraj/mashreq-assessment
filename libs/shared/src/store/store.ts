import { StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from 'i18next';
import {
  ILanguageOptions,
  IStore,
  IUpdateUserPasswordType,
  IUserType,
} from '@types';
import { fChangeUserPassword, fGetUser, fSaveUser } from '../firebase';
import { storeOptions } from './helper';

export const store: StateCreator<IStore> = (set) => ({
  lang: ILanguageOptions.EN,
  user: undefined,
  isLoading: false,
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

export const zStore = (
  storageData?:
    | {
        name: string;
        storage: Storage | unknown;
      }
    | undefined
) => create<IStore>()(persist(store, storeOptions(storageData)));

export const useStore = zStore();

export const storeState = useStore.getState();
