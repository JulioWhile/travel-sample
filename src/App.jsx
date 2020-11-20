import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Background, Container } from './App.styled';
import Routes from './components/Routes';

function App() {
  return (
    <BrowserRouter>
      <Background>
        <Container>
          <Routes />
        </Container>
      </Background>
    </BrowserRouter>
  );
}

export default App;
