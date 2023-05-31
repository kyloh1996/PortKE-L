import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
  height: 20vh;
  scroll-snap-align: center;
 
  `;

  const Container = styled.div`
  `;

  const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  display flex;
  justify-content: center;
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
      <Title> Experiance ... This will be taken down once the icons for front and backend are placed and boxed in </Title>
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