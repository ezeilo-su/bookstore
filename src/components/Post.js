import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Post() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      // cleanup
    };
  }, [idFromButtonClick]); // [] => dependency list - allows the callback fn passed
  // to useEffect to run only once on component mount

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch Post</button>
      <ul>
        <li>{post.title}</li>
      </ul>
    </div>
  );
}
