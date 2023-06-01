import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  max-width: 1800px;
  width: 100%;
  padding: 10px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
`;

const Logo = styled.img`
  height: 8em;
  width: 8em;
`;

const List = styled.ul`
  display: flex;
  gap: 6em;
  list-style: none;
`;

const Button = styled.li`
  cursor: pointer;
  font-size: 1.5em;
  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;

  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;

  &:hover {
    background: rgba(180, 248, 200, 0.4);
    box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
    transition: all 0.2s ease-out;
  }

  &:hover::before {
    animation: sh02 0.5s 0s linear;
  }

  &::before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    transform: skewX(-20deg);
  }

  @keyframes sh02 {
    from {
      opacity: 0;
      left: 0%;
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 0;
      left: 100%;
    }
  }

  &:active {
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 0.2s ease-in;
  }
`;

const Navbar = () => {
  const handleClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(`Button clicked: ${sectionId}`);
  };

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./Images/logo.jpeg" alt="Logo" />
          <List>
            <Button onClick={() => handleClick('about')}>About</Button>
            <Button onClick={() => handleClick('projects')}>Projects</Button>
            <Button onClick={() => handleClick('contact')}>Contact</Button>
          </List>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
