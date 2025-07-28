'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Contect';

const KhataRegistration = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* HERO / BREADCRUMB */}
      <section className="hero-crumb">
      <div className="container text-center" data-aos="fade-down">
  <h1 className="hero-title fw-bold display-4">
    Khata Registration
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
  Everything You Need to Know About Khata Registration
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Khata is an essential legal document that signifies property ownership and is issued by municipal authorities
      like BBMP, BMRDA, or Panchayat. It plays a crucial role during property sales, tax payments, and applying for utilities.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      It includes vital details like owner name, plot dimensions, location, property tax details, and a unique PID number.
      A valid Khata ensures your land is officially recognized and ready for development or resale.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “A Khata is not just a document; it's proof that your property stands on legal ground.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      Always consult a legal expert before purchasing any plot. Ensure the property has a clear title, is free from encumbrances,
      and has a valid Khata for a smooth registration process and future resale.
    </p>
  </div>
</section>

<section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Document Comparison – Aadhar vs Voter ID</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Aadhar Card</th>
            <th>Voter ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12-digit unique identity number</td>
            <td>10-digit alphanumeric ID</td>
          </tr>
          <tr>
            <td>Issued by UIDAI (Govt. of India)</td>
            <td>Issued by Election Commission of India</td>
          </tr>
          <tr>
            <td>Used for identity and address proof</td>
            <td>Used primarily for voting eligibility</td>
          </tr>
          <tr>
            <td>Mandatory for many government schemes</td>
            <td>Mandatory for voting in elections</td>
          </tr>
          <tr>
            <td>Can be downloaded digitally</td>
            <td>Only available in physical format</td>
          </tr>
          <tr>
            <td>Linked with biometric data</td>
            <td>No biometric data linked</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section className="py-5 khata-section">
  <div className="container">
    <div className="p-4 rounded-4 shadow khata-box">
      <h4 className="text-center fw-bold text-primary mb-4">📄 Contents of a Khata</h4>
      <ul className="list-unstyled fs-5">
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-person-fill me-2 text-dark"></i>
          <span>Property owner’s name</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-aspect-ratio-fill me-2 text-dark"></i>
          <span>Size of the property/measurement of the property</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-geo-alt-fill me-2 text-dark"></i>
          <span>Location of the property</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-building me-2 text-dark"></i>
          <span>Built-up area of the property</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-door-closed-fill me-2 text-dark"></i>
          <span>Whether the property is vacant or occupied</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-tools me-2 text-dark"></i>
          <span>Purpose of utilization of the property</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-cash-coin me-2 text-dark"></i>
          <span>The annual value of the property</span>
        </li>
      </ul>
    </div>
  </div>
</section>
        </div>
      </section>

      <Contact/>
    </>
  );
};

export default KhataRegistration;
