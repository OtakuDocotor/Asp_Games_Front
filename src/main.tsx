import React from 'react';
import { Box, Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';
import Reviews from './pages/Reviews';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

const Main = () => {
  console.log('Main rendered');
  return (
    <Box component='main' sx={{ flexGrow: 1, py: 3 }}>
      <Container maxWidth='lg'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Games />} />
          <Route path='/games/:id' element={<GameDetail />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default Main;
