import React from 'react';
import Heading from '../../Components/Heading/Heading';
import { FiPhone } from 'react-icons/fi';
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaGlobe
} from 'react-icons/fa6';


export default function Footer() {
  return (
    <footer className="text-white relative overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
      
        
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-100">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="relative z-10 py-16 px-6 md:px-12">
        <Heading heading="contact us" />

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-center gap-10 md:gap-48 max-w-4xl mx-auto my-20 text-center md:text-left">
          {[
            { name: 'NANDANA JOLLY', number: '+91 81299 65776' },
            { name: 'NEHA SAVY', number: '+91 85909 24239' }
          ].map((lead, i) => (
            <div
              key={i}
              className="transition hover:scale-[1.03] duration-300"
            >
              <div className="flex items-center justify-center md:justify-start gap-3 text-xl font-semibold font-nebula text-white mb-1">
                <FiPhone className="text-[#A50C20]" size={22} />
                <span>{lead.name}</span>
              </div>
              <div className="text-[#A50C20] font-mono text-base tracking-wide">{lead.number}</div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          {[
            { icon: FaInstagram, url: 'https://www.instagram.com/ieeemace/' },
            { icon: FaXTwitter, url: 'https://www.x.com/ieeemace/' },
            { icon: FaLinkedinIn, url: 'https://www.linkedin.com/company/ieeemace/' },
            { icon: FaGlobe, url: 'https://www.ieeemace.org/' }
          ].map(({ icon: Icon, url }, i) => (
            <a
              key={i}
              href={url}
              className="w-14 h-14 rounded-full bg-[#A50C20] text-white flex items-center justify-center hover:scale-110 hover:from-red-500 hover:to-red-700 transition-all duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Brand Section */}
        <div className="text-center">
          <img
            src="/Images/_.hack();_.png"
            alt=".hack();_"
            className="mx-auto w-2/3 h-auto select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-6 border-t border-red-500/20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-300">
          <p>2025 © .hack25 Team. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}