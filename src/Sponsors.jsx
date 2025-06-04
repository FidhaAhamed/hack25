// src/Sponsors.jsx

import React from "react";

const sponsors = [
  { name: "Solana", logo: "/assets/solana.png" },
  { name: "DigitalOcean", logo: "/assets/digitalocean.png" },
  { name: "Polygon", logo: "/assets/polygon.png" },
  { name: "Tezos", logo: "/assets/tezos.png" },
  { name: "Replit", logo: "/assets/replit.png" },
  { name: "Filecoin", logo: "/assets/filecoin.png" },
];

const Sponsors = () => {
  return (
    <section className="bg-black py-20 text-white text-center">
      <h2 className="text-4xl font-bold mb-12">Our Sponsors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 justify-items-center px-8">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-24 h-24 object-contain rounded-full bg-white p-2 shadow-lg"
            />
            <p className="mt-4 text-lg font-medium">{sponsor.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
