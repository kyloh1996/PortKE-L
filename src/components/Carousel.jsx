import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  background-color: pink;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
  flex-wrap: wrap;
  max-width: 800px; 
  margin: 0 auto; 
`;

const Button = styled.div`
  height: 20em;
  width: 15em;
  border: 2px solid black;
  cursor: pointer;
  padding: 15px;
`;

function Carousel() {
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
        <CarouselCont>
          <Button onClick={() => handleClick('Project1')}>Project1</Button>
          <Button onClick={() => handleClick('Project2')}>Project2</Button>
          <Button onClick={() => handleClick('Project3')}>Project3</Button>
          <Button onClick={() => handleClick('Project4')}>Project4</Button>
        </CarouselCont>
      </Container>
    </Section>
  );
}

export default Carousel;
