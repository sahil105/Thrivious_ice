import React from 'react';
import { makeStyles } from '@mui/styles';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 9999,
  },
  fab: {
    backgroundColor: '#25d366',
    color: '#fff',
    width: '100px',
    height: '48px',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'center',
    borderRadius: '24px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: '#075e54',
      boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.4)',
      transform: 'translateY(-2px)',
    },
  },
  icon: {
    // marginRight: theme.spacing(1),
    fontSize: '24px',
  },
}));

const FloatingWhatsApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="whatsapp"
        className={classes.fab}
        href="https://wa.me/919173251388?text=hi"
        target="_blank"
      >
        <WhatsAppIcon className={classes.icon}  fontSize='large' width="100%"/>
      </Fab>
    </div>
  );
};

export default FloatingWhatsApp;
