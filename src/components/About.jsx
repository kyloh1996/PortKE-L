import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;


  `;
  const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

  const Left = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
  margin-bottom:240px;
  `;

  const Image = styled.div`
  
  font-size: 60px;
  `;
  const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left:220px;
  gap: 20px;
`;
  const Title = styled.div`
  font-size: 64px;
  `;
  const SubTitle = styled.div`
  font-size: 28px;
  width:30em;
  `;
  const Button = styled.div`
  padding: 10px;
  background-color: #b4f8c8;
  border: none;
  border-radius: 5px;
  margin-left: auto;
  margin-right: 120px;
  margin-top: 60px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(180, 248, 200, 0.4);
  }

  &:hover::before {
    animation: sh02 0.5s 0s linear;
  }

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    background-color: #fff;
    transform: skewX(-20deg);
    transition: left 0.5s ease-in-out;
  }

  @keyframes sh02 {
    from {
      left: -100%;
    }
    to {
      left: 100%;
    }
  }
`;

function About() {

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
      <Left>
<Image>FOR PLACEMENT </Image>
      </Left>
      <Right>
<Title>About Me</Title>
<SubTitle> <p>I'm currently a software engineering student at LEARN Academy with a passion for problem-solving and collaboration. With extensive experience in teamwork, communication, and leadership gained during my time in the military, I bring a unique perspective and skillset to my work.</p>
<p>
As a software engineer, I am fascinated by the power of technology to solve complex problems and improve people's lives. Whether it's building a website or developing an AI application, I love the idea of creating something that can make a difference in the world.</p>
<p>
One of my proudest accomplishments so far has been finding this career field and developing ways to ensure my success. I am constantly seeking new challenges and opportunities to learn and grow, both as an individual and as part of a team.</p>
<p>
What sets me apart from other professionals in my field is my experience working in high-stress situations and my ability to handle complex problems with patience and self-awareness. I believe that the key to success in any endeavor is a strong, cohesive team, and I am committed to fostering a positive, collaborative work environment wherever I go.</p></SubTitle>
<Button onClick={() => handleClick('Resume')}>Resume</Button>
      </Right>
    </Container>
      </Section>
    );
  }
  
  export default About;