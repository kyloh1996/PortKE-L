import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  height: 20vh;
  scroll-snap-align: center;
  background-color: Grey;
  `;

  const Container = styled.div`
  `;

  const Frontend = styled.div`
  `;

  const Backend = styled.div`
  `;

  const Img = styled.div`
  `;

function Exp() {
    return (
      <Section>
    <Container>
      <Frontend>
<Img/>
<Img/>
<Img/>
<Img/>

      </Frontend>
      <Backend>
      <Img/>
<Img/>
<Img/>
<Img/>
      </Backend>
    </Container>
      </Section>
    );
  }
  
  export default Exp;