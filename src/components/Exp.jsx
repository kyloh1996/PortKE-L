import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 20vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
display: flex;
justify-content: center;
gap: 40em;
`;

const Frontend = styled.div`
gap: 1em;
text-decoration: underline;
`;

const Backend = styled.div`
gap:1em;
text-decoration: underline;
`;

const Img = styled.img`
height: 3em;
width:3em;
`;

const P = styled.div`
font-size: 35px;
`;

function Exp() {
  return (
    <Section>
      <Container>
        <Frontend>
          <P>FrontEnd</P>
          <Img src="./prglangimg/css.jpeg" alt="CSS Image" />
          <Img src="./prglangimg/html.jpeg" alt="HTML" />
          <Img src="./prglangimg/javascript.jpeg" alt="JS" />
          <Img src="./prglangimg/react.jpeg" alt="React" />
          <Img src="./prglangimg/ruby.jpeg" alt="Ruby" />

        </Frontend>
        <Backend>
        <P>BackEnd</P>
          <Img src="./prglangimg/postgresql.jpeg" alt="Image 4" />
          <Img src="./prglangimg/rails.jpeg" alt="Image 5" />
        </Backend>
      </Container>
    </Section>
  );
}

export default Exp;
