import React, { ReactElement } from 'react';
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
import ProductCard from '../../../components/productCard/index';

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
              <Typography className={classes.heading}>Sizes</Typography>
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
      </Box>
    );
  };

  const renderCards = (): ReactElement => {
    return (
      <Box>
        <Box>
          <ProductCard
            name={'Nike Blue Shoes'}
            priceText={'34,99$'}
            photoUrl={
              'https://images.unsplash.com/photo-1578116922645-3976907a7671?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
            }
            color={'Blue'}
            size={'L'}
          />
        </Box>
      </Box>
    );
  };

  return (
    <Box py="3em" px="1em">
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="top"
        justifyContent="center"
      >
        <Box width={1 / 4} mr="3em" mb="2em">
          <Box>{renderFilters()}</Box>
        </Box>
        <Box width={3 / 4}>
          <Box>{renderCards()}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Listing;
