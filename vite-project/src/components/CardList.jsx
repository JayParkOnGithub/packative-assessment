import { Box, Card, Modal, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const CardList = () => {
  const [cardListData, setCardListData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setCardListData(data);
      });

    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data);
      });
  }, []);

  const handleOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {cardListData.map((card) => {
        return (
          <Box sx={{ minWidth: 275 }} key={card.id}>
            <Card
              userid={card.userId}
              title={card.title}
              body={card.body}
              onClick={handleOpen}
              variant='outlined'
            >
              <Typography variant='h3' component='div'>
                {card.title}
              </Typography>
              <body>{card.body}</body>
              <footer>{card.userid}</footer>
            </Card>
          </Box>
        );
      })}
      <Modal open={modalOpen} onClose={handleClose}>
        <Box sx={style}>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {commentList.map((e) => {
              return (
                <ul key={e.id}>
                  <li>{e.body}</li>
                  <li>{e.name}</li>
                  <li>{e.email}</li>
                </ul>
              );
            })}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CardList;
