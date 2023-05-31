import React from 'react'
import styled from "styled-components";


const Section = styled.div`

background-color:red;
`;

const Navbar = () =>{

    const handleClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        console.log(`Button clicked: ${sectionId}`)
      };
      

    
    return(
    <Section>
    <nav>
        <div id="navbar-list">
          <button className="btn" onClick={() => handleClick('Home')}>Home</button>
          <button className="btn" onClick={() => handleClick('About')}>About</button>
          <button className="btn" onClick={() => handleClick('Projects')}>Projects</button>
          <button className="btn" onClick={() => handleClick('Contact')}>Contact</button>
        </div>
      </nav>
    </Section>
    );
  };
export default Navbar;