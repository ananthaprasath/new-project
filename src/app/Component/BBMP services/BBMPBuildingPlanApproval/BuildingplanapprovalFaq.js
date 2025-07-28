"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
      id: 1,
      question: "What is BBMP Building Plan Approval?",
      answer:
        "BBMP Building Plan Approval is an official permission from the Bruhat Bengaluru Mahanagara Palike to construct, modify, or renovate a building as per zonal regulations, bylaws, and safety codes in Bangalore.",
    },
    {
      id: 2,
      question: "Why is building plan approval required?",
      answer:
        "Approval ensures your construction is legal, safe, and follows BBMP norms. Without it, you may face penalties, demolition, or denial of utility connections like water and electricity.",
    },
    {
      id: 3,
      question: "What documents are needed for BBMP approval?",
      answer:
        "Essential documents include land title deed, survey sketch, previous sanction plan (if any), property tax receipt, building drawings, and architect’s plan with structural stability certificate.",
    },
    {
      id: 4,
      question: "How long does the BBMP plan approval process take?",
      answer:
        "On average, BBMP plan approval takes between 30 to 60 working days, depending on property size, type, zoning, and completeness of your documentation.",
    },
    {
      id: 5,
      question: "Can I start construction without plan approval?",
      answer:
        "No, starting construction without BBMP approval is illegal and can result in work stoppage, fines, or demolition of unauthorized portions by the authorities.",
    },
  ];
  

const BuildingplanapprovalFaq = () => {
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

export default BuildingplanapprovalFaq;
