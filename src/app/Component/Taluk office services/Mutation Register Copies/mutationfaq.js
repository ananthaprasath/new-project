"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What is a Mutation Register?",
    answer:
      "The Mutation Register is a government record that tracks the transfer of ownership of land or property. It is updated when ownership changes due to sale, inheritance, gift, or court order.",
  },
  {
    id: 2,
    question: "Why is mutation necessary after property registration?",
    answer:
      "Even after registration, mutation is required to update the revenue records and ensure the new owner is reflected for tax purposes. Without mutation, property tax and government benefits may still be linked to the old owner.",
  },
  {
    id: 3,
    question: "What is a Mutation Extract?",
    answer:
      "A Mutation Extract is an official document derived from the Mutation Register. It includes details like the name of the new owner, date of transfer, type of transaction, and other relevant land details.",
  },
  {
    id: 4,
    question: "How do I apply for mutation in Karnataka?",
    answer:
      "You can apply by submitting the registered sale deed, application form, ID proof, and other relevant documents at your local taluk office or through the Bhoomi portal. An acknowledgment number will be provided to track status.",
  },
  {
    id: 5,
    question: "Is it mandatory to mutate property before selling?",
    answer:
      "It is not legally mandatory to mutate before selling, but it is highly recommended. Mutation avoids future disputes and ensures clean ownership in government records, especially when applying for loans or government schemes.",
  },
  {
    id: 6,
    question: "Can mutation be done online in Karnataka?",
    answer:
      "Yes. The Karnataka government provides online mutation services via the Bhoomi portal (https://landrecords.karnataka.gov.in). You can submit applications and track status digitally.",
  },
];

const Mutationfaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#203239" }}>
        Mutation Register – FAQs
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
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
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

export default Mutationfaq;
