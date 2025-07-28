"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
      id: 1,
      question: "What is Khata Bifurcation?",
      answer:
        "Khata Bifurcation is the process of splitting a single Khata into two or more separate Khatas when a property is divided among multiple owners or portions.",
    },
    {
      id: 2,
      question: "When is Khata Bifurcation required?",
      answer:
        "Khata Bifurcation is needed when a property is subdivided, such as during the sale of individual plots or when multiple heirs inherit different portions of the same property.",
    },
    {
      id: 3,
      question: "What documents are needed for Khata Bifurcation?",
      answer:
        "Required documents include the original Khata certificate and extract, latest property tax receipts, approved subdivision plan, sale deeds or partition deed, and ID/address proof of the owners.",
    },
    {
      id: 4,
      question: "How long does the Khata Bifurcation process take?",
      answer:
        "The Khata Bifurcation process usually takes 30–60 working days after submission of the application, supporting documents, and payment of applicable fees.",
    },
    {
      id: 5,
      question: "Can Khata Bifurcation be done online in Bangalore?",
      answer:
        "Currently, Khata Bifurcation cannot be done completely online. While you can download the form or raise an initial request, physical document submission and verification at the BBMP office is mandatory.",
    },
  ];
  

const KhatabifurcationFaq = () => {
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

export default KhatabifurcationFaq;
