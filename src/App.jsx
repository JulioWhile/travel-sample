import React from 'react';
import { HashRouter } from 'react-router-dom';

import { Background, Container } from './App.styled';
import Routes from './components/Routes';

function App() {
  return (
    <HashRouter>
      <Background>
        <Container>
          <Routes />
        </Container>
      </Background>
    </HashRouter>
  );
}

export default App;
