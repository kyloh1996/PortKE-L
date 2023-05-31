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
`;

const Left = styled.div`
flex: 3;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 160px;
  margin-bottom:240px;
  `;


const Right = styled.div`
flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left:220px;

`;
const Title = styled.h1`
  font-size: 74px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  margin-left:15em;
`;


const Side = styled.h2`
font-size:60px;

`;


function Landing() {
    return (
      <Section>
        <Container>
          <Left>
<Side> FOR PLACEMENT </Side>
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