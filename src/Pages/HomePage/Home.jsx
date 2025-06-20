import React from 'react';
import Banner from './Banner';
import Skill from './Skill';
import About from './About';

const Home = () => {
    return (
        <div>
              <Banner></Banner>
                <Skill></Skill>
                <About></About>
        </div>
    );
};

export default Home;