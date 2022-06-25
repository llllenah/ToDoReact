import Post from "./Post.js";
export default function PostsList({ posts, setPosts }) {
  function deleteHandler(idToDelete) {
    return () => {
      setPosts(
        posts.filter((elem, id) => {
          return idToDelete !== id;
        })
      );
    };
  }

  return posts.map((post, index) => {
    return <Post key={index} onDelete={deleteHandler(index)} post={post} />;
  });
}
