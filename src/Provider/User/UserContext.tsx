import { createContext, useEffect, useState } from "react";
import { api } from "../../Services/api";
import { IUserContext, IUserProviderProps, IUser, IUserRegisterResponse, IUserLoginResponse } from "./@types";
import { useLocation, useNavigate } from "react-router-dom";
import { TRegisterForm } from "../../Pages/Register/registerFormSchema";
import { toast } from "react-toastify";
import { TLoginForm } from "../../Pages/Login/loginFormSchema";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [userLogged, setUserLogged] = useState<IUser | null>(null);
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    const userId = localStorage.getItem("@USERID")
    if(token){
    const loadUser = async () => {

            try {
              const { data } = await api.get(`/users/${userId}`, {
                    headers: {
                    Authorization: `Bearer ${token}`,
                    },
                });
        
                setUserLogged(data)
                console.log(data)
                navigate("/dashboard")
            } catch (error) {
                console.log(error)
                
            }
        }
        loadUser()
    }
}, [])

const access = () =>{
userLogged ? navigate("/dashboard") : navigate("/")

}
  const userRegister = async (formData: TRegisterForm) => {
    try {
      const { data } = await api.post<IUserRegisterResponse>(
        "/users",
        formData
      );
      console.log(data);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };
  const userLogin = async (formData: TLoginForm) => {
    try {
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      setUserLogged(data.user);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };


    const userLogout = () => {
     
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        setUserLogged(null)
        navigate("/home")
    }

  return (
    <UserContext.Provider
      value={{ userLogged, userRegister, userLogin, userLogout, access }}
    >
      {children}
    </UserContext.Provider>
  );
};
