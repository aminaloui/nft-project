import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {storyObjOne, roadmapObjOne, teamObjOne} from '../components/InfoSection/Data';
import Team from '../components/Team';
import Footer from '../components/Footer';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
          <HeroSection/>
          <InfoSection {...storyObjOne}/>
          <InfoSection {...roadmapObjOne}/>
          <Team></Team>
          <InfoSection {...teamObjOne}/>
          <Footer/>
        </>
    );
};

export default Home
