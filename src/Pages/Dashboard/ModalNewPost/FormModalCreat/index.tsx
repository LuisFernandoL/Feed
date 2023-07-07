import { useForm } from "react-hook-form";
import { IPostNew } from "../../../../Provider/User/@types";
import { useContext } from "react";
import { PostContext } from "../../../../Provider/PostContext";
import { StyleModalCreate } from "./StyleModalCreat";

export const FormModalCreat = () => {
  const { editing, addNewPost } = useContext(PostContext);
  const { handleSubmit, register } = useForm<IPostNew>({
    defaultValues: {
      title: editing?.title,
      image: editing?.image,
      description: editing?.description,
    },
  });

  const submit = (formData: IPostNew) => {
    addNewPost(formData);
  };

  return (
    <StyleModalCreate onSubmit={handleSubmit(submit)}>
      <input 
        placeholder="Título" 
        type="text" 
        {...register("title")} />
      <input
        placeholder="Imagem em destaque"
        type="text"
        {...register("image")}
      />
      <textarea
        placeholder="Conteúdo do post"
        {...register("description")}
      ></textarea>
      <span>
        <button type="submit">Criar post</button>
      </span>
    </StyleModalCreate>
  );
};
