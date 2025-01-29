import React from 'react';
import Introduction from '../Components/Introduction';
import Education from '../Components/Education';
// import HeroSection from '../Components/HeroSection';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';
import AboutUs from '../Components/AboutUs';








const Home = () => {
  return (
    <div>
      <Introduction></Introduction>
       <AboutUs></AboutUs>
       <Projects></Projects>
        <Skills></Skills>
  
      <Education></Education>
      {/* <HeroSection></HeroSection> */}
       <Contact></Contact>
      
    </div>
  );
};

export default Home;