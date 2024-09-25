import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let [posts,setpost]=useState([]);
  let [isloading,setloading]=useState(true);

  useEffect(function(){
    let fetchdata=async()=>{
      let response= await fetch('https://jsonplaceholder.typicode.com/posts');
      let data= await response.json();
      setpost(data);
      setloading(false);
    }

    fetchdata();
  }, [])
  return (
    <>
    <h1>Blog post</h1>
    {isloading?(<p>loading...</p>):(
      <ul>
        {posts.map(post=>(<li >{post.title}</li>))}
      </ul>
    )}
    

    
    
    </>
  );
}

export default App;
