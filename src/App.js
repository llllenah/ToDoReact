import logo from './logo.svg';
import './App.css';
import PostsList from './Components/PostsList.js';
import { useState } from 'react';

function App() {
  let initialPosts = [{
    content: 'ljhgfds',
    editMode: true,
    coments: ['ddddddd','kjhgfd']
  },
    {
    content: 'poiuygtfrcd',
    editMode: false,
    coments: ['kjhgfdsxza','22222d']},
    {
    content: '333333333cont',
    editMode: false,
    coments: ['33com','lkjhgfd']
  }]
  const [posts, setPosts] = useState(initialPosts)
  const [inputOne, setInputOne] = useState('');
  function adder() {
    posts.push({
    content: inputOne,
    editMode: false
    })
    setPosts(posts.map(post => post))
  }
  return (
    <>
      <center><input onChange={(event) => setInputOne(event.target.value)}/>
        <button onClick={adder}>Add</button>
      </center>
      <br />
      <br/>
      <ol className="App">
        <PostsList posts={ posts } setPosts = { setPosts } /> 
      </ol>
      </>
  );

}


export default App;

