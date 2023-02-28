import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NavigationItem = ({ route, title, onClick }) => {
  const { t } = useTranslation();
  return (
    <Button
      component={NavLink}
      style={{
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: 'white',
        display: 'block',
        padding: '8px 6px',
      }}
      to={route}
      onClick={onClick}
    >
      {t(`${title}`)}
    </Button>
  );
};

export default NavigationItem;
