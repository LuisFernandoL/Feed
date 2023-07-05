import { useForm } from "react-hook-form";
import { IPostNew } from "../../../../Components/Provider/User/@types";
import { useContext } from "react";
import { PostContext } from "../../../../Components/Provider/PostContext";

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
    addNewPost(formData)
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" {...register("title")} />
      <input type="text" {...register("image")} />
      <textarea {...register("description")}></textarea>
      <button type="submit">Salvar post</button>
    </form>
  );
};
