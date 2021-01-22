import React, { ReactElement } from 'react';
import { Box } from '@material-ui/core';

const Footer = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="gray"
      width="100%"
      minHeight="2em"
    />
  );
};

export default Footer;
