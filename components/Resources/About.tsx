'use client';
import React from 'react';
import Characteristics from './Characteristics';
import Hero from '@/components/hero';
import ServiceInfo from '../about/serviceInfo';
import Slogan from '../slogan';
import img from '@/assets/images/about.jpg';

const About = () => {
  return (
    <div>
      <Hero
        title="About Zahads"
        description="Our mission is to provide value addition while You can focus 100% on running Your businesses."
        img={img.src}
      />
      <Characteristics />
      <ServiceInfo />
      <Slogan />
    </div>
  );
};

export default About;
