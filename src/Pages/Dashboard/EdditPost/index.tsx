import { useContext } from "react";
import { PostContext } from "../../../Components/Provider/PostContext";
import { useForm } from "react-hook-form";
import {  IPostNew } from "../../../Components/Provider/User/@types";

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
    <div>
      
      <form onSubmit={handleSubmit(submit)}>
        <button>Voltar</button>
        <h1>Editando:</h1>
        <label>Título</label>
        <input type="text" {...register("title")} />
        <label>Imagem em destaque</label>
        <input type="text" {...register("image")} />
        <label>Conteúdo</label>
        <textarea {...register("description")}></textarea>
        <button type="submit">Criar post</button>
      </form>
    </div>
  );
};
