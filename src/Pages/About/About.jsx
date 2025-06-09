import React from 'react';
import Heading from '../../Components/Heading/Heading';
import circuit from '../../assets/circuit.svg';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-primary-black text-white text-center px-4 py-10 sm:px-6 lg:px-8"
    >


      <Heading heading= "about us" />

      <p className="max-w-4xl mx-auto text-white font-csclairemonodrawn text-base md:text-lg text-justify leading-relaxed relative z-10">
        <span className="text-primary-red font-bold">›.hack();_ ‘25</span> is the 6th edition of IEEE MACE SB's flagship event,
        a dynamic 36-hour premier hackathon where creative minds converge to craft innovative
        solutions to critical social challenges. The event welcomes students from all disciplines who
        share a passion for technology and social impact. Throughout the hackathon, participants will be
        guided and evaluated by esteemed industry professionals, fostering an environment that encourages
        collaboration and innovation. Notably, <span className="text-primary-red font-bold">›.hack();_</span> has earned international
        acclaim by securing the IEEE Darrel Chong Student Activity Award. In addition to the intense coding
        sessions, the event will feature inspiring keynote talks and valuable networking opportunities,
        making <span className="text-primary-red font-bold">›.hack();_ ‘25</span> a holistic platform for learning, growth, and community.
      </p>

      <p className="text-xl py-16 font-orbitron text-white mt-10 relative z-10">
        6<sup>th</sup> EDITION
      </p>

      <div className="hidden md:block absolute bottom-[-65vh] left-1/2 transform -translate-x-1/2 w-[75vw] opacity-20 z-0 pointer-events-none">
        <img
          src={circuit}
          alt="Circuit Background"
          className="w-full h-auto object-cover rotate-180"
        />
      </div>

    </section>
  );
}
