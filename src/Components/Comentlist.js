import Coment from './Comentlist.js';
export default function Comentlist({ post, setPosts, index, posts, coments }) {
return coments.map((coment, index) => { 
    return (
      <Coment
        post={post}
        setPosts={setPosts}
        key={index}
        index={index}
        posts={posts}
        coments={coments}
        coment={coment}/>
    )
        })
}