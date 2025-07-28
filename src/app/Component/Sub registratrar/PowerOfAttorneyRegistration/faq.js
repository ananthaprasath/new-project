"use client";
 
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
 
const faqData = [
  {
    id: 1,
    question: "What is an Encumbrance Certificate?",
    answer:
      "An Encumbrance Certificate is a legal document that confirms a property is free from loans, mortgages, or legal disputes during a specified period.",
  },
  {
    id: 2,
    question: "Why is an EC important?",
    answer:
      "It ensures the property has a clear title and is essential when buying property, applying for loans, or verifying ownership history.",
  },
  {
    id: 3,
    question: "What is the difference between Form 15 and Form 16?",
    answer:
      "Form 15 lists transactions if any exist, while Form 16 is issued when there are no transactions or encumbrances found.",
  },
  {
    id: 4,
    question: "How far back can EC information go",
    answer:
      "You can request an EC for a specific duration, often 13 to 30 years depending on the requirement.",
  },
  {
    id: 5,
    question: "Do I need an EC for inherited property?",
    answer:
      "Yes, obtaining an EC is still recommended to ensure the property has no hidden liabilities or disputes.",


  },
];
 
const PowerofattorneyFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);
 
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
 
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#203239" }}>
        Khata Registration – FAQs
      </h2>
      <div className="accordion" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="accordion-item mb-3 rounded shadow-sm" key={faq.id}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button d-flex justify-content-between align-items-center fw-semibold ${
                  openIndex !== index ? "collapsed" : ""
                }`}
                onClick={() => toggle(index)}
                style={{
                  backgroundColor: "#f8f9fa",
                  border: "none",
                  borderRadius: "0.4rem",
                  transition: "all 0.3s ease",
                }}
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className="ms-auto"
                  style={{
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse ${
                openIndex === index ? "show" : ""
              }`}
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: "#ffffff",
                  borderTop: "1px solid #dee2e6",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  color: "#333",
                }}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PowerofattorneyFaq;