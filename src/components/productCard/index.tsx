import React, { ReactElement } from 'react';
import { Box, Avatar, Typography, Button, makeStyles } from '@material-ui/core';

interface IPropTypes {
  name: string;
  photoUrl: string;
  priceText: string;
  size: string;
  color: string;
}

const useStyles = makeStyles(() => ({
  wrapper: {
    borderRadius: '7px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.3)',
  },
  avatar: {
    width: '100%',
    minHeight: '130px',
    objectFit: 'cover',
    borderRadius: '7px 7px 0px 0px',
  },
}));

const ProductCard = (props: IPropTypes): ReactElement => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className={classes.wrapper}
      width={1}
      maxWidth="270px"
      pb="2em"
    >
      <Box>
        <Avatar variant="square" src={props.photoUrl} className={classes.avatar} />
      </Box>
      <Box mt="1em">
        <Typography>{props.name}</Typography>
      </Box>
      <Box mt="0.2em">
        <Typography color="textSecondary">{`${props.color} / ${props.size}`}</Typography>
      </Box>
      <Box mt="1em">
        <Typography variant="h6">{props.priceText}</Typography>
      </Box>
      <Box mt="1em">
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
