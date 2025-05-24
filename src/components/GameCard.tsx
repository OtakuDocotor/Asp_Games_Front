import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import type { Game } from '../mock/games';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component='img'
        height='200'
        image={game.imageUrl}
        alt={game.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h5' component='div'>
          {game.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {game.developer}
        </Typography>
        <Box display='flex' alignItems='center' my={1}>
          <Rating value={game.rating} precision={0.1} readOnly />
          <Typography ml={1}>{game.rating}</Typography>
        </Box>
        <Typography variant='body2' paragraph>
          {game.description}
        </Typography>
      </CardContent>
      <Button
        component={Link}
        to={`/games/${game.id}`}
        size='small'
        color='primary'
        sx={{ mb: 1 }}
      >
        Подробнее
      </Button>
    </Card>
  );
};

export default GameCard;
