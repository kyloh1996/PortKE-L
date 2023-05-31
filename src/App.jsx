import React from 'react';
import styled from 'styled-components';


import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Exp from './components/Exp';
import Extra from './components/Extra';
import Carousel from './components/Carousel';
import About from './components/About';
import Contact from './components/Contact';

const Container = styled.div`
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: black;
background-color:white;
`;
const Links = styled.div`
position: fixed;
display:flex;
flex-direction: column;
gap:1em;
padding: 10px;
background-color: #da4ea2;
border: 3px solid black;
border-radius: 5px;
`;

function App() {
  return (
    <Container>
      <Links>
      <a href="https://github.com/kyloh1996" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/lohke96/" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" alt="linkedin" />
          </a>
      </Links>
      <Navbar />
      <Landing />
      <Exp />
      <Extra />
      <Carousel />
      <About />
      <Contact />
    </Container>
  );
}

export default App;
