import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import Dashboard from '../components/Dashboard';

const Index = props => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  return <Dashboard {...props}/>;
};

export default Index;
