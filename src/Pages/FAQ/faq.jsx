import React, { useState, useEffect } from 'react';
import Heading from '../../Components/Heading/Heading';
import mascot from '../../../public/Images/moscot.png';

const faqData = [
  {
    question: "Who can participate in >.hack();_?",
    answer: "Students from all disciplines with a passion for technology and innovation are welcome to participate."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, registration for >.hack();_ is completely free."
  },
  {
    question: "How are participants selected?",
    answer: "Participants are selected based on their application and alignment with the event’s values and goals."
  },
  {
    question: "What’s the format of the event?",
    answer: "It’s a 36-hour in-person hackathon with workshops, mentoring sessions, and final presentations."
  },
  {
    question: "Are there prizes?",
    answer: "Yes, winners receive exciting prizes and recognition from IEEE MACE SB and our sponsors."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mascotX, setMascotX] = useState(0);
  const [direction, setDirection] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Mascot horizontal animation
  useEffect(() => {
    const maxMove = 120; // max pixels mascot moves right
    const interval = setInterval(() => {
      setMascotX((x) => {
        if (x >= maxMove) setDirection(-1);
        else if (x <= 0) setDirection(1);
        return x + direction * 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <section
      id="FAQ"
      className="relative bg-[#101111] px-6 pb-48 text-center sm:px-10 lg:px-16 overflow-hidden"
    >
      <Heading heading="Frequently Asked Questions" />

      <div className="max-w-3xl mx-auto space-y-6 text-left relative z-10">
        {faqData.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`group cursor-pointer rounded-2xl p-6 bg-[#1f1f1f] border border-primary-red shadow-md
              hover:bg-[#2b2b2b] hover:shadow-xl hover:scale-[1.03] transition-transform transition-colors duration-300`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-primary-red font-csclairemonodrawn select-none">
                {item.question}
              </h3>
              <div
                className={`text-primary-red text-3xl font-bold transform transition-transform duration-300 select-none ${
                  openIndex === index ? 'rotate-45' : 'rotate-0'
                }`}
                aria-hidden="true"
              >
                +
              </div>
            </div>
            <div
              className={`mt-4 text-sm text-gray-300 font-csclairemonodrawn leading-relaxed overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>

      {/* Mascot image - animated horizontal motion bottom right */}
      <img
        src={mascot}
        alt="Mascot"
        className="absolute bottom-[-2] md:bottom-4  pointer-events-none opacity-90 z-10"
        style={{
          width: '200px',
          right: `${16 + mascotX}px`,
          transition: 'right 0.03s linear',
        }}
      />
    </section>
  );
}
