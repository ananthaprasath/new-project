"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "What is an Encumbrance Certificate?",
    answer:
      "An Encumbrance Certificate is a legal document that confirms a property is free from loans, mortgages, or legal disputes during a specified period.",
  },
  {
    id: 2,
    question: "Why is an EC important?",
    answer:
      "It ensures the property has a clear title and is essential when buying property, applying for loans, or verifying ownership history.",
  },
  {
    id: 3,
    question: "What is the difference between Form 15 and Form 16?",
    answer:
      "Form 15 lists transactions if any exist, while Form 16 is issued when there are no transactions or encumbrances found.",
  },
  {
    id: 4,
    question: "How far back can EC information go",
    answer:
      "You can request an EC for a specific duration, often 13 to 30 years depending on the requirement.",
  },
  {
    id: 5,
    question: "Do I need an EC for inherited property?",
    answer:
      "Yes, obtaining an EC is still recommended to ensure the property has no hidden liabilities or disputes.",
  },
  // Gram Panchayat Khata Registration FAQs
  {
    id: 6,
    question: "What is a Gram Panchayat Khata?",
    answer:
      "A Gram Panchayat Khata is a property record maintained by the local Panchayat. It certifies ownership and is needed for tax payments and legal property transactions.",
  },
  {
    id: 7,
    question: "Is GP Khata the same as BBMP/BDA Khata?",
    answer:
      "No, Gram Panchayat Khata is issued in rural areas, while BBMP/BDA Khatas are for urban jurisdictions. Each is governed by a different authority.",
  },
  {
    id: 8,
    question: "What documents are needed for GP Khata registration?",
    answer:
      "You'll need Form-9, Form-11, sale deed or Hakku Patra, ID proof (Aadhaar/PAN), tax receipts, and a layout sketch certified by officials.",
  },
  {
    id: 9,
    question: "Can I apply for Khata registration online?",
    answer:
      "Yes, you can apply through the e-SWATHU portal for both new applications and re-issuance. Certificates can also be verified online using the unique Certificate Number.",
  },
  {
    id: 10,
    question: "What is the processing time under Sakala?",
    answer:
      "Gram Panchayats must process Khata registrations within 45 working days as per the Sakala Service Guarantee Act.",
  },
  {
    id: 11,
    question: "Is a GP Khata valid for property registration and bank loans?",
    answer:
      "Yes, GP Khata is valid for legal transactions and registration. However, some banks may prefer BBMP/BDA Khatas for urban properties.",
  },
];

const GramkhataFaq = () => {
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

export default GramkhataFaq;
