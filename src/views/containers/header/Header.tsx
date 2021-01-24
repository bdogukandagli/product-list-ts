import React, { ReactElement, useState, Dispatch, SetStateAction } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IProduct } from '../../../utils/interfaces';
import ShoppingCartModal from '../../../components/shoppingCartModal/index';

interface IPropTypes {
  cartProducts: IProduct[];
  setCartProducts: Dispatch<SetStateAction<any>>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '7px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.3)',
  },
  iconWrapper: {
    cursor: 'pointer',
  },
}));

const Header = (props: IPropTypes): ReactElement => {
  const classes = useStyles();
  const [isModalActive, setModalActive] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      px="2em"
      minHeight="4em"
      bgcolor="lightGray"
      className={classes.root}
    >
      <Box>Logo</Box>
      <Box
        className={classes.iconWrapper}
        display="flex"
        onClick={() => setModalActive(true)}
      >
        <ShoppingCartIcon />
        <Box>
          <Typography variant="h6" color="textSecondary">
            {props.cartProducts.length}
          </Typography>
        </Box>
        <ShoppingCartModal
          isActive={isModalActive}
          setActive={setModalActive}
          cartProducts={props.cartProducts}
          setCartProducts={props.setCartProducts}
        />
      </Box>
    </Box>
  );
};

export default Header;
