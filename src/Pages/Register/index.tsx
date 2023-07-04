import { SubmitHandler, useForm } from "react-hook-form";
import { registerFormSchema, TRegisterForm } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../Components/Provider/User/UserContext";
import { Input } from "../../Components/Input";
import { Button } from "../../Styles/buttons";
import { Link } from 'react-router-dom';

export const Register = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TRegisterForm>({
        resolver: zodResolver(registerFormSchema)
    });

    const { userRegister } = useContext(UserContext);

    const submit: SubmitHandler<TRegisterForm> = (formData) => {
        userRegister(formData);
    }

    //UseFormRegisterReturn<string>

    return(
        <form onSubmit={handleSubmit(submit)}>
              <Link  to='/'>
              <Button variant='secondary' width='112px'>Voltar</Button>
              </Link>
          
            <h1>Cadastre um usuário</h1>
            <p>Preencha os campos corretamente para fazer login</p>

            <Input  type="text" placeholder="Nome" error={errors.name} {...register("name")} />
            <Input  type="email" placeholder="E-mail" error={errors.email} {...register("email")} />
            <Input  type="password" placeholder="Senha" error={errors.password} {...register("password")} />
            <Input  type="password" placeholder="Confirmar senha" error={errors.confirmPassword} {...register("confirmPassword")} />
            <button type="submit">Cadastrar-se</button>
        </form>
    )
}