import React from 'react';
import { Box, Typography, Container, Avatar, Button } from '@mui/material';
import { mockUser } from '../mock/users';

const Profile: React.FC = () => {
  return (
    <Container maxWidth='md'>
      <Box my={4}>
        <Box display='flex' alignItems='center' mb={4}>
          <Avatar
            src={mockUser.avatarUrl}
            sx={{ width: 100, height: 100, mr: 3 }}
          />
          <Box>
            <Typography variant='h4' component='h1'>
              {mockUser.name}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {mockUser.email}
            </Typography>
          </Box>
        </Box>

        <Box mb={4}>
          <Typography variant='h5' gutterBottom>
            Мои данные
          </Typography>
          <Box>
            <Typography>
              <strong>Имя:</strong> {mockUser.name}
            </Typography>
            <Typography>
              <strong>Email:</strong> {mockUser.email}
            </Typography>
            <Typography>
              <strong>Роль:</strong> {mockUser.role}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Button variant='contained' color='primary' sx={{ mr: 2 }}>
            Редактировать профиль
          </Button>
          <Button variant='outlined' color='secondary'>
            Сменить пароль
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
