"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
      id: 1,
      question: "What is Khata Amalgamation?",
      answer:
        "Khata Amalgamation is the process of combining multiple property Khatas into a single Khata for unified ownership and property management.",
    },
    {
      id: 2,
      question: "When is Khata Amalgamation required?",
      answer:
        "Khata Amalgamation is typically required when a property owner purchases adjacent plots and wants to merge them into one property for tax and legal purposes.",
    },
    {
      id: 3,
      question: "What documents are needed for Khata Amalgamation?",
      answer:
        "Documents include the sale deeds of all properties, latest tax receipts, approved layout plan showing merged plots, ID/address proof, and an application form.",
    },
    {
      id: 4,
      question: "How long does Khata Amalgamation take?",
      answer:
        "The Khata Amalgamation process usually takes 30–60 days after submitting all documents and paying applicable fees at the BBMP or local municipal office.",
    },
    {
      id: 5,
      question: "Can Khata Amalgamation be done online in Bangalore?",
      answer:
        "Currently, Khata Amalgamation cannot be fully completed online. The application can be initiated online, but physical verification and submission at BBMP are required.",
    },
  ];   

const KhataFaqamalgamation = () => {
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

export default KhataFaqamalgamation;
