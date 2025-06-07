import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="bg-primary-black text-white text-center px-4 py-20 sm:px-6 lg:px-8"
    >
      <h1 className="text-5xl sm:text-3xl font-orbitron mb-8 tracking-widest uppercase">
        ABOUT US
      </h1>

      <p className="max-w-3xl mx-auto text-white font-csclairemonodrawn text-base sm:text-sm leading-relaxed">
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

      <p className="text-lg font-orbitron text-white mt-10">
        6<sup>th</sup> EDITION
      </p>

      <div className="mt-10 overflow-hidden">
        <svg
          className="w-full h-auto block"
          viewBox="0 0 1920 300"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'scaleY(-1)' }}
        >
          <path
            d="M10 290 L10 250 L100 250 L100 200 L200 200 L200 100 L300 100 L300 50 L400 50"
            stroke="#A50C20"
            strokeWidth="2"
            fill="none"
          />
          {[10, 100, 200, 300, 400].map((x) => (
            <circle key={x} cx={x} cy={300 - x / 2} r="3" fill="#A50C20" />
          ))}
        </svg>
      </div>
    </section>
  );
}
