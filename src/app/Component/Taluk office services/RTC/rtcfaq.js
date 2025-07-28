"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What is an RTC document?",
    answer:
      "RTC stands for Record of Rights, Tenancy and Crops. It is a land record document in Karnataka that provides information about land ownership, type, crop details, and usage.",
  },
  {
    id: 2,
    question: "Why is the RTC document important?",
    answer:
      "RTC serves as legal proof of land ownership and usage. It is required for property transactions, bank loans, subsidies, and during mutation or land conversion processes.",
  },
  {
    id: 3,
    question: "Who issues the RTC in Karnataka?",
    answer:
      "The Village Accountant under the Revenue Department of Karnataka issues RTC documents through the Bhoomi portal or at the Taluk Office.",
  },
  {
    id: 4,
    question: "What details are mentioned in an RTC?",
    answer:
      "RTC includes landowner’s name, soil type, type of land (agricultural or non-agricultural), crops grown, water source, liabilities, and survey number details.",
  },
  {
    id: 5,
    question: "Can I get my RTC online in Karnataka?",
    answer:
      "Yes, you can access your RTC document online via the Bhoomi portal (https://landrecords.karnataka.gov.in). You’ll need the district, taluk, hobli, and survey number.",
  },
];

const Rtcfaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#203239" }}>
        RTC Document – FAQs
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

export default Rtcfaq;
