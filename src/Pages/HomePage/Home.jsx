import React from 'react';
import Banner from './Banner';
import Skill from './Skill';
import About from './About';
import Work from './Work';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
              <Banner></Banner>
                <Skill></Skill>
                <About></About>
                <Work></Work>
                <Contact></Contact>
        </div>
    );
};

export default Home;