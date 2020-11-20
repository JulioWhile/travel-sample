import React from 'react';
import { Link } from 'react-router-dom';

import { BigHeader } from './NotFound.page.styled';

function NotFound() {
  return (
    <>
      <BigHeader>404 Not Found :(</BigHeader>
      <Link to="/">Go To Home</Link>
    </>
  );
}

export default NotFound;
