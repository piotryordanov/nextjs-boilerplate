import React from 'react';
import GlobalStyles from './GlobalStyles';
import {Fonts} from './Fonts';

const withLayout = Page => {
  return props => (
    <>
      <Fonts/>
      <GlobalStyles/>
      <Page {...props}/>
    </>
  );
};

export default withLayout;
