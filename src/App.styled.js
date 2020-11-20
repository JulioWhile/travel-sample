import styled from 'styled-components';

import background from './assets/background.jpg';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px 5px;
`;

export const Background = styled.div`
  background-image: url('${background}');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
