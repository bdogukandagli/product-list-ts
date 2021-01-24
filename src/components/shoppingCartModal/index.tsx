import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box, Modal, Typography, Avatar } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { IProduct } from '../../utils/interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      padding: theme.spacing(2, 4, 3),
    },
    wrapper: {
      borderRadius: '7px',
      boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.3)',
    },
    avatar: {
      objectFit: 'cover',
    },
  })
);

interface IPropTypes {
  cartProducts: IProduct[];
  setActive: Dispatch<SetStateAction<any>>;
  isActive: boolean;
}

const ShoppingCardModal = (props: IPropTypes) => {
  const classes = useStyles();

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    handleTotalPrice();
  }, [props.cartProducts]);

  const handleTotalPrice = () => {
    props.cartProducts.forEach((cp) => {
      setTotalPrice(totalPrice + cp.price);
    });
    return totalPrice;
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={props.isActive}
        onClose={() => props.setActive(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.isActive}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="1em"
            className={classes.paper}
          >
            <Box>
              <Typography variant="h6" color="textSecondary">
                Your Cart
              </Typography>
            </Box>
            <Box className={classes.wrapper} mt="1em">
              {props.cartProducts.length > 0 ? (
                props.cartProducts.map((product) => {
                  return (
                    <Box
                      key={product.id}
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      p="1em"
                    >
                      <Box display="flex" alignItems="center">
                        <Box mr="1em">
                          <Avatar className={classes.avatar} src={product.photoUrl} />
                        </Box>
                        <Box>
                          <Typography>{product.name}</Typography>
                        </Box>
                      </Box>
                      <Box ml="4em">
                        <Typography variant="h6" color="textSecondary">
                          {`${product.price}$`}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })
              ) : (
                <Box p="2em">
                  <Typography>You can check our new products</Typography>
                </Box>
              )}
            </Box>
            {props.cartProducts.length > 0 && (
              <Box mt="1em">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => props.setActive(false)}
                >
                  {`Pay: ${totalPrice.toFixed(2)}$`}
                </Button>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ShoppingCardModal;
