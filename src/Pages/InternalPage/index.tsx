import { useContext } from "react";
import { PostContext } from "../../Components/Provider/PostContext";

import { NewsCard } from "../Home/NewsCard";


export const InternalPage = () => {
  const {posts, postInternal, postLikes, postLikesDelete} = useContext(PostContext);

  console.log(postInternal)
  return(
<>
 
      <div>
        
        <span>{postInternal.owner}</span>
        <h1>{postInternal.title}</h1>
        <img src={postInternal.image} alt={postInternal.title} />
        <span>Seja primeiro a curtir este post</span>
        <p>{postInternal.description}</p>

      </div>
      <h1>Leia também</h1>
  <ul>
      {posts.map(post => 
      <NewsCard key={post.id} post={post}/>)}
  </ul>
</>
  )
}

  