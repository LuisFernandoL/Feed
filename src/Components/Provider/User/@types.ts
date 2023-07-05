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

export interface IPost {
  image: string;
  title: string;
  description: string;
  owner: string;
  userId: number;
  id: number;
  likes: [];
}

export type IPostNew = Omit<IPost, "id" | "likes">;

export interface IPostContext {

  newPost: IPostNew | null;
  addNewPost: (formData: IPostNew) => Promise<void>;
  posts: IPost[];
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
  eddidPost: (formData: IPostNew, postId: number) => Promise<void>;
  editing: IPost;
  deletePost: (postId: number) => Promise<void>;
  editiPage: (post: IPost) => void;
  creatOpen: boolean;
  setCreatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

