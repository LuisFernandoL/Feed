import { SubmitHandler, useForm } from "react-hook-form";
import { loginFormSchema, TLoginForm } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../Components/Provider/User/UserContext";
import { Input } from "../../Components/Input";
import { LoginStyle } from "./style";
import LoginImg from "../../assets/loginimg.svg";

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
    <LoginStyle>
      <div>
        <img src={LoginImg} alt="" />
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <h1>Acesse o KenzieFeed</h1>
        <p>Preencha os campos corretamente para fazer login</p>

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

        <button type="submit">Entrar</button>
        <p>Não é cadastrado?</p>
        <button>Cadastre-se</button>
      </form>
    </LoginStyle>
  );
};
