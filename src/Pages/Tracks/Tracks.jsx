import React from 'react';
import Heading from '../../Components/Heading/Heading';
import civicspace from '../../assets/civicspace.png'; 
import bluewave from '../../assets/bluewave.png';
import heritage from '../../assets/heritage.png';
import spicechain from '../../assets/spicechain.png';
import voice from '../../assets/voice.png';
import waste from '../../assets/waste.png';
import agronext from '../../assets/agronext.png';

const tracks = [
  {
    title: 'CIVICSPHERE: TECH FOR TRANSPARENT GOVERNANCE',
    icon: <img src={civicspace} alt="Civicspace" className="w-20 h-20 object-contain" />,
  },
  {
    title: 'BLUEWAVE: INNOVATION FOR OCEAN & COAST',
    icon: <img src={bluewave} alt="Bluewave" className="w-20 h-20 object-contain" />,
  },
  {
    title: "HERITAGE REWIRED: DIGITIZING KERALA'S CULTURAL SOUL",
    icon: <img src={heritage} alt="Heritage" className="w-20 h-20 object-contain" />,
  },
  {
    title: "SPICECHAIN INNOVATION FOR KERALA'S SPICE ECONOMY",
    icon: <img src={spicechain} alt="Spicechain" className="w-20 h-20 object-contain" />,
  },
  {
    title: 'VOICE OF THE LAND: TECH FOR TRIBAL RIGHTS & LEGAL AWARENESS',
    icon: <img src={voice} alt="Voice" className="w-20 h-20 object-contain" />,
  },
  {
    title: 'FROM WASTE CRISIS TO CIRCULAR ECONOMY—CODE THE CHANGE',
    icon: <img src={waste} alt="Waste" className="w-20 h-20 object-contain" />,
  },
  {
    title: 'AGRONEXT: SMART FARMING FOR TOMORROW',
    icon: <img src={agronext} alt="Agronext" className="w-20 h-20 object-contain" />,
  },
];

export default function Tracks() {
  return (
    <section id='tracks'>
    <div className="bg-[#101111] text-white py-6 px-4 min-h-[80vh]">
        <Heading heading="OUR TRACKS" />
      <div className="flex flex-col gap-6 max-w-6xl mx-auto w-full ">
        {/* First row */}
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          {[0, 1].map((i) => (
            <div key={i} className="relative w-full md:w-[420px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-white opacity-90 z-0 shadow-2xl" />
              <div
                className={`relative z-10 p-5 rounded-2xl shadow-lg flex items-center justify-between border border-white/60 transition-all w-full ${
                  i === 0
                    ? 'bg-gradient-to-br from-[#8B0000] to-[#250000]'
                    : 'bg-gradient-to-br from-[#250000] to-[#8B0000]'
                }`}
              >
                <div className="font-csclairemonodrawn text-[20px] leading-[100%] tracking-[5%] align-middle uppercase">
                  {tracks[i].title}
                </div>
                <div className="text-4xl md:text-5xl ml-6 flex items-center">{tracks[i].icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          {[2, 3].map((i) => (
            <div key={i} className="relative w-full md:w-[500px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-white opacity-90 z-0 shadow-2xl" />
              <div
                className={`relative z-10 p-5 rounded-2xl shadow-lg flex items-center justify-between border border-white/60 transition-all w-full ${
                  i % 2 === 0
                    ? 'bg-gradient-to-br from-[#8B0000] to-[#250000]'
                    : 'bg-gradient-to-br from-[#250000] to-[#8B0000]'
                }`}
              >
                <div className="font-csclairemonodrawn text-[20px] leading-[100%] tracking-[5%] align-middle uppercase">
                  {tracks[i].title}
                </div>
                <div className="text-4xl md:text-5xl ml-6">{tracks[i].icon}</div>
              </div>
            </div>
          ))}
        </div>

{/* Third row */}
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          {[4, 5].map((i) => (
            <div key={i} className="relative w-full md:w-[800px] flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-white opacity-90 z-0 shadow-2xl" />
              <div
                className={`relative z-10 p-5 rounded-2xl shadow-lg flex items-center justify-between border border-white/60 transition-all w-full ${
                  i % 2 === 0
                    ? 'bg-gradient-to-br from-[#8B0000] to-[#250000]'
                    : 'bg-gradient-to-br from-[#250000] to-[#8B0000]'
                }`}
              >
                <div className="font-csclairemonodrawn text-[20px] leading-[100%] tracking-[5%] align-middle uppercase">
                  {tracks[i].title}
                </div>
                <div className="text-4xl md:text-5xl ml-6">{tracks[i].icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Fourth row for 7th track */}
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          <div className="relative w-full md:w-[700px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-white opacity-90 z-0 shadow-2xl" />
            <div className="relative z-10 bg-gradient-to-bl from-[#8B0000] to-[#250000] p-5 rounded-2xl shadow-lg flex items-center justify-between border border-white/60 transition-all w-full">
              <div className="font-csclairemonodrawn text-[20px] leading-[100%] tracking-[5%] align-middle uppercase">
                {tracks[6].title}
              </div>
              <div className="text-4xl md:text-5xl ml-6">{tracks[6].icon}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}