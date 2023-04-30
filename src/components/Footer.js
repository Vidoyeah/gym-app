import React from 'react';

import { Box, Stack, Typography } from '@mui/material';
import classes from './Footer.module.css';

import Logo from '../assets/images/Logo-1.png';

function Footer() {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} className={classes.img} alt="Logo" />
        <Typography variant="h5" pb="40px" mt="20px">
          Made by Vidoje
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
