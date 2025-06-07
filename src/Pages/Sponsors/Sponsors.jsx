import React from 'react';
import Heading from '../../Components/Heading/Heading';
const sponsors = [
  '/src/assets/verbwire.png',
  '/src/assets/streamyard.png',
  '/src/assets/filecoin.png',
  '/src/assets/solana.png',
  '/src/assets/digitalocean.png',
  '/src/assets/polygon.png',
    '/src/assets/tezos.png',
     '/src/assets/replit.png',
    '/src/assets/innovation.png',
       '/src/assets/qburst.png',
         '/src/assets/experion.png',
         '/src/assets/devfolio.png',
         '/src/assets/keyvalue.png',
         '/src/assets/beingabroad.png',
        '/src/assets/acceleratex.png',
       '/src/assets/ieee.png',
];

const Sponsors = () => {
  return (
    <section className="bg-[#101111] py-12 px-4 " id='sponsors'>
    <Heading heading="previous SPONSORS"/>
    <div className="max-w-5xl mx-auto border border-[#A50C20] rounded-xl p-10 relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center max-w-6xl mx-auto">
        {sponsors.map((logo, index) => (
          <div
            key={index}
            className="p-4 bg--50 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex justify-center items-center"
          >
            <img
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="h-20 object-contain"
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Sponsors;
