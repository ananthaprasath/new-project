"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
      id: 1,
      question: "What is land conversion in Karnataka?",
      answer:
        "Land conversion is the legal process of changing land use from agricultural to non-agricultural purposes such as residential, commercial, or industrial. It is mandatory before constructing buildings on agricultural land.",
    },
    {
      id: 2,
      question: "Why do I need to convert agricultural land?",
      answer:
        "Without conversion, you cannot legally construct buildings or obtain water, electricity, or bank loans for housing or commercial use. Conversion gives legal permission for non-agricultural use.",
    },
    {
      id: 3,
      question: "Where do I apply for land conversion in Karnataka?",
      answer:
        "You can apply at the office of the Deputy Commissioner (DC) of your district or submit your request online via the official Bhoomi portal: https://landrecords.karnataka.gov.in/",
    },
    {
      id: 4,
      question: "What documents are needed for land conversion?",
      answer:
        "Required documents include RTC (Pahani), Mutation Record, Survey Sketch, NOC from relevant authorities (if needed), land tax receipt, and details of proposed land use.",
    },
    {
      id: 5,
      question: "How long does the conversion process take?",
      answer:
        "Typically, the process takes 30–60 days depending on document verification, field inspection, and DC office processing time. Delays may occur if reports are pending or objections arise.",
    },
    {
      id: 6,
      question: "Is there a fee for land conversion?",
      answer:
        "Yes. A conversion fee is charged based on the area and current guidance value of the land. It is usually calculated per square meter or per acre and varies by location.",
    },
    {
      id: 7,
      question: "Can I convert only part of my agricultural land?",
      answer:
        "Yes. You can apply for conversion of a specific portion of land. The survey sketch must clearly mark the area to be converted and retained as agricultural.",
    },
    {
      id: 8,
      question: "Is land conversion permanent?",
      answer:
        "Yes, once converted and approved by the DC office, the land use remains non-agricultural unless changed again through legal means. The Khata will also reflect the new land use.",
    },
  ];  
  

const Landconversionfaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#203239" }}>
      Common Questions About Land Conversion
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

export default Landconversionfaq;
