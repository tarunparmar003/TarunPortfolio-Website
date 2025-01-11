import React from 'react';
import tarunphoto from '../assets/tarunphoto.jpeg'

const About = () => {
  const myphoto ={
    image:tarunphoto
    
  }
  return (
    <section id="about" className="py-20  text-gray-800 bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">
          I'm a developer with expertise in Cloud Computing, Penetration Testing, and Web Development. I enjoy creating efficient and scalable solutions.
        </p>
        <div className="mt-6">
        <img
  src={myphoto.image}
  alt="tarun"
  className="w-32 h-32 rounded-full mx-auto transition-transform duration-300 ease-out hover:scale-110"
/>

        </div>
      </div>
    </section>
  );
};

export default About;
