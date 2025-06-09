import React from 'react';
import Heading from '../../Components/Heading/Heading';

import verbwire from '../../assets/verbwire.png';
import streamyard from '../../assets/streamyard.png';
import filecoin from '../../assets/filecoin.png';
import solana from '../../assets/solana.png';
import digitalocean from '../../assets/digitalocean.png';
import polygon from '../../assets/polygon.png';
import tezos from '../../assets/tezos.png';
import replit from '../../assets/replit.png';
import innovation from '../../assets/innovation.png';
import qburst from '../../assets/qburst.png';
import experion from '../../assets/experion.png';
import devfolio from '../../assets/devfolio.png';
import keyvalue from '../../assets/keyvalue.png';
import beingabroad from '../../assets/beingabroad.png';
import acceleratex from '../../assets/acceleratex.png';
import ieee from '../../assets/ieee.png';

const sponsors = [
  verbwire,
  streamyard,
  filecoin,
  solana,
  digitalocean,
  polygon,
  tezos,
  replit,
  innovation,
  qburst,
  experion,
  devfolio,
  keyvalue,
  beingabroad,
  acceleratex,
  ieee,
];

const Sponsors = () => {
  return (
    <section className="bg-[#101111] py-12 px-4" id="">
      <Heading heading="previous SPONSORS" />
      <div className="max-w-5xl mx-auto border border-[#A50C20] rounded-xl p-10 relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-6 justify-items-center max-w-6xl mx-auto">
          {sponsors.map((logo, index) => (
            <div
              key={index}
              className="p-4 bg--50 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="w-40 h-10 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
