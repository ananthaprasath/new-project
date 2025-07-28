"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
      id: 1,
      question: "What are Property Survey Documents?",
      answer:
        "Property Survey Documents are official records that define land boundaries, ownership, and dimensions. They help verify legal status, prevent disputes, and are used in approvals, resale, and loans.",
    },
    {
      id: 2,
      question: "Which are the key land survey documents in Karnataka?",
      answer:
        "Key documents include the Survey Sketch, Phodi Sketch, Tippon Copy, RTC (Pahani), and Mutation Extract. Each serves a specific purpose in identifying, dividing, and verifying land ownership and boundaries.",
    },
    {
      id: 3,
      question: "What is a Survey Sketch?",
      answer:
        "A Survey Sketch is a visual layout that marks the exact dimensions and boundaries of a land parcel. It is used for fencing, layout planning, and identifying overlaps or encroachments.",
    },
    {
      id: 4,
      question: "Where can I get my property’s survey documents?",
      answer:
        "You can obtain certified copies from the local revenue office or online via the Bhoomi portal (https://landrecords.karnataka.gov.in). For older properties, physical visits to the taluk office may be needed.",
    },
    {
      id: 5,
      question: "Is a property survey required before buying land?",
      answer:
        "Yes, it is highly advisable. A survey helps confirm land extent, location, and boundaries. It ensures there are no overlaps, encroachments, or legal complications before purchase.",
    },
    {
      id: 6,
      question: "What is the Tippon Copy and how is it used?",
      answer:
        "Tippon Copy is a traditional handwritten land map maintained by the revenue department. It helps match survey numbers with boundaries and is often used in legal and planning approvals.",
    },
  ];  

const Properlyfaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#203239" }}>
      Understanding Property Survey Papers – FAQs
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

export default Properlyfaq;
