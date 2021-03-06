export default function Post({ post, setPosts, index, posts}) {
  // console.log(onDelete())
  function deleteHandler() {
     setPosts(  posts.filter((elem, id) => index !== id ))
  }
  let val, valEdit;
  function okDo() {
    if ((valEdit === undefined)&& (post.editMode === true)) {
      valEdit = post.content
    }
    post.editMode ? (posts[index].content = valEdit) : (posts[index].content=post.content)
    post.editMode = post.editMode ? false : true
    setPosts(posts.map(post => post))
  }
  function cancel() {
    if ((valEdit === undefined)&& (post.editMode === true)) {
      val = post.content
    }
    posts[index].content = val
    post.editMode = false
    setPosts(posts.map(post => post))
  }
  function text(event) {
    val = post.content
    valEdit = event.target.value
  }
  return (
    <li>
      {post.editMode ? (
        <input type='text' defaultValue={post.content} onChange={text} />
      ) : (
        post.content
      )}
      <button onClick={post.editMode ? (okDo) : (deleteHandler)}>{post.editMode ? 'ok' : 'delete'}</button>
      <button onClick={post.editMode ? (cancel) : (okDo)}>{post.editMode ? 'cancel' : 'edit'}</button>
    </li>
  )
}