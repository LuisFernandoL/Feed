import { createContext, useState } from "react";
import { api } from "../../../Services/api";
import { IUserContext, IUserProviderProps, IUser, IUserRegisterResponse, IUserLoginResponse } from "./@types";
import { useNavigate } from "react-router-dom"
import { TRegisterForm } from "../../../Pages/Register/registerFormSchema";
import { toast } from "react-toastify";
import { TLoginForm } from "../../../Pages/Login/loginFormSchema";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({children}: IUserProviderProps) => {
    const [userLogged, setUserLogged] = useState<IUser | null>(null);
    const navigate = useNavigate()

    const userRegister = async (formData: TRegisterForm) => {
        try {
            const { data } = await api.post<IUserRegisterResponse>("/users", formData);
            console.log(data);
            toast.success('Cadastro realizado com sucesso!');
            navigate("/")
        } catch (error) {
            console.log(error);
            toast.error("Ops! Algo deu errado");
        }
    }
    const userLogin = async (formData: TLoginForm) => {
        try {
            const { data } = await api.post<IUserLoginResponse>("/login", formData);
            setUserLogged(data.user);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", JSON.stringify(data.user.id));
            toast.success('Login realizado com sucesso!');
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
            toast.error("Ops! Algo deu errado");
        }
    }

    const userLogout = () => {
        setUserLogged(null);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        setUserLogged(null)
        navigate("/home")
    }

    return(
        <UserContext.Provider value={{ userLogged, userRegister, userLogin, userLogout }}>
            {children}
        </UserContext.Provider>
    )
}