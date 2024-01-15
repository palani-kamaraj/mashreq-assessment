import { IThemeOptions } from "./enum";

export interface ICountryType {
  code: string;
  label: string;
}

export interface IUserType {
  name: string;
  lang: IThemeOptions;
  createdOn: string;
}
