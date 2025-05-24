import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Rating,
  Divider,
  Button,
} from '@mui/material';
import { mockGames } from '../mock/games';
import { mockReviews } from '../mock/reviews';
import ReviewCard from '../components/ReviewCard';

const GameDetail: React.FC = () => {
  const { id } = useParams();
  const game = mockGames.find((g) => g.id === Number(id));
  const gameReviews = mockReviews.filter((r) => r.gameId === Number(id));

  if (!game) {
    return <div>Игра не найдена</div>;
  }

  return (
    <Container maxWidth='lg'>
      <Box my={4}>
        <Box display='flex' mb={4}>
          <Box mr={4}>
            <img
              src={game.imageUrl}
              alt={game.name}
              style={{ width: 300, height: 400, objectFit: 'cover' }}
            />
          </Box>
          <Box>
            <Typography variant='h3' component='h1' gutterBottom>
              {game.name}
            </Typography>
            <Typography variant='h5' gutterBottom>
              {game.developer}
            </Typography>
            <Box display='flex' alignItems='center' mb={2}>
              <Rating value={game.rating} precision={0.1} readOnly />
              <Typography ml={1} variant='h6'>
                {game.rating}/5
              </Typography>
            </Box>
            <Typography variant='body1' paragraph>
              {game.description}
            </Typography>
            <Typography variant='subtitle1' paragraph>
              Дата выхода: {new Date(game.releaseDate).toLocaleDateString()}
            </Typography>
            <Button variant='contained' color='primary'>
              Оставить отзыв
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant='h4' gutterBottom>
          Отзывы
        </Typography>
        {gameReviews.length > 0 ? (
          gameReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <Typography>Пока нет отзывов</Typography>
        )}
      </Box>
    </Container>
  );
};

export default GameDetail;
