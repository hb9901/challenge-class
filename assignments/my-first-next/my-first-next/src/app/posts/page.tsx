type Post = {
  id: number;
  title: string;
};
async function PostsListPage() {
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data;
  }

  const posts = await getPosts();

  console.log(posts);

  return (
    <div>
      <h1>포스트 목록</h1>
      <ol>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
}

export const dynamic = "force-dynamic";

export default PostsListPage;
