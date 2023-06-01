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
background: linear-gradient(to right, #d2ffff , #0694c6);

`;
const Links = styled.div`
position: fixed;
display:flex;
flex-direction: column;
gap:1em;
padding: 10px;
background-color: #B4F8C8;
border: 1px solid black;
border-radius: 5px;
top: 25em;
`;
const Return = styled.div`
height:1em;
width:1em;
position:fixed;

`;
const Button = styled.div`
position: fixed;
  bottom: 2em;
  right: 2em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-image: url("./Images/home.jpeg");
  background-size: cover;
  background-position: center;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;


function App() {
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(`Button clicked: ${sectionId}`);
  };

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
      <section id="home">
      <Navbar />
        <Landing />
        </section>
        <Exp />
        <Extra />
      <section id="projects">
        <Carousel />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Return>
        <Button onClick={() => handleClick('home')}></Button>
      </Return>
    </Container>
  );
}

export default App;
