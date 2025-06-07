import React from 'react';
import circuit from '../../assets/circuit.svg';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-primary-black text-white text-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden"
    >


      <h1 className="font-moonwalkmiss text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase text-center my-16 relative z-10">
        ABOUT US
      </h1>

      <p className="max-w-3xl mx-auto text-white font-csclairemonodrawn text-base sm:text-sm leading-relaxed relative z-10">
        <span className="text-primary-red font-bold">›.hack();_ ‘25</span> is the 6th edition of IEEE MACE SB's flagship event,
        a dynamic 36-hour premiere hackathon where creative minds converge to craft innovative
        solutions to critical social challenges. The event welcomes students from all disciplines who
        share a passion for technology and social impact. Throughout the hackathon, participants will be
        guided and evaluated by esteemed industry professionals, fostering an environment that encourages
        collaboration and innovation. Notably, <span className="text-primary-red font-bold">›.hack();_</span> has earned international
        acclaim by securing the IEEE Darrel Chong Student Activity Award. In addition to the intense coding
        sessions, the event will feature inspiring keynote talks and valuable networking opportunities,
        making <span className="text-primary-red font-bold">›.hack();_ ‘25</span> a holistic platform for learning, growth, and community.
      </p>

      <p className="text-lg font-orbitron text-white mt-10 relative z-10">
        6<sup>th</sup> EDITION
      </p>

<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[300px] overflow-hidden opacity-30 z-[0]">
  <img
    src={circuit}
    alt="Circuit Bottom"
    className="w-full h-auto object-contain rotate-180"
  />
</div>

    </section>
  );
}
