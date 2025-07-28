'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure this is imported globally in layout.js

const Khataamalgamation = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
        {/* HERO / BREADCRUMB */}
        <section className="hero-crumb">
      <div className="container text-center" data-aos="fade-down">
  <h1 className="hero-title fw-bold display-4">
  Khata Amalgamation
  </h1>
</div>
      </section>

      {/* MAIN ARTICLE */}
      <section className="article-section py-5">
        <div className="container">
          <div className="featured-img mb-4" data-aos="zoom-in">
            <img
              src="/images/bbmp services/KhataRegistration.jpeg"
              alt="Coffee from around the world"
              className="img-fluid rounded"
            />
          </div>

          <section className="khata-info-section">
  <h2 className="khata-title" data-aos="fade-up">
    Everything You Need to Know About Khata Amalgamation
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Khata amalgamation is the process of merging multiple Khatas (property records) into a single Khata when two or more adjacent properties under the same ownership are combined into one plot. This is commonly done before construction or for unified property management.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      The process involves submitting documents like the individual Khata certificates, a copy of the sanctioned building plan (if applicable), recent tax paid receipts, and a formal application to the local municipal body such as BBMP, BMRDA, or the respective Panchayat office.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “Khata amalgamation ensures legal clarity when combining properties and supports seamless approvals for development.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      Whether you're planning to construct a building across merged plots or simply want to manage the property as one unit, Khata amalgamation is essential. It streamlines tax assessments, helps avoid future discrepancies, and provides a single point of legal reference for the entire property.
    </p>
  </div>
</section>


<section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Khata Amalgamation – Document Comparison</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Khata Amalgamation via BBMP Online Portal</th>
            <th>Khata Amalgamation via Manual Offline Process</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Combine multiple Khatas into one from anywhere</td>
            <td>Requires in-person submission at the BBMP zonal office</td>
          </tr>
          <tr>
            <td>Upload individual property Khata documents digitally</td>
            <td>Submit physical copies of all individual Khatas</td>
          </tr>
          <tr>
            <td>Real-time application tracking and updates</td>
            <td>Status must be checked manually by visiting the office</td>
          </tr>
          <tr>
            <td>Online payment for amalgamation charges</td>
            <td>Offline payment through DD or challan forms</td>
          </tr>
          <tr>
            <td>Faster processing if all records are digitally verified</td>
            <td>Longer processing time due to manual file handling</td>
          </tr>
          <tr>
            <td>Minimizes need for third-party assistance</td>
            <td>Often requires help from agents or legal representatives</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


<section className="py-5 khata-section">
  <div className="container">
    <div className="p-4 rounded-4 shadow khata-box">
      <h4 className="text-center fw-bold text-primary mb-4">🧾 Documents Required for Khata Amalgamation</h4>
      <ul className="list-unstyled fs-5">
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-file-earmark-text-fill me-2 text-dark"></i>
          <span>Copies of registered sale deeds for all individual properties</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-receipt-cutoff me-2 text-dark"></i>
          <span>Latest property tax paid receipts for each plot</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-person-vcard-fill me-2 text-dark"></i>
          <span>Existing individual Khata certificates & extracts</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-card-checklist me-2 text-dark"></i>
          <span>Encumbrance Certificates (ECs) for all the properties</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-house-fill me-2 text-dark"></i>
          <span>Approved layout or amalgamation sketch plan (if available)</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-pencil-square me-2 text-dark"></i>
          <span>Khata Amalgamation application form duly filled and signed</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-person-badge-fill me-2 text-dark"></i>
          <span>ID proof and address proof of the property owner(s)</span>
        </li>
      </ul>
    </div>
  </div>
</section>
        </div>
      </section>

      
    </>
  );
};

export default Khataamalgamation;
