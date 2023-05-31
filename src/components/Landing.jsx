import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  height: 90vh;
  scroll-snap-align: center;
  background-color: ;
  display:flex;
  `;

  const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }`;


const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;


const Side = styled.h2`
font-size:30px;

`;


function Landing() {
    return (
      <Section>
        <Container>
          <Left>
<Side> for placement</Side>
          </Left>
          <Right>
            <Title>Kyle Lohman</Title>
            <Subtitle>Web Development | Austin, Tx</Subtitle>
          </Right>
        </Container>
      </Section>
    );
  }
  
  export default Landing;