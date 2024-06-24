import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function Posts() {
  const { data: posts = [] } = useQuery<AxiosResponse<Post[]>, string, Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get(endpoint),
    select: (response) => response.data,
  });

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>
          [{post.id}]{post.title}
        </li>
      ))}
    </ol>
  );
}

export default Posts;
