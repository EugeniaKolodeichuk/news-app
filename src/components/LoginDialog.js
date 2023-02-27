import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUserNameAction } from '../redux/reducers/userReducer';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const USER_NAME = 'admin';
const PASSWORD = '12345';
const fakeInputStyle = { opacity: 0, float: 'left', border: 'none', height: '0', width: '0' };

const LoginDialog = ({ open }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const onLogin = () => {
    if (userName === USER_NAME && password === PASSWORD) {
      localStorage.setItem('isLoggedIn', true);
      dispatch(addUserNameAction(userName));
      navigate('/profile');
    }
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
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
  );
};

export default LoginDialog;
