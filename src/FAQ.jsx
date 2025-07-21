import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  { question: "What is Netflix?", answer: "Netflix is a streaming service offering movies, TV shows, and more." },
  { question: "How much does Netflix cost?", answer: "Plans range from ₹149 to ₹649 per month." },
  { question: "Where can I watch?", answer: "You can watch anywhere — mobile, tablet, TV, or laptop." },
  { question: "How do I cancel?", answer: "Cancel anytime online in your account settings." },
  { question: "What can I watch on Netflix?", answer: "Watch thousands of movies, TV shows, and Netflix Originals." },
  { question: "Is Netflix good for kids?", answer: "Yes, it has a Kids experience with parental controls." },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, i) => (
          <div key={i} className="faq-item" onClick={() => toggle(i)}>
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{openIndex === i ? "✖" : "+"}</span>
            </div>
            {openIndex === i && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
