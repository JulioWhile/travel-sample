import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BlackLink = styled(Link)`
  color: black;
  font-size: 2em;
  text-decoration: none;

  &:hover {
    color: rgba(0, 0, 0, 0.6);
    text-decoration: underline;
  }
`;
