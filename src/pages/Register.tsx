import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      navigate('/profile');
    } else {
      setError('Заполните все поля');
    }
  };

  return (
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Регистрация
        </Typography>
        {error && (
          <Typography color='error' gutterBottom>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label='Имя'
            fullWidth
            margin='normal'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            Зарегистрироваться
          </Button>
        </form>
        <Typography sx={{ mt: 2 }}>
          Уже есть аккаунт?{' '}
          <Button component='a' href='/login' color='primary'>
            Войти
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
