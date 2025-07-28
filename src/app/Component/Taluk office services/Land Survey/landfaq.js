"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
      id: 1,
      question: "What is a land survey and why is it important?",
      answer:
        "A land survey is the measurement and mapping of a land parcel's boundaries, features, and dimensions. It is essential for legal ownership, construction, development planning, and preventing boundary disputes.",
    },
    {
      id: 2,
      question: "Who conducts land surveys in Karnataka?",
      answer:
        "Licensed government surveyors or private surveyors registered with the Karnataka government carry out land surveys. For official records, the survey is usually done through the Revenue Department or the Survey Settlement and Land Records (SSLR) department.",
    },
    {
      id: 3,
      question: "What are the common types of land surveys done in Karnataka?",
      answer:
        "The common types include Chain Survey (traditional method), GPS/DGPS Survey, Total Station Survey, Drone-based Survey, and Digital Survey using software like AutoCAD or GIS tools.",
    },
    {
      id: 4,
      question: "How can I request a land survey for my property?",
      answer:
        "You can apply at your local Taluk Office or online via the Bhoomi portal or the SSLR Karnataka website. You'll need to submit your RTC, property ID, and ownership documents to initiate the process.",
    },
    {
      id: 5,
      question: "How long does a land survey take in Karnataka?",
      answer:
        "The time depends on the complexity and size of the land. For smaller residential plots, it may take 2–5 days. For larger agricultural or layout projects, it can take 1–2 weeks or more, especially if there are disputes or legal clarifications involved.",
    },
    {
      id: 6,
      question: "Can I get a digital copy of the survey sketch or map?",
      answer:
        "Yes. Most digital surveys include output in formats like PDF, DXF, or SHP files. These digital sketches are useful for plotting, approval processes, and online applications.",
    },
    {
      id: 7,
      question: "Is it necessary to survey land before selling or registering it?",
      answer:
        "While not legally mandatory, it is highly advisable. A fresh survey confirms boundaries and ownership, and prevents future legal disputes during registration or resale.",
    },
    {
      id: 8,
      question: "What is the cost of a land survey in Karnataka?",
      answer:
        "Costs vary based on land size, location, and method used. Traditional chain surveys are cheaper (₹3,000–₹8,000), while GPS or Total Station surveys range from ₹10,000 to ₹50,000 depending on complexity.",
    },
  ];
  

const Landfaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#203239" }}>
      Land & Property FAQs
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

export default Landfaq;
