import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  background-color: red;
`;

function Navbar() {
  return (
    <Section>
      <h1>testin</h1>
    </Section>
  );
}

export default Navbar;
