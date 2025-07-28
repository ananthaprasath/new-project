'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import KhatabifurcationFaq from './KhatabifurcationFaq';

const Khatabifurcation = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* HERO / BREADCRUMB */}
      <section className="hero-crumb">
      <div className="container text-center" data-aos="fade-down">
  <h1 className="hero-title fw-bold display-4">
  Khata Bifurcation
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
    Everything You Need to Know About Khata Bifurcation
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Khata bifurcation is the process of dividing a single Khata into multiple Khatas when a property is split into two or more portions—typically after inheritance, sale of a part of the property, or for legal separation of ownership.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      The process requires submitting the original Khata certificate, the registered partition deed or sale deed, latest property tax paid receipts, and a formal application to the local municipal authority such as BBMP, BMRDA, or relevant Panchayat office.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “Khata bifurcation legally separates property records, ensuring clarity in ownership and independent tax liability.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      Khata bifurcation is important when individual portions of a property are owned, sold, or developed separately. It enables each owner to have an independent Khata, simplifying taxation, loan applications, and future property transactions.
    </p>
  </div>
</section>

<section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Khata Bifurcation – Document Comparison</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Khata Bifurcation via BBMP Online Portal</th>
            <th>Khata Bifurcation via Manual Offline Process</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Split a single Khata into multiple units remotely</td>
            <td>Requires physical presence at BBMP zonal office for application</td>
          </tr>
          <tr>
            <td>Upload property documents for each new bifurcated unit online</td>
            <td>Submit hard copies of property division papers</td>
          </tr>
          <tr>
            <td>Track bifurcation status and updates online</td>
            <td>Status must be manually checked by visiting the office</td>
          </tr>
          <tr>
            <td>Digital payment of bifurcation charges through the portal</td>
            <td>Offline payments using challans or demand drafts</td>
          </tr>
          <tr>
            <td>Quicker approval for clearly demarcated digital property records</td>
            <td>Delays expected due to manual verification of documents</td>
          </tr>
          <tr>
            <td>Can be completed independently with minimal assistance</td>
            <td>Often requires support from agents or documentation experts</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>



<section className="py-5 khata-section">
  <div className="container">
    <div className="p-4 rounded-4 shadow khata-box">
      <h4 className="text-center fw-bold text-primary mb-4">📄 Documents Required for Khata Bifurcation</h4>
      <ul className="list-unstyled fs-5">
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-file-earmark-text-fill me-2 text-dark"></i>
          <span>Copy of the registered parent property sale deed</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-layout-text-window-reverse me-2 text-dark"></i>
          <span>Sketch plan showing the bifurcated portions clearly marked</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-receipt-cutoff me-2 text-dark"></i>
          <span>Latest property tax paid receipts for the entire property</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-person-vcard-fill me-2 text-dark"></i>
          <span>Existing Khata certificate and Khata extract of the parent property</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-card-checklist me-2 text-dark"></i>
          <span>Encumbrance Certificate (EC) for the entire property</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-pencil-square me-2 text-dark"></i>
          <span>Khata Bifurcation application form duly filled and signed</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-person-badge-fill me-2 text-dark"></i>
          <span>ID and address proof of all new property owners</span>
        </li>
      </ul>
    </div>
  </div>
</section>

        </div>
      </section>
 <KhatabifurcationFaq/>
    </>
  );
};

export default Khatabifurcation;
