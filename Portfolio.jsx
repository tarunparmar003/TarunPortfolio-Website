import React from 'react';

import atmsimulator from "../assets/atmsimulator.png";
import razorpay from "../assets/razorpay.png";
import passwordgen from "../assets/passwordgen.png";
import Taxcalculator from "../assets/Taxcalculator.png";

const Portfolio = () => {
  const projects = [
    { title: 'ATM Simulator', description: 'A Java-based ATM Simulator...', image: atmsimulator, link: 'https://github.com/tarunparmar003/ATM_SIMULATOR' },
    { title: 'RazorPay Clone', description: 'A Razorpay clone built with HTML...', image: razorpay, link: 'https://github.com/tarunparmar003/RazorpayClone-' },
    { title: 'Password Generator', description: 'A responsive Password Generator...', image: passwordgen, link: 'https://github.com/tarunparmar003/Password-Generator' },
    { title: 'Tax Calculator', description: '', image: Taxcalculator, link: 'https://github.com/tarunparmar003/Tax-Calculator' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto sm:w-12/12 animate__animated animate__fadeIn delay2 text-center md:w-12/12 col-centered">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ease-in duration-300">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-200 p-4 rounded-lg transform transition duration-300 hover:scale-105">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
                <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
