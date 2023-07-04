import { useContext } from "react";
import { PostContext } from "../../../Components/Provider/PostContext";
import { useForm } from "react-hook-form";
import { IPost, IPostNew } from "../../../Components/Provider/User/@types";

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
        <input type="text" {...register("title")} />
        <input type="text" {...register("image")} />
        <textarea {...register("description")}></textarea>
        <button type="submit">Salvar post</button>
      </form>
    </div>
  );
};
