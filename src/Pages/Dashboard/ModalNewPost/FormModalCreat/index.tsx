import { SubmitHandler, useForm } from "react-hook-form";
import { IPostNew } from "../../../../Provider/User/@types";
import { useContext } from "react";
import { PostContext } from "../../../../Provider/PostContext";
import { StyleModalCreat } from "./StyleModalCreat";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaFormModal } from "./SchemaFormModal";
import { InputEdit } from "../../EdditPost/InputEdit/InputEdit";
import { TextAreaEdit } from "../../EdditPost/InputEdit/TextAreaEdit/TextAreaEdit";

export const FormModalCreat = () => {
  const { addNewPost } = useContext(PostContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IPostNew>({
    resolver: zodResolver(SchemaFormModal),
  });
  const submit: SubmitHandler<IPostNew> = (formData) => {
    addNewPost(formData);
  };
  return (
    <StyleModalCreat onSubmit={handleSubmit(submit)}>
      <InputEdit
        placeholder="Título"
        error={errors.title?.message}
        type="text"
        {...register("title")}
      />
      <InputEdit
        placeholder="Imagem em destaque"
        type="text"
        error={errors.image?.message}
        {...register("image")}
      />
      <TextAreaEdit
        placeholder="Conteúdo do post"
        error={errors.description?.message}
        {...register("description")}
      ></TextAreaEdit>
      <span>
        <button type="submit">Salvar post</button>
      </span>
    </StyleModalCreat>
  );
};
