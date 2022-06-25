export default function Post({ post, setPosts, index, posts}) {
  // console.log(onDelete())
  function deleteHandler() {
    setPosts(posts.filter((elem, id)=>{index==id}))
  }
  return (
    <li>
      {post.editMode ? (
        <input/>
      ) : (
        post.content
      )}
      <button onClick={deleteHandler}>{post.editMode ? 'ok' : 'delete'}</button>
      <button>{post.editMode ? 'cancel' : 'edit'}</button>
    </li>
  )
}