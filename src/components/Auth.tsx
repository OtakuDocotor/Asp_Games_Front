import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Alert,
} from '@mui/material';

const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  return (
    <Container
      maxWidth='sm'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant='h4' align='center' gutterBottom sx={{ mb: 3 }}>
          Добро пожаловать
        </Typography>

        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          variant='fullWidth'
          sx={{ mb: 3 }}
        >
          <Tab label='Вход' />
          <Tab label='Регистрация' />
        </Tabs>

        {activeTab === 0 && (
          <Box component='form'>
            <TextField
              label='Email'
              type='email'
              fullWidth
              margin='normal'
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />

            <TextField
              label='Пароль'
              type='password'
              fullWidth
              margin='normal'
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />

            <Button
              type='submit'
              variant='contained'
              fullWidth
              size='large'
              sx={{ mt: 3 }}
            >
              Войти
            </Button>
          </Box>
        )}

        {activeTab === 1 && (
          <Box component='form'>
            <TextField
              label='Имя'
              fullWidth
              margin='normal'
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />

            <TextField
              label='Email'
              type='email'
              fullWidth
              margin='normal'
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />

            <TextField
              label='Пароль'
              type='password'
              fullWidth
              margin='normal'
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />

            <TextField
              label='Подтвердите пароль'
              type='password'
              fullWidth
              margin='normal'
              value={registerData.confirmPassword}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  confirmPassword: e.target.value,
                })
              }
            />

            <Button
              type='submit'
              variant='contained'
              fullWidth
              size='large'
              sx={{ mt: 3 }}
            >
              Зарегистрироваться
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Auth;
