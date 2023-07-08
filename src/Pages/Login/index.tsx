import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormSchema, TLoginForm } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../Provider/User/UserContext";
import { Input } from "../../Components/Input";
import LoginImg from "../../assets/loginimg.svg";
import { StyledContainer } from "../../Styles/grid";
import { Link } from "react-router-dom";
import { LoginStyle } from "./style";
import { Footer } from "../../Components/Footer";
import { TextTwo, TitleTwo } from "../../Styles/typography";
import { Button } from "../../Styles/buttons";
import { Header } from "../../Components/Header";

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
              <TitleTwo>Acesse o KenzieFeed</TitleTwo>
              <TextTwo>
                Preencha os campos corretamente para fazer login
              </TextTwo>
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
                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </span>
            </div>
            <div className="cad__link">
              <p>Não é cadastrado?</p>
              <Link className="link" to="/users">
                Cadastre-se
              </Link>
            </div>
          </form>
        </StyledContainer>
      </LoginStyle>
      <Footer />
    </>
  );
};
