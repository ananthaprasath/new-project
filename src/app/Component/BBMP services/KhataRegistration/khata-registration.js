'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './bbmp.css';

const KhataRegistration = () => {
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
            Khata Registration
          </h1>
        </div>
      </section>

      {/* WHAT IS KHATA */}
      <section className="info-section py-5">
        <div className="container text-center">
          <h2 className="info-title text-white mb-4" data-aos="fade-up">Know More About Khata Registration</h2>
          <div className="card info-box mx-auto p-4 shadow-sm" data-aos="fade-up" data-aos-delay="200">
            <h3 className="info-subtitle text-primary fw-bold mb-3">What Is Khata</h3>
            <p className="info-text text-dark m-0">
              KHATA is a legal document issued by BBMP (Bruhat Bengaluru Mahanagara Palike) to property owners within its limits. 
              It contains vital information such as owner's name, property dimensions, location, tax details, built-up area, and PID number.
            </p>
          </div>
        </div>
      </section>

      {/* KHATA TYPES */}
      <section className="info-section py-5">
        <div className="container text-center">
          <h2 className="info-title text-white mb-4" data-aos="fade-up">Khata Types</h2>
          <div className="card info-box table-responsive mx-auto p-4" data-aos="fade-up" data-aos-delay="200">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th><strong>A Khatha</strong></th>
                  <th><strong>B Khatha</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Legal property</td><td>Illegal/semi-legal</td></tr>
                <tr><td>BBMP jurisdiction</td><td>Local jurisdiction</td></tr>
                <tr><td>Ownership transferable</td><td>Ownership not transferable</td></tr>
                <tr><td>Loans possible</td><td>No loan facility</td></tr>
                <tr><td>Eligible for licenses</td><td>Not eligible</td></tr>
                <tr><td>Construction allowed</td><td>Construction not allowed</td></tr>
                <tr><td>Apply for water & electricity</td><td>Not applicable</td></tr>
                <tr><td>Resale possible</td><td>Resale restricted</td></tr>
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
              <li>• Property owner's name</li>
              <li>• Size and measurements</li>
              <li>• Property location</li>
              <li>• Built-up area</li>
              <li>• Vacant or occupied</li>
              <li>• Purpose of utilization</li>
              <li>• Annual value of the property</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section py-4 text-center bg-primary">
        <h2 className="info-title text-white mb-0">Book Khata Registration Documents Service Now</h2>
      </section>

      {/* FORM SECTION */}
      <section className="form-section py-5 bg-light">
        <div className="container">
          <h2 className="form-title text-center mb-5">Fill The Form For Khata Registration</h2>
          <div className="row g-4">
            {/* Form */}
            <div className="col-md-8" data-aos="fade-right">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <label>First Name *</label>
                    <input type="text" className="form-control" placeholder="First" required />
                  </div>
                  <div className="col">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label>Email *</label>
                    <input type="email" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="col">
                    <label>Phone Number *</label>
                    <input type="tel" className="form-control" placeholder="+91 81234 56789" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label>Address *</label>
                  <input type="text" className="form-control" placeholder="Your Address" required />
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="City" />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Pincode" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Ward Number / Name" />
                  </div>
                  <div className="col">
                    <input type="date" className="form-control" placeholder="Order Date *" />
                  </div>
                </div>
                <div className="mb-3">
                  <label>Your Message *</label>
                  <textarea className="form-control" rows="4" required placeholder="Your Message"></textarea>
                </div>
                <div className="mb-3">
                  <label>Upload a File (Max 2MB)</label>
                  <input type="file" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="terms" />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the Terms And Conditions & <a href="#">Privacy Policy</a>
                  </label>
                </div>
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <button type="reset" className="btn btn-secondary">Reset</button>
              </form>
            </div>

            {/* Documents Box */}
            <div className="col-md-4" data-aos="fade-left">
              <div className="docs-box p-4 shadow-sm bg-white rounded">
                <h5 className="docs-title mb-3 text-primary">📄 Documents Required For Khata Registration</h5>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item">📝 <strong>Title Deed</strong></li>
                  <li className="list-group-item">📜 <strong>Previous Deed</strong></li>
                  <li className="list-group-item">💰 <strong>Tax Paid Receipt</strong></li>
                  <li className="list-group-item">📆 <strong>E.C (Min. 5 years)</strong></li>
                </ul>
                <h5 className="docs-title mb-3 text-danger">⚠️ Documents That Vary By Case</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">🔀 <strong>Partition Gift</strong></li>
                  <li className="list-group-item">👪 <strong>Inheritance</strong></li>
                  <li className="list-group-item">🏛️ <strong>Court Decree</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KhataRegistration;
