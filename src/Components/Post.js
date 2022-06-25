export default function Post({ post, onDelete }) {
  return (
    <li>
      {post.editMode ? <input /> : post.content}
      <button onClick={onDelete}>{post.editMode ? "ok" : "delete"}</button>
      <button>{post.editMode ? "cancel" : "edit"}</button>
    </li>
  );
}
