import { useEffect, useState } from 'react';
import Card from './Card';

const CardList = () => {
  const [cardListData, setCardListData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardListData(data);
      });
  }, []);

  return (
    <div>
      {cardListData.map((card) => {
        return (
          <Card
            key={card.id}
            userId={card.userId}
            title={card.title}
            body={card.body}
          />
        );
      })}
    </div>
  );
};

export default CardList;
