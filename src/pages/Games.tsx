import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import GameCard from '../components/GameCard';
import { mockGames } from '../mock/games';

const Games: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <Box my={4}>
        <Typography variant='h3' component='h1' gutterBottom>
          Все игры
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'center',
          }}
        >
          {mockGames.map((game) => (
            <Box
              key={game.id}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'calc(50% - 16px)',
                  md: 'calc(33.33% - 22px)',
                },
                minWidth: 250,
              }}
            >
              <GameCard game={game} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Games;
