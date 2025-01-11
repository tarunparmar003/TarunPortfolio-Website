import React, { useState } from 'react';
import qr from '../assets/Qrcode.jpeg';
import linkdin from '../assets/linkedin.png';  

const Footer = () => {
  const [showQR, setShowQR] = useState(false);

  const details = [
    { 
      name: 'GitHub', 
      link: 'https://github.com/tarunparmar003', 
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' 
    },
    { 
      name: 'LinkedIn', 
      link: 'https://www.linkedin.com/in/tarunparmar0003/', 
      icon: linkdin  
    }
  ];

  const toggleQR = () => setShowQR(!showQR);

  return (
    <footer className="bg-gray-100 text-black py-10">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">Connect with Me</h3>
        
        <div className="flex justify-center space-x-6">
          {details.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <img src={social.icon} alt={social.name} className="w-8 h-8"/>
              {social.name}
            </a>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-semibold">Support Me</h4>
          <p className="text-sm mt-2">If you'd like to support me, feel free to check out my work or contribute!</p>
          
          <button 
            onClick={toggleQR} 
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition duration-300"
          >
            Show QR Code
          </button>

          {showQR && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-out scale-100 opacity-100">
                <button
                  onClick={toggleQR}
                  className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-800"
                >
                  &times;
                </button>
                <h3 className="text-xl font-semibold text-center mb-4">Scan My QR Code</h3>
                <div className="flex justify-center items-center w-full">
                  <img 
                    src={qr} 
                    alt="QR Code" 
                    className="w-60 h-62" 
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
