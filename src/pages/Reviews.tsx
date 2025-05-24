import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ReviewCard from '../components/ReviewCard';
import { mockReviews } from '../mock/reviews';

const Reviews: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <Box my={4}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Typography variant='h3' component='h1'>
            Все отзывы
          </Typography>
          <Button
            variant='contained'
            color='primary'
            sx={{ height: 'fit-content' }}
          >
            Добавить отзыв
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          {mockReviews.map((review) => (
            <Box key={review.id}>
              <ReviewCard review={review} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Reviews;
