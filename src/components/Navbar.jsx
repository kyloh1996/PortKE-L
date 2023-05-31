import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  padding: 10px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 3em;
`;

const Logo = styled.img`
  height: 5em;
  width: 5em;
`;

const List = styled.ul`
  display: flex;
  gap: 6em;
  list-style: none;
  color:white;
`;

const Button = styled.li`
  cursor: pointer;
`;

const Hire = styled.div`
  margin-left: auto;
`;

const HireButton = styled.button`
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
            <Button onClick={() => handleClick('Home')}>Home</Button>
            <Button onClick={() => handleClick('About')}>About</Button>
            <Button onClick={() => handleClick('Projects')}>Projects</Button>
            <Button onClick={() => handleClick('Contact')}>Contact</Button>
          </List>
        </Links>
        <Hire>
          <HireButton onClick={() => handleClick('Hire')}>Hire Me</HireButton>
        </Hire>
      </Container>
    </Section>
  );
};

export default Navbar;
