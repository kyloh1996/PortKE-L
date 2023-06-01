import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 90vh;
  scroll-snap-align: center;
  background-color: ;
  display: flex;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  max-width: 1400px;
  margin: 0 auto;
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
  margin-bottom: 240px;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 220px;
  text-shadow: 2px 2px 4px #B4F8C8;
`;

const Title = styled.h1`
  font-size: 74px;
  font-weight: 900;
  font-family: 'Zapfino';
  transform: rotate(-15deg);
  width: 1500px;
  margin-left: 0;
  margin-bottom: 1em;
  margin-top: 0;
`;

const Subtitle = styled.h2`
  margin-bottom: 6em;
  margin-left:18em;
`;

const Side = styled.h2`
  font-size: 60px;
`;

function Landing() {
  return (
    <Section>
      <Container>
        <Left>
          <Side>FOR PLACEMENT</Side>
        </Left>
        <Right>
          <Title>Kyle Lohman</Title>
          <Subtitle>Web Development</Subtitle>
        </Right>
      </Container>
    </Section>
  );
}

export default Landing;
