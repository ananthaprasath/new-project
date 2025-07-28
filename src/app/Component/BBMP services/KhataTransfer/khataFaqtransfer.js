"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
      id: 1,
      question: "What is Khata Transfer?",
      answer:
        "Khata Transfer is the process of updating property ownership records in the municipal register after a sale, inheritance, gift, or legal change in ownership.",
    },
    {
      id: 2,
      question: "When is Khata Transfer required?",
      answer:
        "Khata Transfer is required whenever there is a change in property ownership, such as after buying a property, inheriting it, or receiving it as a gift.",
    },
    {
      id: 3,
      question: "What documents are needed for Khata Transfer?",
      answer:
        "Documents typically include the sale deed, latest property tax receipt, EC (Encumbrance Certificate), ID/address proof, and NOC from the previous owner if applicable.",
    },
    {
      id: 4,
      question: "How long does it take to complete Khata Transfer?",
      answer:
        "The Khata Transfer process usually takes 30–45 days after submitting all required documents and paying the applicable transfer fee.",
    },
    {
      id: 5,
      question: "Can Khata Transfer be done online in Bangalore?",
      answer:
        "Yes, BBMP offers online application options through their official website, but physical document verification at the BBMP office is still mandatory.",
    },
  ];  

const KhataFaqtransfer = () => {
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

export default KhataFaqtransfer;
