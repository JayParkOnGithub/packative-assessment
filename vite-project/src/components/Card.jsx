import { useState } from 'react';
import Comments from './Comments';

const Card = (card) => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    console.log('something was clicked');
    setModal(!modal);
  };

  return (
    <>
      <div onClick={handleClick}>
        <h1>{card.title}</h1>
        <body>{card.body}</body>
        <footer>{card.userId}</footer>
        {modal ? <Comments /> : null}
      </div>
    </>
  );
};

export default Card;
