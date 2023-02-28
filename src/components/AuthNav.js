import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserNameAction } from '../redux/reducers/userReducer';
import {
  Box,
  IconButton,
  Tooltip,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  TextField,
} from '@mui/material';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

const USER_NAME = 'admin';
const PASSWORD = '12345';
const fakeInputStyle = { opacity: 0, float: 'left', border: 'none', height: '0', width: '0' };

const AuthNav = () => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onLogin = () => {
    if (userName === USER_NAME && password === PASSWORD) {
      localStorage.setItem('isLoggedIn', true);
      dispatch(addUserNameAction(userName));
      toast.success('Successful log in');
      navigate('/profile');
    } else {
      navigate('/');
      toast.error('Please correct your login or password to log in');
    }
    handleClose();
  };

  return (
    <>
      <Box sx={{ flexGrow: 0, pl: 5 }}>
        <Tooltip title={t('login')}>
          <IconButton key={uuidv4()} variant="outlined" onClick={handleClickOpen}>
            <LoginTwoToneIcon sx={{ p: 0, m: 0, color: 'white' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t('login')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('dialogContent')}</DialogContentText>
          <form>
            <input
              type="password"
              name="fake-password"
              autoComplete="new-password"
              tabIndex="-1"
              style={fakeInputStyle}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label={t('nameField')}
              type="name"
              fullWidth
              variant="standard"
              value={userName}
              onChange={event => {
                setUserName(event.target.value);
              }}
            />
            <TextField
              margin="dense"
              id="password"
              label={t('passwordField')}
              type="password"
              fullWidth
              variant="standard"
              value={password}
              onChange={event => {
                setPassword(event.target.value);
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('cancel')}</Button>
          <Button onClick={onLogin}>{t('login')}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AuthNav;
