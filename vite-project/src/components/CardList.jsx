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
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

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
    <>
      {cardListData.map((card) => {
        return (
          <Box sx={{ maxWidth: 500, mb: 2 }} key={card.id}>
            <Card
              userId={card.userId}
              title={card.title}
              body={card.body}
              onClick={handleOpen}
              variant='outlined'
            >
              <Typography variant='h5' component='div'>
                {card.title}
              </Typography>
              <Typography variant='body1' component='div'>
                {card.body}
              </Typography>
              <Typography variant='caption'>{card.userId}</Typography>
            </Card>
          </Box>
        );
      })}
      <Modal open={modalOpen} onClose={handleClose}>
        <Box sx={style}>
          {commentList.map((e) => {
            return (
              <div key={e.id}>
                <Typography
                  sx={{ fontWeight: 'bold' }}
                  variant='h6'
                  gutterBottom
                >
                  {e.name}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  {e.body}
                </Typography>
                <Typography
                  sx={{ fontStyle: 'oblique' }}
                  variant='caption'
                  gutterBottom
                >
                  {e.email}
                </Typography>
              </div>
            );
          })}
        </Box>
      </Modal>
    </>
  );
};

export default CardList;
