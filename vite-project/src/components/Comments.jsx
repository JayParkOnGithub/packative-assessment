import { useEffect, useState } from 'react';

const Comments = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data);
      });
  }, []);

  return (
    <ul key={commentList[0].id}>
      <li>{commentList[0].title}</li>
      <li>{commentList[0].body}</li>
      <li>{commentList[0].userId}</li>
      <li>{commentList[0].comments}</li>
    </ul>
  );
};

export default Comments;
