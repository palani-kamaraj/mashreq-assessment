import { IThemeOptions } from './enum';

export interface ICountryType {
  value: string;
  label: string;
}

export interface IUserType {
  name: string;
  lang: IThemeOptions;
  createdOn: string;
}

export interface ILoginFormField {
  country: IThemeOptions | null;
  username: string;
  password: string;
}

export interface IFieldProps {
  name: string;
  label: string;
}