import React from 'react';
import { Link } from 'react-router-dom';

const NavigationHandler = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  );
};

export default NavigationHandler;