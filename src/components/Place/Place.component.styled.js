import styled from 'styled-components';

export const PlaceElement = styled.div`
  padding: 10px 0px;

  & > input {
    margin: 0 10px 0 0;
    cursor: pointer;
  }

  & > label {
    font-size: 1.25em;
    cursor: pointer;
    user-select: none;
  }
`;
