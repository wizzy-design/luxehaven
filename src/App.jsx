// import { useState } from 'react'
import styled from "styled-components";
// Assets & Components
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyles";
import Nav from "../src/components/Nav";

function App() {
  return (
    <Wrap>
      <GlobalStyle />
      <Nav />
      <HomePage />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
`;

export default App;
