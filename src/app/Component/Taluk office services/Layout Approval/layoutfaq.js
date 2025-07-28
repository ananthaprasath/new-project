"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
        {
          id: 1,
          question: "What is Layout Approval?",
          answer:
            "Layout Approval is the official permission granted by government authorities like BDA, BMRDA, or DTCP to develop land into residential or commercial plots. It confirms that the layout complies with zoning laws, road widths, amenities, and drainage norms."
        },
        {
          id: 2,
          question: "Why is Layout Approval important before buying a plot?",
          answer:
            "Buying a plot in an approved layout ensures legal ownership, access to civic amenities, eligibility for home loans, and protection from demolition or legal disputes. Unapproved layouts may face restrictions or penalties."
        },
        {
          id: 3,
          question: "Which authorities issue Layout Approvals in Karnataka?",
          answer:
            "Depending on the location, approvals may be issued by BDA (Bangalore Development Authority), BMRDA (Bangalore Metropolitan Region Development Authority), DTCP (Department of Town and Country Planning), or local planning bodies like Gram Panchayats in rural areas."
        },
        {
          id: 4,
          question: "How can I verify if a layout is approved?",
          answer:
            "You can check the approval documents issued by the authority, verify the plan number and date, or visit the respective planning authority’s official website. Always ask for a copy of the layout approval letter before purchasing."
        },
        {
          id: 5,
          question: "Can I build a house on an unapproved layout?",
          answer:
            "Constructing a house in an unapproved layout is risky and often illegal. You may not get a building plan sanction, electricity/water connection, or loan approval. It may also lead to eviction or property regularization charges in the future."
        },
        {
          id: 6,
          question: "Does approval mean conversion from agricultural to residential use?",
          answer:
            "Yes. A key part of layout approval involves land use conversion under the Karnataka Land Revenue Act. Only after DC Conversion (changing agricultural land to residential use) can layout approval be processed."
        },
        {
          id: 7,
          question: "Is RERA registration required along with layout approval?",
          answer:
            "If the layout has more than 8 plots or covers over 500 sq. meters, RERA registration is mandatory in Karnataka. However, layout approval and RERA are separate processes; both may be required for full legal compliance."
        }
      ];
      

const Layoutfaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#203239" }}>
      Frequently Asked Questions on Layout Approval
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

export default Layoutfaq;
