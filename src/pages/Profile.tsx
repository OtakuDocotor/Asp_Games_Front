import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Avatar,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { mockUser } from '../mock/users';

const Profile: React.FC = () => {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [userData, setUserData] = useState(mockUser);

  const handleEditClick = () => {
    setOpenEditDialog(true);
  };

  const handleClose = () => {
    setOpenEditDialog(false);
  };

  const handleSave = () => {
    setOpenEditDialog(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth='md'>
      <Box my={4}>
        <Box display='flex' alignItems='center' mb={4}>
          <Avatar
            src={userData.avatarUrl}
            sx={{ width: 100, height: 100, mr: 3 }}
          />
          <Box>
            <Typography variant='h4' component='h1'>
              {userData.name}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {userData.email}
            </Typography>
          </Box>
        </Box>

        <Box mb={4}>
          <Typography variant='h5' gutterBottom>
            Мои данные
          </Typography>
          <Box>
            <Typography>
              <strong>Имя:</strong> {userData.name}
            </Typography>
            <Typography>
              <strong>Email:</strong> {userData.email}
            </Typography>
            <Typography>
              <strong>Роль:</strong> {userData.role}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Button
            variant='contained'
            color='primary'
            sx={{ mr: 2 }}
            onClick={handleEditClick}
          >
            Редактировать профиль
          </Button>
          <Button variant='outlined' color='secondary'>
            Сменить пароль
          </Button>
        </Box>
      </Box>

      <Dialog open={openEditDialog} onClose={handleClose}>
        <DialogTitle>Редактировать профиль</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              minWidth: '400px',
              pt: 2,
            }}
          >
            <TextField
              label='Имя'
              name='name'
              value={userData.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label='Email'
              name='email'
              value={userData.email}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label='URL аватара'
              name='avatarUrl'
              value={userData.avatarUrl}
              onChange={handleChange}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleSave} variant='contained' color='primary'>
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Profile;
