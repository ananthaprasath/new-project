'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(value);
  };

  return (
    <div className="bg-light py-5 px-3 d-flex justify-content-center">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h2 className="fw-bold text-center mb-4">Apply for Khata Registration Online</h2>
            <form>
              <div className="row mb-3">
                <div className="col-md-6 mb-2">
                  <label className="form-label">First Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" placeholder="First Name" required />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-2">
                  <label className="form-label">Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" placeholder="you@example.com" required />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="8123456789"
                    value={phone}
                    onChange={handlePhoneChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <input type="text" className="form-control" placeholder="Full Address" required />
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-2">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" placeholder="City" />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label">Pincode</label>
                  <input type="text" className="form-control" placeholder="Pincode" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-2">
                  <label className="form-label">Ward Number / Name</label>
                  <input type="text" className="form-control" placeholder="Ward Name or Number" />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label">Order Date <span className="text-danger">*</span></label>
                  <input type="date" className="form-control" required />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Your Message <span className="text-danger">*</span></label>
                <textarea className="form-control" rows="3" placeholder="Your message here..." required></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Upload a File</label>
                <input className="form-control" type="file" />
                <div className="form-text text-warning">Maximum File Upload Limit is 2MB</div>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="termsCheck" required />
                <label className="form-check-label" htmlFor="termsCheck">
                  I agree to the <a href="#" className="text-decoration-underline">Terms and Conditions</a> & <a href="#" className="text-decoration-underline">Privacy Policy</a> of Docandeed
                </label>
              </div>

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-danger px-4">Submit</button>
                <button type="reset" className="btn btn-secondary px-4">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
