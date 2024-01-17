import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  SubmitHandler,
} from 'react-hook-form';
import { ILanguageOptions, IThemeOptions } from './enum';

export interface ICountryType {
  code: IThemeOptions;
  value: IThemeOptions;
  label: string;
}

export interface IUserType {
  id?: string;
  username: string;
  password: string;
  country: IThemeOptions;
  createdOn?: string;
  updatedOn?: string;
}

export interface IUpdateUserPasswordType extends IChangePasswordFormField {
  id?: string;
}

export interface ILoginFormField {
  country: ICountryType | undefined;
  username: string;
  password: string;
}

export interface IChangePasswordFormField {
  oldPassword: string;
  password: string;
}

export interface IFieldProps {
  name: string;
  label: string;
  info?: string;
}

export type IUserSubmitHandlerType = SubmitHandler<ILoginFormField>;
export type IUserChangePasswordSubmitHandlerType =
  SubmitHandler<IChangePasswordFormField>;

export type IFormCountryErrors = Merge<
  FieldError,
  FieldErrorsImpl<ICountryType>
>;


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