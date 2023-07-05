import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header";
import { api } from "../../Services/api";
import { useEffect, useState } from "react";
import { TextTwo, TitleTwo } from "../../Styles/typography";
import { IPost } from "../../Components/Provider/User/@types";

export const Post = () => {
  const [post, setPost] = useState({} as IPost);
  const { id } = useParams();

  useEffect(() => {
    const getOnePost = async () => {
      const { data } = await api.get(`users/${id}?_embed=likes`);
      setPost(data);
    };
    getOnePost();
  });

  return (
    <>
      <Header />
      <section>
        <TextTwo>{post.owner}</TextTwo>
        <TitleTwo>{post.title}</TitleTwo>
        <img src={post.image} alt="" />
        {/* <span>{post.likes.length > 0 ? "S2 seja o primeiro a curtir esse post" : post.likes +" curtida"}</span> */}
        <article>
          <p>{post.description}</p>
        </article>
      </section>
    </>
  );
};
