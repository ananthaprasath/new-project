'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import KhataextractcertificateFaq from './KhataextractcertificateFaq';

const Khataextractcertificate = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
      }, []);
  return (
    <>
 {/* HERO / BREADCRUMB */}
 <section className="hero-crumb">
      <div className="container text-center" data-aos="fade-down">
  <h1 className="hero-title fw-bold display-4">
  Khata Extract & Certificate
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
    Everything You Need to Know About Khata Extract & Certificate
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      A Khata Extract and Khata Certificate are official documents issued by local municipal bodies like BBMP, BMRDA, or Panchayat
      to validate property records. These documents are crucial during property transactions, tax payments, and for availing building permissions or utility services.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      The Khata Extract shows detailed property information such as the owner’s name, plot size, location, assessment details, and property ID.
      The Khata Certificate, on the other hand, confirms that a property is officially recorded in the municipal register.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “Khata Extract and Certificate are not just records—they’re proof of your property’s legal and civic recognition.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      Always ensure these documents are available and updated when purchasing or selling a property. They play a key role in getting loans,
      completing registration, and protecting your investment from legal disputes.
    </p>
  </div>
</section>


<section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Document Comparison – Khata Extract vs Khata Certificate</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Khata Extract</th>
            <th>Khata Certificate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Detailed record of a property’s details</td>
            <td>Proof that a property is listed in BBMP records</td>
          </tr>
          <tr>
            <td>Includes property size, location, and usage</td>
            <td>Mentions property owner’s name and tax payment status</td>
          </tr>
          <tr>
            <td>Used during property sale, legal verification, etc.</td>
            <td>Required for property registration and electricity/water connections</td>
          </tr>
          <tr>
            <td>Issued when you need full property data</td>
            <td>Issued when proof of BBMP listing is needed</td>
          </tr>
          <tr>
            <td>Contains assessment number, PID, and survey details</td>
            <td>Confirms that property tax is being paid</td>
          </tr>
          <tr>
            <td>Not always required for basic transactions</td>
            <td>Often requested by banks and legal authorities</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="py-5 khata-section">
  <div className="container">
    <div className="p-4 rounded-4 shadow khata-box">
      <h4 className="text-center fw-bold text-primary mb-4">📑 Khata Extract & Certificate</h4>
      <ul className="list-unstyled fs-5">
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-person-badge-fill me-2 text-dark"></i>
          <span>Owner’s name and details as per BBMP records</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-house-fill me-2 text-dark"></i>
          <span>Property identification number (PID)</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-geo-alt-fill me-2 text-dark"></i>
          <span>Exact location and survey number of the property</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-file-earmark-text-fill me-2 text-dark"></i>
          <span>Details of the property’s dimensions and area</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-calendar-event-fill me-2 text-dark"></i>
          <span>Date of issue and Khata registration reference</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-bank2 me-2 text-dark"></i>
          <span>Assessment for property tax and payment status</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-shield-check me-2 text-dark"></i>
          <span>Certificate validity and legal standing confirmation</span>
        </li>
      </ul>
    </div>
  </div>
</section>

        </div>
      </section>

  <KhataextractcertificateFaq/>
  </>

  )
}

export default Khataextractcertificate

