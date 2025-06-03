import React from 'react';

const tracks = [
  {
    title: 'CIVICSPHERE: TECH FOR TRANSPARENT GOVERNANCE',
    icon: '🏛️',
  },
  {
    title: 'BLUEWAVE: INNOVATION FOR OCEAN & COAST',
    icon: '🌊',
  },
  {
    title: "HERITAGE REWIRED: DIGITIZING KERALA'S CULTURAL SOUL",
    icon: '🎭',
  },
  {
    title: "SPICECHAIN INNOVATION FOR KERALA'S SPICE ECONOMY",
    icon: '🌶️',
  },
  {
    title: 'VOICE OF THE LAND: TECH FOR TRIBAL RIGHTS & LEGAL AWARENESS',
    icon: '🧑‍🌾',
  },
  {
    title: 'FROM WASTE CRISIS TO CIRCULAR ECONOMY—CODE THE CHANGE',
    icon: '🗑️',
  },
];

export default function Tracks() {
  return (
    <div className="bg-black text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">OUR TRACKS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="bg-red-800 text-white p-6 rounded-md shadow-md flex items-center space-x-4 hover:bg-red-700 transition-colors"
          >
            <div className="text-3xl">{track.icon}</div>
            <div className="text-sm font-semibold uppercase tracking-wide">
              {track.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
