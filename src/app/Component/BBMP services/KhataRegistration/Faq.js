"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What is Khata?",
    answer:
      "Khata is a legal document issued by BBMP that records property ownership and details like owner name, property size, location, tax details, and PID number.",
  },
  {
    id: 2,
    question: "What are the types of Khata?",
    answer:
      "There are two types: A Khata (legal and eligible for trade) and B Khata (semi-legal, not eligible for building approvals or bank loans).",
  },
  {
    id: 3,
    question: "Why is Khata important?",
    answer:
      "Khata is required for property tax payment, building approvals, and ownership transfer in Bangalore.",
  },
  {
    id: 4,
    question: "How to apply for Khata registration?",
    answer:
      "You can apply via BBMP offices or online by submitting sale deed, tax receipts, PID number, and encumbrance certificate.",
  },
  {
    id: 5,
    question: "Can B Khata be converted to A Khata?",
    answer:
      "Yes, upon payment of penalties and regularizing deviations as per BBMP guidelines, B Khata can be upgraded to A Khata.",
  },
];

const KhataFaq = () => {
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

export default KhataFaq;
