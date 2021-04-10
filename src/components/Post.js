import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      // cleanup
    };
  }, []); // [] => dependency list - allows the callback fn passed
  // to useEffect to run only once on component mount

  return (
    <div>
      <ul>
        {
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  );
}
