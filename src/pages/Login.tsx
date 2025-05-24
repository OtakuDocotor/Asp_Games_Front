import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      navigate('/profile');
    } else {
      setError('Введите email и пароль');
    }
  };

  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Вход
        </Typography>
        {error && (
          <Typography color='error' gutterBottom>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label='Email'
            type='email'
            fullWidth
            margin='normal'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label='Пароль'
            type='password'
            fullWidth
            margin='normal'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            size='large'
            sx={{ mt: 2 }}
          >
            Войти
          </Button>
        </form>
        <Typography sx={{ mt: 2 }}>
          Нет аккаунта?{' '}
          <Button component='a' href='/register' color='primary'>
            Зарегистрироваться
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
