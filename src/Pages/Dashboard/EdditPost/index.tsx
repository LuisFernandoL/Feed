import { useContext } from "react";
import { PostContext } from "../../../Provider/PostContext";
import { useForm } from "react-hook-form";
import { IPostNew } from "../../../Provider/User/@types";
import { StyledContainer } from "../../../Styles/grid";
import { StyleEdditPostMain } from "./StyleEdditPost";
import { Footer } from "../../../Components/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai"

export const EdditPostPage = () => {
  const { editing, eddidPost } = useContext(PostContext);

  const { handleSubmit, register } = useForm<IPostNew>({
    defaultValues: {
      title: editing?.title,
      image: editing?.image,
      description: editing?.description,
    },
  });

  const submit = (formData: IPostNew) => {
    eddidPost(formData, editing.id);
  };

  return (
    <>
      <StyleEdditPostMain>
        <StyledContainer className="divMainEddit">
          <span>
            <h1>Editando:</h1>
            <button><AiOutlineArrowLeft size={18}/>Voltar</button>
          </span>
          <form onSubmit={handleSubmit(submit)}>
            <label>Título</label>
            <input type="text" {...register("title")} />
            <label>Imagem em destaque</label>
            <input type="text" {...register("image")} />
            <label>Conteúdo</label>
            <textarea {...register("description")}></textarea>
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
