import Post from './Post.js';
export default function PostsList({ posts, setPosts }) {
  return posts.map((post, index) => { 
    return (
      <Post
        post={post}
        setPosts={setPosts}
        key={index}
        index={index}
        posts={posts } />
    )
        })
}