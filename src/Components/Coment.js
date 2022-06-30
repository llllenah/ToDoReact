export default function Coment({ post, setPosts, index, posts, coments, coment }) {
  function deleteHandler() {
     setPosts(  post.coments.filter((elem, id) => index !== id ))
  }
  return (
    <li><br/>
      {coment}
      <button onClick={deleteHandler}> delete </button>
    </li>
  )
}