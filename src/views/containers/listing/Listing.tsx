import React, { ReactElement, useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
  makeStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Listing = (): ReactElement => {
  const classes = useStyles();

  const renderFilters = (): ReactElement => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="left"
        className={classes.root}
      >
        <Box>
          <Accordion color="gray">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className={classes.heading}>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box>s</Box>
      </Box>
    );
  };

  return (
    <Box>
      <Box display="flex" flexDirection="row" alignItems="top" justifyContent="center">
        <Box width={1 / 4}>
          <Box>{renderFilters()}</Box>
        </Box>
        <Box width={3 / 4}>
          <Box>products</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Listing;
