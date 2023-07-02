import { createContext, useState } from "react";
import { api } from "../../../Services/api";
import { IUserContext, IUserProviderProps, IUser, IUserRegisterResponse, IUserLoginResponse } from "./@types";
import { useNavigate } from "react-router-dom"
import { TRegisterForm } from "../../../Pages/Register/registerFormSchema";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({children}: IUserProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate()

    const userRegister = async (formData: TRegisterForm) => {
        try {
            const { data } = await api.post<IUserRegisterResponse>("/users", formData);
            console.log(data);
            console.log("Cadastro efetuado com sucesso!")
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    const userLogin = async (formData: any) => {
        try {
            const { data } = await api.post<IUserLoginResponse>("/sessions", formData);
            setUser(data.user);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", JSON.stringify(data.user.id));
          
        } catch (error) {
            console.log(error);
        }
    }

    const userLogout = () => {
        setUser(null);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
    }

    return(
        <UserContext.Provider value={{ user, userRegister, userLogin, userLogout }}>
            {children}
        </UserContext.Provider>
    )
}