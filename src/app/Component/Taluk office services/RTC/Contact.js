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
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h2 className="fw-bold text-center mb-4">Fill The Form For RTC Registration</h2>

            <form>
              {/* Name Fields */}
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

              {/* Email and Phone */}
              <div className="row mb-3">
                <div className="col-md-6 mb-2">
                  <label className="form-label">Email <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label">Phone <span className="text-danger">*</span></label>
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

              {/* Address */}
              <div className="mb-3">
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <input type="text" className="form-control mb-2" placeholder="Street Address" required />
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="City" />
                  </div>
                  <div className="col-md-6 mt-2 mt-md-0">
                    <input type="text" className="form-control" placeholder="Postal / Zip Code" />
                  </div>
                </div>
              </div>

              {/* Property Location & Years */}
              <div className="row mb-3">
                <div className="col-md-6 mb-2">
                  <label className="form-label">Property Location</label>
                  <input type="text" className="form-control" placeholder="Property Location" />
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label">How Many Years</label>
                  <input type="text" className="form-control" placeholder="How Many Years" />
                </div>
              </div>

              {/* Order Date */}
              <div className="mb-3">
                <label className="form-label">Order Date <span className="text-danger">*</span></label>
                <input type="date" className="form-control" required />
              </div>

              {/* Upload File */}
              <div className="mb-3">
                <label className="form-label">Upload a File</label>
                <input className="form-control" type="file" />
                <div className="form-text text-warning">Maximum File Upload Size Limit Is 2MB</div>
              </div>

              {/* Agreement */}
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="termsCheck" required />
                <label className="form-check-label" htmlFor="termsCheck">
                  I agree to the <a href="#" className="text-decoration-underline">Terms And Condition</a> & <a href="#" className="text-decoration-underline">Privacy Policy</a> of Docandeed
                </label>
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-start">
                <button type="submit" className="btn btn-danger px-4">Submit</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
