import logo from './logo.svg';
import './App.css';
import PostsList from './Components/PostsList.js';
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState(0)
  let initialPosts = [{
    content: 'kommm',
    comments: ['kom1', 'kom2'],
    editMode: false
}, {
    content: 'eeeeeeeekommm',
    comments : ['vvvvvkom1','kom2'],
    editMode: true
    }, {
    content: 'ol;eeeeeeeekommm',
    comments : ['11111111111vvvvvkom1','kom2'],
    editMode: false 
    }]
  const [posts,setPosts] = useState(initialPosts)
  function clickHandler() {
    setCounter(counter+1)
    console.log(counter)
  } 
  return (
    <>
      <button onClick={clickHandler}>{ counter}</button>
      <ol className="App">
        <PostsList posts={ posts } setPosts = { setPosts } /> 
        
        </ol>
      </>
  );

}


export default App;

