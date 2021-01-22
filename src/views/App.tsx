import React, { ReactElement } from 'react';
import { Box } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';
import Header from './containers/header/Header';
import Footer from './containers/footer/Footer';
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
  return (
    <React.Fragment>
      <GlobalStyle />
      <Box>
        <Header />
        <Listing />
        {/*<Footer />*/}
      </Box>
    </React.Fragment>
  );
};

export default App;
