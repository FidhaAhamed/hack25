// src/Sponsors.jsx

// src/components/Sponsors.jsx

import React from 'react';

const sponsors = [
  '/src/assets/sponsors/verbwire.png',
  '/src/assets/sponsors/streamyard.png',
  '/src/assets/sponsors/filecoin.png',
  '/src/assets/sponsors/solana.png',
  '/src/assets/sponsors/digitalocean.png',
  '/src/assets/sponsors/polygon.png',
    '/src/assets/sponsors/tezos.png',
     '/src/assets/sponsors/replit.png',
    '/src/assets/sponsors/innovation.png',
       '/src/assets/sponsors/qburst.png',
         '/src/assets/sponsors/experion.png',
         '/src/assets/sponsors/devfolio.png',
         '/src/assets/sponsors/keyvalue.png',
         '/src/assets/sponsors/beingabroad.png',
        '/src/assets/sponsors/acceleratex.png',
       '/src/assets/sponsors/ieee.png',
];

const Sponsors = () => {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Sponsors
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center max-w-6xl mx-auto">
        {sponsors.map((logo, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex justify-center items-center"
          >
            <img
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
