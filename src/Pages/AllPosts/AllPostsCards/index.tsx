// import { Link } from "react-router-dom"
import { useContext } from "react";
import { TitleThree, TextTwo } from "../../../Styles/typography"
import { IPost } from "../../../Components/Provider/User/@types"
import { PostContext } from "../../../Components/Provider/PostContext";

interface IPostCards{
  post: IPost;
}

export const AllPostsCards = ({post}:IPostCards) => {
  
  const { internalPages } = useContext(PostContext);

  const handleClick = async(id:number)=>{
    await internalPages(id)
  }
  return (
    <div>
      <li>
        <img src={post.image} alt={post.title} />
        <span>
          <TextTwo>{post.owner}</TextTwo>
        </span>
        <TitleThree>{post.title}</TitleThree>
        {/* <Link to={`/posts/${post.id}`}> */}
         <TextTwo>
         <button onClick={()=>handleClick(post.id)}>Leia mais</button>
          </TextTwo>
        {/* </Link> */}
      </li>
    </div>
  )
}
