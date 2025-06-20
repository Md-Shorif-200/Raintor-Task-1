import React from 'react';
import Banner from './Banner';
import Skill from './Skill';
import About from './About';
import Work from './Work';

const Home = () => {
    return (
        <div>
              <Banner></Banner>
                <Skill></Skill>
                <About></About>
                <Work></Work>
        </div>
    );
};

export default Home;