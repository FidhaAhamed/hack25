// src/Sponsors.jsx
import React from 'react';

const sponsors = [
  { name: 'Solana', logo: '🟪' },
  { name: 'DigitalOcean', logo: '🟦' },
  { name: 'Polygon', logo: '⬡' },
  { name: 'Tezos', logo: '✝️' },
  { name: 'Replit', logo: '⏹️' },
  { name: 'Filecoin', logo: '💾' },
  // Add more as needed
];

const Sponsors = () => {
  return (
    <section className="bg-black py-12 text-white text-center">
      <h2 className="text-4xl font-bold mb-10 font-mono">PREVIOUS SPONSORS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="text-xl font-semibold">
            <div className="bg-white text-black p-4 rounded-xl w-28 h-28 flex items-center justify-center shadow-lg">
              {sponsor.logo}
            </div>
            <p className="mt-2">{sponsor.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
