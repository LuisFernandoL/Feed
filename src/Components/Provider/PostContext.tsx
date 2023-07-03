// import { createContext, useState } from "react";
// import { INew, IPostContext, IPosts, IUserProviderProps } from "./User/@types";
// import { api } from "../../Services/api";
// import { toast } from "react-toastify";

// export const PostContext = createContext({} as IPostContext);

// export const NewProvider = ({ children }: IUserProviderProps) => {
//   const [newPost, setNewPost] = useState<INew []>([]);
//   const [posts, setPosts] = useState<IPosts[]>([]);



//   const addNewPost = async (formData: INew) => {
//     try {
//       const { data } = await api.post("/posts", formData);
//       console.log(data);
//       setNewPost([...posts, data])
//       toast.success("Nova postagem feita com sucesso");
//     } catch (error) {
//       toast.error("Ops! Algo deu errado ao fazer a nova postagem");
//     }
//   };
//   return (
//     <PostContext.Provider value={{newPost, addNewPost}}>
//       {children}
//     </PostContext.Provider>
//   );
// };
