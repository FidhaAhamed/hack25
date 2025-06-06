import React, { useState } from 'react';
import './faq.css';

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
    <section className="faq-section" id="FAQ">
      <h1 className="faq-title">FREQUENTLY ASKED QUESTIONS</h1>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}