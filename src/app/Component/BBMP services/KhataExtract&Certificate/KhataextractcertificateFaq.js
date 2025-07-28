"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
      id: 1,
      question: "What is a Khata Extract?",
      answer:
        "A Khata Extract is an official document issued by BBMP that provides detailed property information such as property owner name, plot size, location, and tax assessment details. It is typically required during property transactions or loan applications.",
    },
    {
      id: 2,
      question: "What is a Khata Certificate?",
      answer:
        "A Khata Certificate is a document that certifies a property is listed in the BBMP records. It is often required for legal purposes like building approvals, water or electricity connections, and property transfers.",
    },
    {
      id: 3,
      question: "Why are Khata Extract and Certificate important?",
      answer:
        "These documents are crucial for proving legal ownership, paying property taxes, applying for building licenses, and ensuring smooth property resale or registration processes in Bangalore.",
    },
    {
      id: 4,
      question: "How to apply for a Khata Extract or Certificate?",
      answer:
        "You can apply at your nearest BBMP office or online via the Sakala portal. You will need documents like the property tax receipt, sale deed, and previous Khata details.",
    },
    {
      id: 5,
      question: "Are Khata Extract and Certificate the same?",
      answer:
        "No. A Khata Extract provides detailed property information, while a Khata Certificate simply verifies that a property is officially registered with BBMP. Both serve different legal and administrative purposes.",
    },
  ];  

const KhataextractcertificateFaq = () => {
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

export default KhataextractcertificateFaq;
