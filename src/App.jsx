import React from 'react';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Exp from './components/Exp';
import Extra from './components/Extra';
import Carousel from './components/Carousel';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Exp />
      <Extra />
      <Carousel />
      <About />
      <Contact />
    </>
  );
}

export default App;
