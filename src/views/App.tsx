import React, { ReactElement, useState } from 'react';
import { Box } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store';
import Header from './containers/header/Header';
import Listing from './containers/listing/Listing';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const App = (): ReactElement => {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <React.Fragment>
      <React.StrictMode>
        <GlobalStyle />
        <Provider store={store}>
          <Box>
            <Header cartProducts={cartProducts} />
            <Listing cartProducts={cartProducts} setCartProducts={setCartProducts} />
          </Box>
        </Provider>
      </React.StrictMode>
    </React.Fragment>
  );
};

export default App;
