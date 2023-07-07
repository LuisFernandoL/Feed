import { useContext } from "react";
import { PostContext } from "../../../Provider/PostContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPostNew } from "../../../Provider/User/@types";
import { StyledContainer } from "../../../Styles/grid";
import { StyleEdditPostMain, StyleLink } from "./StyleEdditPost";
import { Footer } from "../../../Components/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Header } from "../../../Components/Header";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaFormModal } from "../ModalNewPost/FormModalCreat/SchemaFormModal";
import { InputEdit } from "./InputEdit/InputEdit";
import { TextAreaEdit } from "./InputEdit/TextAreaEdit/TextAreaEdit";

export const EdditPostPage = () => {
  const { editing, eddidPost } = useContext(PostContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IPostNew>({
    defaultValues: {
      title: editing?.title,
      image: editing?.image,
      description: editing?.description,
    },
    resolver: zodResolver(SchemaFormModal),
  });

  const submit: SubmitHandler<IPostNew> = (formData) => {
    eddidPost(formData, editing.id);
  };

  return (
    <>
      <Header />
      <StyleEdditPostMain>
        <StyledContainer className="divMainEddit">
          <span>
            <h1>Editando:</h1>
            <StyleLink to="/dashboard">
              <AiOutlineArrowLeft size={18} />
              Voltar
            </StyleLink>
          </span>
          <form onSubmit={handleSubmit(submit)}>
            <label>Título</label>
            <InputEdit
              type="text"
              error={errors.title?.message}
              {...register("title")}
            />
            <label>Imagem em destaque</label>
            <InputEdit
              type="text"
              error={errors.image?.message}
              {...register("image")}
            />
            <label>Conteúdo</label>
            <TextAreaEdit
              error={errors.description?.message}
              {...register("description")}
            ></TextAreaEdit>
            <div className="divButtonEddit">
              <button type="submit">Salvar post</button>
            </div>
          </form>
        </StyledContainer>
      </StyleEdditPostMain>
      <Footer />
    </>
  );
};
