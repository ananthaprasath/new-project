'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './khatatransfer.css';

const Khatatransfer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-banner position-relative">
        <img
          src="/images/bbmp services/KhataRegistration.jpeg"
          alt="Khata Registration"
          className="hero-img w-100"
        />
        <div className="hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
          <h1 className="section-heading text-white text-center" data-aos="fade-down">
            Khata Transfer
          </h1>
        </div>
      </section>

      {/* WHAT IS KHATA TRANSFER */}
      <section className="info-section pt-5 mt-5">
        <div className="container text-center">
          <h2 className="info-title text-white mb-4" data-aos="fade-up">
            Know More About Khata Transfer
          </h2>
          <div className="card info-box mx-auto p-4 shadow-sm" data-aos="fade-up" data-aos-delay="200">
            <h3 className="info-subtitle text-primary fw-bold mb-3">What Is Khata Transfer</h3>
            <p className="info-text text-dark m-0">
              KHATA is a legal document issued by BBMP (Bruhat Bengaluru Mahanagara Palike) to property owners within its limits.
              It contains vital information such as owner's name, property dimensions, location, tax details, built-up area, and PID number.
            </p>
          </div>
        </div>
      </section>

      {/* TIME REQUIRED */}
      <section className="info-section py-5">
        <div className="container text-center">
          <div className="card info-box mx-auto p-4 shadow-sm" data-aos="fade-up">
            <h3 className="info-subtitle text-primary fw-bold mb-3">Time required For Khata Transfer</h3>
            <ul className="list-unstyled text-start m-0">
              <li>1. 7 working days in the case of BDA/KHB allotted properties</li>
              <li>2. 30 working days for revenue extensions, BDA re-conveyed areas, gramatana, high-rises (apartments & commercial)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* KHATA TYPES TABLE */}
      <section className="info-section py-5">
        <div className="container text-center">
          <h2 className="info-title text-white mb-4" data-aos="fade-up">Khata Types</h2>
          <div className="card info-box table-responsive mx-auto p-4" data-aos="fade-up" data-aos-delay="200">
            <table className="table table-bordered m-0">
              <thead className="fw-bold">
                <tr><th>A Khatha</th><th>B Khatha</th></tr>
              </thead>
              <tbody>
                <tr><td>Legal property</td><td>Illegal/semi-legal</td></tr>
                <tr><td>Under BBMP jurisdiction</td><td>Local jurisdiction</td></tr>
                <tr><td>Ownership transferable</td><td>Ownership not transferable</td></tr>
                <tr><td>Loans possible</td><td>No loan facility</td></tr>
                <tr><td>Plan approvals available</td><td>Cannot obtain the same</td></tr>
                <tr><td>Construction allowed</td><td>Construction not permitted</td></tr>
                <tr><td>Utility connections available</td><td>Not applicable</td></tr>
                <tr><td>Resale is possible</td><td>Resale not permitted</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CONTENTS OF KHATA */}
      <section className="info-section py-5">
        <div className="container text-center">
          <h2 className="info-title text-white mb-4" data-aos="fade-up">Contents of a Khatha</h2>
          <div className="card info-box mx-auto p-4" data-aos="fade-up" data-aos-delay="200">
            <ul className="text-start m-0 p-0 list-unstyled">
              <li>• Owner's name</li>
              <li>• Size and measurement</li>
              <li>• Location and survey number</li>
              <li>• Built-up area</li>
              <li>• Property status (vacant or occupied)</li>
              <li>• Usage type (residential/commercial)</li>
              <li>• Annual taxable value</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-4 text-center bg-primary">
        <h2 className="info-title text-white mb-0">Book Khata Registration Documents Service Now</h2>
      </section>

      {/* FORM & DOCUMENTS */}
      <section className="info-section py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* FORM */}
            <div className="col-md-7">
              <h3 className="fw-bold mb-4">Fill The Form For Khata Transfer Registration</h3>
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label">Name *</label>
                    <input type="text" className="form-control" placeholder="First Name" required />
                  </div>
                  <div className="col">
                    <label className="form-label invisible d-block">Last</label>
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className="form-control" placeholder="Phone Number" required />
                </div>
                <div className="mb-3 row">
                  <div className="col">
                    <label className="form-label">Address *</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col">
                    <label className="form-label">Ward Number/Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col">
                    <label className="form-label">Pincode</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Order Date *</label>
                  <input type="date" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Message *</label>
                  <textarea className="form-control" rows="4" required></textarea>
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="termsCheck" />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I agree to the Terms & <a href="#">Privacy Policy</a> of Docandeed
                  </label>
                </div>
                <button type="submit" className="btn btn-danger me-2">Submit</button>
                <button type="reset" className="btn btn-secondary">Reset</button>
              </form>
            </div>

            {/* DOCUMENTS */}
            <div className="col-md-5">
              <h3 className="fw-bold mb-4">Documents Required For Khata Transfer</h3>
              <ul className="list-unstyled lh-lg">
                <li><strong>✔️ Application Form:</strong> Duly filled and signed</li>
                <li><strong>✔️ Title Deed:</strong> Showing clear ownership</li>
                <li><strong>✔️ Tax Paid Receipts:</strong> Latest BBMP property tax</li>
                <li><strong>✔️ Affidavit:</strong> If inherited/gift/court transfer</li>
                <li><strong>✔️ Identity Proof:</strong> Aadhar, PAN or any govt ID</li>
                <li><strong>✔️ Death Certificate:</strong> Original, in case of inheritance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Khatatransfer;