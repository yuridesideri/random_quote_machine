import React from 'react';
import styled from "styled-components";
import Wrapper from './Wrapper'


const AppComponent = styled.div`
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppComponent className="App">
    <Wrapper />
    </AppComponent>
  );
}

export default App;
