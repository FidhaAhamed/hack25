import React from 'react';
import Heading from '../../Components/Heading/Heading';

import devfolio from '../../assets/devfolio.png';
import ethindia from '/Images/ETHIndia.png';
import keyvalue from '/Images/KeyValue.png';
import innovature from '/Images/Innovature.png';
import orkes from '/Images/orkes.png';
import wmc from '/Images/wmc.png'

const sponsors = [
  { src: devfolio, alt: 'DEVFOLIO LOGO', link: 'https://devfolio.co' },
  { src: ethindia, alt: 'ETHINDIA LOGO', link: 'https://ethindia.co' }
];

const bronzeSponsors = [
  { src: keyvalue, alt: 'KEYVALUE LOGO', link: 'https://www.keyvalue.systems/' },
  { src: innovature, alt: 'INNOVATURE LOGO', link: 'https://innovature.ai' },
];

const silverSponsors = [
  { src: orkes, alt: 'ORKES LOGO', link: 'https://www.orkes.io/' }
];

const titleSponsor = [
  { src: wmc, alt: 'WMC LOGO', link: '' }
];

const Sponsors = () => {
  return (
    <section className="bg-[#101111] py-12 px-4" id="sponsors">
      <Heading heading="our SPONSORS" />

      {/* Title sponsor block */}
      <div className="max-w-5xl mx-auto border border-[#A50C20] rounded-xl p-8 relative mb-8">
        <div className="mb-6">
          <h3 className="font-orbitron text-white uppercase font-bold text-center text-2xl md:text-3xl tracking-wide">
            title sponsor
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 justify-items-center max-w-6xl mx-auto">
          {titleSponsor.map((logo, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex justify-center items-center"
            >
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-[120px] h-[80px] md:w-[180px] md:h-[120px] object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Silver sponsors block */}
      <div className="max-w-5xl mx-auto border border-[#A50C20] rounded-xl p-8 relative mb-8">
        <div className="mb-6">
          <h3 className="font-orbitron text-white uppercase font-bold text-center text-2xl md:text-3xl tracking-wide">
            Silver Sponsors
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 justify-items-center max-w-6xl mx-auto">
          {silverSponsors.map((logo, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex justify-center items-center"
            >
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-40 h-10 md:h-20 object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Bronze sponsors block */}
      <div className="max-w-5xl mx-auto border border-[#A50C20] rounded-xl p-8 relative mb-8">
        <div className="mb-6">
          <h3 className="font-orbitron text-white uppercase font-bold text-center text-2xl md:text-3xl tracking-wide">
            Bronze Sponsors
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 justify-items-center max-w-6xl mx-auto">
          {bronzeSponsors.map((logo, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex justify-center items-center"
            >
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-40 h-10 md:h-20 object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto border border-[#A50C20] rounded-xl p-10 relative">
        <div className="grid grid-cols-2 gap-6 justify-items-center max-w-6xl mx-auto">
          {sponsors.map((logo, index) => (
            <div
              key={index}
              className="p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex justify-center items-center"
            >
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-40 h-10 md:h-20 object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Sponsors;
