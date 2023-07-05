import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormSchema, TLoginForm } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../Components/Provider/User/UserContext";
import { Input } from "../../Components/Input";
import LoginImg from "../../assets/loginimg.svg";
import { StyledContainer } from "../../Styles/grid";

import { Link } from "react-router-dom";
import { LoginStyle } from "./style";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<TLoginForm> = (formData) => {
    userLogin(formData);
  };

  return (
    <>
      <Header />
      <LoginStyle>
        <StyledContainer className="divInterna">
          <div className="div__img">
            <img src={LoginImg} alt="" />
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <h1>Acesse o KenzieFeed</h1>
              <p>Preencha os campos corretamente para fazer login</p>
            </div>
            <div>
              <Input
                type="email"
                placeholder="E-mail"
                error={errors.email}
                {...register("email")}
              />
              <Input
                type="password"
                placeholder="Senha"
                error={errors.password}
                {...register("password")}
              />
              <span>
                <button className="btn__enter" type="submit">
                  Entrar
                </button>
              </span>
            </div>
            <div>
              <p>Não é cadastrado?</p>

              <Link to="/users">Cadastre-se</Link>
            </div>
          </form>
        </StyledContainer>
        <Footer/>
      </LoginStyle>
    </>
  );
};
