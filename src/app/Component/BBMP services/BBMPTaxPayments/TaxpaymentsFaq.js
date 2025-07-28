"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
      id: 1,
      question: "What is BBMP Property Tax?",
      answer:
        "BBMP Property Tax is a tax levied by the Bruhat Bengaluru Mahanagara Palike (BBMP) on all residential and commercial properties within its jurisdiction to fund civic services and infrastructure.",
    },
    {
      id: 2,
      question: "How is BBMP Property Tax calculated?",
      answer:
        "The tax is calculated using the Unit Area Value (UAV) system, based on the property's location, type, built-up area, and usage (residential, commercial, etc.). The formula also considers depreciation and zonal classification.",
    },
    {
      id: 3,
      question: "Where can I pay my BBMP Property Tax?",
      answer:
        "You can pay BBMP Property Tax online through the official BBMP portal or in person at authorized BangaloreOne or BBMP offices. Online payment is the fastest and most preferred option.",
    },
    {
      id: 4,
      question: "What documents are required for BBMP Tax payment?",
      answer:
        "You need the Property Identification Number (PID) or old property ID, property owner's name, and past payment receipts or Khata details to make a payment.",
    },
    {
      id: 5,
      question: "Are there any penalties for late BBMP Tax payment?",
      answer:
        "Yes, BBMP imposes a penalty of 2% interest per month on the outstanding tax amount if not paid by the due date. Early payment may also offer rebates.",
    },
  ];
  

const TaxpaymentsFaq = () => {
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

export default TaxpaymentsFaq;
