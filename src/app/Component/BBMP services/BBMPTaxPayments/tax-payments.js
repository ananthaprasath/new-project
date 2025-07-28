'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TaxpaymentsFaq from './TaxpaymentsFaq';

const Taxpayments = () => {
      useEffect(() => {
        AOS.init({ duration: 800, once: true });
      }, []);
  return (
   <>
       {/* HERO / BREADCRUMB */}
       <section className="hero-crumb">
      <div className="container text-center" data-aos="fade-down">
  <h1 className="hero-title fw-bold display-4">
  BBMP Tax Payments
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
    Everything You Need to Know About BBMP Tax Payments
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      BBMP tax payment is a mandatory obligation for property owners within Bengaluru's municipal limits. It ensures
      that you stay compliant with local regulations while contributing to city infrastructure, sanitation, and civic services.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      Property tax is calculated based on factors like zone classification, property usage, built-up area, and the Annual
      Rateable Value (ARV) system set by BBMP. Timely payments help avoid penalties and legal complications.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “Paying BBMP tax on time is not just a duty—it’s your contribution to a better Bangalore.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      You can pay your BBMP property tax online via the official portal using your PID number or SAS application ID.
      Always retain payment receipts for future reference, property transactions, and Khata applications.
    </p>
  </div>
</section>


<section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">BBMP Tax Payments – Online vs Offline</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Online Payment</th>
            <th>Offline Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pay via BBMP official website (https://bbmptax.karnataka.gov.in)</td>
            <td>Visit BBMP ward office or BangaloreOne centers</td>
          </tr>
          <tr>
            <td>Available 24/7 from any location</td>
            <td>Limited to office working hours</td>
          </tr>
          <tr>
            <td>Instant digital receipt generation</td>
            <td>Manual receipt provided at the counter</td>
          </tr>
          <tr>
            <td>Payment via UPI, credit/debit card, or net banking</td>
            <td>Payment usually accepted in cash or DD</td>
          </tr>
          <tr>
            <td>Faster and more convenient process</td>
            <td>May involve longer queues and waiting time</td>
          </tr>
          <tr>
            <td>Track history and status online anytime</td>
            <td>No real-time status tracking</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="py-5 bbmp-tax-section">
  <div className="container">
    <div className="p-4 rounded-4 shadow bbmp-tax-box">
      <h4 className="text-center fw-bold text-primary mb-4">💰 BBMP Tax Payments</h4>
      <ul className="list-unstyled fs-5">
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-calendar-event-fill me-2 text-dark"></i>
          <span>Annual payment schedule and due dates for property tax</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-credit-card-2-front-fill me-2 text-dark"></i>
          <span>Online and offline payment methods accepted by BBMP</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-receipt-cutoff me-2 text-dark"></i>
          <span>Receipt generation and acknowledgment after payment</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-percent me-2 text-dark"></i>
          <span>Applicable rebates for early payment and penalties for delay</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-building-check me-2 text-dark"></i>
          <span>Property Identification (PID) number required for tax filing</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-currency-rupee me-2 text-dark"></i>
          <span>Calculation of tax based on property zone and built-up area</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-envelope-check-fill me-2 text-dark"></i>
          <span>SMS/Email notifications for due reminders and receipts</span>
        </li>
      </ul>
    </div>
  </div>
</section>

        </div>
      </section>
   <TaxpaymentsFaq/>
   </>
  )
}

export default Taxpayments