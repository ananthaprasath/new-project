'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  Khata Transfer
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
    Everything You Need to Know About Khata Transfer
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Khata transfer is the process of updating the property ownership records in the municipal register after a sale, inheritance, or gift. It is essential to ensure that the new owner is legally recognized by the local authority, such as BBMP, BMRDA, or the Panchayat.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      This process involves submitting documents like the sale deed, latest tax paid receipts, and an application form to the relevant authority. Once approved, the Khata will reflect the new owner's name, ensuring legal clarity and ownership rights.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “Khata transfer secures your rightful ownership and prevents future legal disputes.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      Whether you're buying a new property or inheriting one, always complete the Khata transfer immediately. This is crucial for applying for building approvals, utility connections, and for a hassle-free resale in the future.
    </p>
  </div>
</section>


<section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Khata Transfer – Document Comparison</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Khata Transfer via BBMP Online Portal</th>
            <th>Khata Transfer via Manual Offline Process</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Available 24/7 for application submission</td>
            <td>Requires physical visit to BBMP office</td>
          </tr>
          <tr>
            <td>Upload scanned documents online</td>
            <td>Submit photocopies and originals in person</td>
          </tr>
          <tr>
            <td>Application status can be tracked online</td>
            <td>No real-time tracking; manual follow-ups needed</td>
          </tr>
          <tr>
            <td>Payment through digital modes (UPI, net banking)</td>
            <td>Payment via DD or cash at counters</td>
          </tr>
          <tr>
            <td>Faster processing if documents are accurate</td>
            <td>Often delayed due to manual verification</td>
          </tr>
          <tr>
            <td>Reduces the need for agents/middlemen</td>
            <td>Agent intervention commonly required</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="py-5 khata-section">
  <div className="container">
    <div className="p-4 rounded-4 shadow khata-box">
      <h4 className="text-center fw-bold text-primary mb-4">🔁 Documents Required for Khata Transfer</h4>
      <ul className="list-unstyled fs-5">
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-file-earmark-text-fill me-2 text-dark"></i>
          <span>Copy of the registered sale deed</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-receipt-cutoff me-2 text-dark"></i>
          <span>Latest property tax paid receipt</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-person-vcard-fill me-2 text-dark"></i>
          <span>Copy of the previous Khata certificate & extract</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-card-checklist me-2 text-dark"></i>
          <span>Encumbrance Certificate (EC) up to date</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-house-door-fill me-2 text-dark"></i>
          <span>Occupancy Certificate (if applicable)</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-pencil-square me-2 text-dark"></i>
          <span>Application form for Khata transfer duly filled</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-person-badge-fill me-2 text-dark"></i>
          <span>ID proof and address proof of the new owner</span>
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

export default KhataRegistration;
