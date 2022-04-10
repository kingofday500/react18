import Link from "next/link";

const Posts = (props) => {
  console.log(props);
  return (
    <div className="home">
      <h1>This is Home</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id} id={post.id}>
            <Link href="/articles/[id]">{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
export async function getServerSideProps() {
  let data = await getPosts();
  return {
    props: {
      posts: data,
    },
  };
}
export default Posts;
