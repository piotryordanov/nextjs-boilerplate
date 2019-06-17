import React from "react";
import { Flex } from "rebass";
import { connect } from "react-redux";
import GoogleFontLoader from "react-google-font-loader";
import { createGlobalStyle } from "styled-components";
import { GlobalStyle } from "./styles";
import { Fonts } from "./Fonts";

import Header from "./Header";

const withLayout = Page => {
  return props => (
    <div>
      <Fonts />
      <GlobalStyle />
      <Header />
      <Page {...props} />
    </div>
  );
};

export default withLayout;
