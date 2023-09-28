import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Post() {
  const [allposts, setAllPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((result) => {
        setAllPosts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // useEffect'i bağımlılık dizisi olarak boş bir diziyle kullanın

  return (
    <div>
      {allposts &&
        allposts.map((post) => {
          return (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <h2>{post.body}</h2>
            </div>
          );
        })}
    </div>
  );
}
