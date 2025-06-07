import React, { useState } from 'react';

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
 <section
  id="FAQ"
  className="bg-[#101111] text-white px-4 py-20 text-center sm:px-6 lg:px-8"
>

      <h1 className="font-moonwalkmiss text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase text-center my-16">
        Frequently Asked Questions
      </h1>

      <div className="max-w-2xl mx-auto space-y-4 text-left">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg p-5 transition-all duration-300 cursor-pointer ${
              openIndex === index ? 'bg-[#101111]' : 'bg-[#101111]'
            } border-primary-red`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="text-lg font-bold text-primary-red font-orbitron">
              {item.question}
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out text-sm leading-relaxed font-csclairemonodrawn text-white ${
                openIndex === index ? 'max-h-96 mt-2' : 'max-h-0'
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
