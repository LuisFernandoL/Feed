import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormSchema, TRegisterForm } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../Components/Provider/User/UserContext";
import { Input } from "../../Components/Input";
import { BackButton } from "./style";
import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { FormButton, FormContainer, FormGrid } from "./style";
import { Header } from "../../Components/Header";
import { Container } from "../../Styles/global";
import { TextTwo, TitleTwo } from "../../Styles/typography";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(registerFormSchema),
  });

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<TRegisterForm> = (formData) => {
    userRegister(formData);
  };

  //UseFormRegisterReturn<string>

  return (
    <>
      <Header />
      <Container>
        <Link to="/">
          <BackButton variant="secondary" width="112px">
            Voltar
          </BackButton>
        </Link>
      </Container>
      <FormContainer>
        <form onSubmit={handleSubmit(submit)}>
          <TitleTwo>Cadastre um usuário</TitleTwo>
          <TextTwo>Preencha os campos corretamente para fazer login</TextTwo>
          <FormGrid>
            <div>
              <Input
                type="text"
                placeholder="Nome"
                error={errors.name}
                {...register("name")}
              />
              <Input
                type="email"
                placeholder="E-mail"
                error={errors.email}
                {...register("email")}
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Input
                type="password"
                placeholder="Confirmar senha"
                error={errors.confirmPassword}
                {...register("confirmPassword")}
              />
            </div>
          </FormGrid>
          <FormButton variant='primary' type='submit' width="166px">Cadastrar-se</FormButton>
        </form>
      </FormContainer>
      <Footer />
    </>
  );
};
