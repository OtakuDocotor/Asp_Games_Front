import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <Button color='inherit' component={Link} to='/'>
            Агрегатор Видеоигр
          </Button>
        </Typography>
        <Box>
          <Button color='inherit' component={Link} to='/games'>
            Игры
          </Button>
          <Button color='inherit' component={Link} to='/reviews'>
            Отзывы
          </Button>
          <Button color='inherit' component={Link} to='/profile'>
            Профиль
          </Button>
          <Button color='inherit' component={Link} to='/login'>
            Вход
          </Button>
          <Button color='inherit' component={Link} to='/register'>
            Регистрация
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
