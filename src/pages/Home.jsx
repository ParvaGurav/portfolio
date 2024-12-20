import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience/>
      <Projects />
    </div>
  );
};

export default Home;
