// import { useState } from 'react'
import styled from "styled-components";
// Assets & Components
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/GlobalStyles";
import Fonts from "./fonts/Font";
import Nav from "../src/components/Nav";
import { useRef } from "react";


function App() {
  const introRef = useRef(null);  // Reference to Intro Page

  const handleClick = () => {   // HandleClick scrolls the page to view the reference
    introRef.current.scrollIntoView({
      behaviour: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <Wrap>
      <GlobalStyle />
      <Fonts />
      <Nav handleClick={handleClick}/>
      <HomePage introRef={introRef}/>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
`;

export default App;
