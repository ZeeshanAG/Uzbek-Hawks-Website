import React from 'react';
import './about.css';

const About = () => {
  return (
      <section class="w-1/2 h-1/2 flex flex-col md:flex-row py-20 gap-10">
        <div class= "p-4">
          <h1 className="text-4xl font-bold leading-tight text-white">Welcome to Uzbek Hawks,</h1>
          <h3 className="text-2xl font-bold text-customPink">An Uzbek Community at Hunter.</h3>
        </div>
      </section>
  );
};

export default About;
