import React from 'react';

const Hero = () => {
  const handleScroll = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Tarun Parmar</h1>
        <p className="text-lg md:text-2xl mt-4">A Passionate Developer</p>
        <button
          onClick={handleScroll}
          className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg"
        >
          View Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
