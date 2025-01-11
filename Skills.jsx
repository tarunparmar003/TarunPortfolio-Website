import React from 'react';
import html from '../assets/html.png'; 
import react from '../assets/react.png';
import java from '../assets/java.png';
import js from '../assets/java-script.png';
import tailwind from '../assets/tailwind.png';
import css from '../assets/css.png';
import mysql from '../assets/mysql.png';

const Skills = () => {
  const skills = [
    {  bgColor: 'bg-white', bgImage: java },
    {  bgColor: 'bg-yellow-500', bgImage: js },
    {  bgColor: 'bg-blue-700', bgImage: css },
    {  bgColor: 'bg-teal-500', bgImage: tailwind },
    {  bgColor: 'bg-cyan-500', bgImage: react },
    {  bgColor: 'bg-gray-600', bgImage: mysql },
    {  bgColor: 'bg-gray-600', bgImage: html }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-400	">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`w-32 h-32 ${skill.bgColor} shadow-lg rounded-full flex items-center justify-center transform transition-transform duration-300 hover:scale-110 bg-opacity-30 backdrop-blur-lg rotate-infinite`}
              style={skill.bgImage ? { 
                backgroundImage: `url(${skill.bgImage})`, 
                backgroundSize: 'contain', 
                backgroundPosition: 'center' 
              } : {}}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-white font-bold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
