import React, { ReactElement } from 'react';
import { Box } from '@material-ui/core';

const Header = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      px="2em"
    >
      <Box>Logo</Box>
      <Box>Links</Box>
    </Box>
  );
};

export default Header;
