import React from 'react';
import './about.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <h1 className="about-title">ABOUT US</h1>

      <p className="about-description">
        <span className="highlight">›.hack();_ ‘25</span> is the 6th edition of IEEE MACE SB's flagship event,
        a dynamic 36-hour premiere hackathon where creative minds converge to craft innovative
        solutions to critical social challenges. The event welcomes students from all disciplines who
        share a passion for technology and social impact. Throughout the hackathon, participants will be
        guided and evaluated by esteemed industry professionals, fostering an environment that encourages
        collaboration and innovation. Notably, <span className="highlight">›.hack();_</span> has earned international
        acclaim by securing the IEEE Darrel Chong Student Activity Award. In addition to the intense coding
        sessions, the event will feature inspiring keynote talks and valuable networking opportunities,
        making <span className="highlight">›.hack();_ ‘25</span> a holistic platform for learning, growth, and community.
      </p>

      <p className="edition-text">6<sup>th</sup> EDITION</p>

      {/* Flipped Red Circuit SVG (positioned at bottom) */}
      <div className="circuit-svg-wrapper">
   <div className="circuit-svg-wrapper">
  <svg
    className="circuit-svg"
    viewBox="0 0 1920 300"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: 'scaleY(-1)' }}
  >
    <path d="M10 290 L10 250 L100 250 L100 200 L200 200 L200 100 L300 100 L300 50 L400 50" stroke="#ff0000" strokeWidth="2" fill="none" />
    <circle cx="10" cy="290" r="3" fill="#ff0000" />
    <circle cx="100" cy="250" r="3" fill="#ff0000" />
    <circle cx="200" cy="200" r="3" fill="#ff0000" />
    <circle cx="300" cy="100" r="3" fill="#ff0000" />
    <circle cx="400" cy="50" r="3" fill="#ff0000" />
  </svg>
</div>

      </div>
    </section>
  );
}
