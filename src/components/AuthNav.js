import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserNameAction } from '../redux/reducers/userReducer';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
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

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onLogin = () => {
    if (userName === USER_NAME && password === PASSWORD) {
      localStorage.setItem('isLoggedIn', true);
      dispatch(addUserNameAction(userName));

      navigate('/profile');
      toast.success(`${t('correctLogIn')}`);
    } else {
      setPassword('');
      setUserName('');
      navigate('/');
      toast.error(`${t('errorLogIn')}`);
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
              color="success"
              variant="standard"
              value={userName}
              InputLabelProps={{
                style: {
                  color: '#336600',
                },
              }}
              onChange={({ target }) => {
                setUserName(target.value);
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
              color="success"
              InputLabelProps={{
                style: {
                  color: '#336600',
                },
              }}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: '#336600' }} onClick={handleClose}>
            {t('cancel')}
          </Button>
          <Button sx={{ color: '#336600' }} onClick={onLogin}>
            {t('login')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AuthNav;
