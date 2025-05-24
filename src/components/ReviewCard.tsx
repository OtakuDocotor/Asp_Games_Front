import React from 'react';
import { Card, CardContent, Typography, Rating, Box } from '@mui/material';
import type { Review } from '../mock/reviews';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant='h6'>{review.gameName}</Typography>
        <Box display='flex' alignItems='center' mb={1}>
          <Rating value={review.rating} precision={0.5} readOnly />
          <Typography ml={1}>{review.rating}/5</Typography>
        </Box>
        <Typography variant='body1'>{review.text}</Typography>
        <Typography variant='caption' color='text.secondary'>
          Автор: {review.userName} •{' '}
          {new Date(review.createdAt).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
