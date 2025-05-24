import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ReviewCard from '../components/ReviewCard';
import { mockReviews } from '../mock/reviews';

const Home: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <Box my={4}>
        <Typography variant='h3' component='h1' gutterBottom>
          Добро пожаловать в Агрегатор Видеоигр
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          Последние отзывы
        </Typography>
        <Box>
          {mockReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
