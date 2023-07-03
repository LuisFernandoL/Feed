import { TLoginForm } from "../../../Pages/Login/loginFormSchema";
import { TRegisterForm } from "../../../Pages/Register/registerFormSchema";

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}
export interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}
export interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}
export interface IUserContext {
  userLogged: IUser | null;
  userRegister: (formData: TRegisterForm) => Promise<void>;
  userLogin: (formData: TLoginForm) => Promise<void>;
  userLogout: () => void;
}

export interface INew {
    newPost: IPosts
}

export interface IPosts {
  title: string;
  description: string;
  owner: string;
  userId: string;
}

export interface IPostContext {
  newPost: INew[];
  addNewPost: (formData: INew) => Promise<void>;
}
