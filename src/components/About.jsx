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
  font-size: 32px;
  width:30em;
  `;
  const Button = styled.div`
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: auto;
  margin-right: 120px;
  margin-top: 60px;
  cursor: pointer;
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
<Image>FOR PLACEMENT and to tes</Image>
      </Left>
      <Right>
<Title>About Me</Title>
<SubTitle>Lorem ipsum dolor sit amet, sea te facete deterruisset, sea id quot iusto meliore. Id vis utroque imperdiet, iracundia intellegam at mel. No vel summo reprehendunt. Tation graeco iuvaret id his, an detraxit liberavisse conclusionemque usu.</SubTitle>
<Button onClick={() => handleClick('Resume')}>Resume</Button>
      </Right>
    </Container>
      </Section>
    );
  }
  
  export default About;