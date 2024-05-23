import { useLoaderData } from "react-router-dom";

function PostDetailPage() {
  const post = useLoaderData();  
  
  return (
    <div>
        <h1>PostDetailPage</h1>

        <h2>{post.title}</h2>
        <div>{post.body}</div>
    </div>
  );
}

export default PostDetailPage;