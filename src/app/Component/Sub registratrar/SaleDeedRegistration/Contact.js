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
            <h2 className="fw-bold text-center mb-4">Fill The Form For Sale Deed Registration</h2>

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

              {/* Deed Type */}
              <div className="mb-3">
                <label className="form-label">Deed Type</label>
                <input type="text" className="form-control" placeholder="Deed Type" />
              </div>

              {/* Property Location */}
              <div className="mb-3">
                <label className="form-label">Property Location</label>
                <input type="text" className="form-control" placeholder="Your Property Location" />
              </div>

              {/* Property Type and Measurement */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Property Type</label>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="flat" />
                    <label className="form-check-label" htmlFor="flat">Flat</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="emptyPlot" />
                    <label className="form-check-label" htmlFor="emptyPlot">Empty Plot</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="bldg" />
                    <label className="form-check-label" htmlFor="bldg">BLDG</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="other" />
                    <label className="form-check-label" htmlFor="other">Other</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Property Measurement</label>
                  <input type="text" className="form-control" placeholder="Your Property Measurement" />
                </div>
              </div>

              {/* Property Description */}
              <div className="mb-3">
                <label className="form-label">Property Description</label>
                <textarea className="form-control" rows="3" placeholder="Your Property Description"></textarea>
              </div>

              {/* Order Date */}
              <div className="mb-3">
                <label className="form-label">Order Date</label>
                <input type="date" className="form-control" />
              </div>

              {/* Upload File */}
              <div className="mb-3">
                <label className="form-label">Upload a File</label>
                <input className="form-control" type="file" />
                <div className="form-text text-warning">Maximum File Upload Limit is 2MB</div>
              </div>

              {/* Agreement */}
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" id="termsCheck" required />
                <label className="form-check-label" htmlFor="termsCheck">
                  I agree to the <a href="#" className="text-decoration-underline">Terms And Condition</a> & <a href="#" className="text-decoration-underline">Privacy Policy</a> of Docandeed
                </label>
              </div>

              {/* Buttons */}
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
