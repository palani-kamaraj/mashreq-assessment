import { SubmitHandler } from 'react-hook-form';
import { IThemeOptions } from './enum';

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

export interface ILoginFormField {
  country: ICountryType | undefined;
  username: string;
  password: string;
}

export interface IFieldProps {
  name: string;
  label: string;
}

export type IUserSubmitHandlerType = SubmitHandler<ILoginFormField>;
