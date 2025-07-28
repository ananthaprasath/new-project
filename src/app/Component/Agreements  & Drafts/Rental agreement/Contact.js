'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value.replace(/\D/g, '').slice(0, 10));
  };

  const handleReset = () => {
    document.getElementById('rental-form').reset();
    setPhone('');
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="border p-4 rounded shadow-sm" style={{ width: '100%', maxWidth: '900px' }}>
        <h3 className="text-center mb-4 fw-bold">Fill The Form For Rental Agreement</h3>

        <form id="rental-form">
          {/* Contact Info */}
          <div className="row mb-3">
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="First Name *" required /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Last Name" /></div>
            <div className="col-md-3 mb-2"><input type="email" className="form-control" placeholder="Email *" required /></div>
            <div className="col-md-3 mb-2">
              <input type="tel" className="form-control" placeholder="Phone Number *" value={phone} onChange={handlePhoneChange} required />
            </div>
          </div>

          {/* Property Info */}
          <div className="row mb-3">
            <div className="col-md-3 mb-2">
              <select className="form-select" required>
                <option>Select Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Independent House</option>
              </select>
            </div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="House Number" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Building Name" /></div>
            <div className="col-md-3 mb-2">
              <select className="form-select">
                <option>Select BHK Type</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4 BHK</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 mb-2"><input type="text" className="form-control" placeholder="Street Address" /></div>
            <div className="col-md-4 mb-2"><input type="text" className="form-control" placeholder="Street Address Line 2" /></div>
            <div className="col-md-2 mb-2"><input type="text" className="form-control" placeholder="City" /></div>
            <div className="col-md-2 mb-2"><input type="text" className="form-control" placeholder="Postal / Zip Code" /></div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 mb-2"><input type="text" className="form-control" placeholder="Flat/House Built-up Area *" required /></div>
            <div className="col-md-4 mb-2"><input type="text" className="form-control" placeholder="Floor Number" /></div>
            <div className="col-md-4 mb-2"><input type="number" className="form-control" placeholder="Number of Bathrooms" /></div>
          </div>

          <div className="form-check form-check-inline mb-3">
            <input className="form-check-input" type="checkbox" id="nonRes" />
            <label className="form-check-label" htmlFor="nonRes">Non-Residential</label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input className="form-check-input" type="checkbox" id="res" />
            <label className="form-check-label" htmlFor="res">Residential</label>
          </div>

          {/* Owner Details */}
          <h5 className="mt-4">Owner Details</h5>
          <div className="row mb-3">
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Owner First Name" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Owner Last Name" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="S/o, D/o, W/o" /></div>
            <div className="col-md-3 mb-2"><input type="number" className="form-control" placeholder="Owner Age" /></div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Owner Address" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="City" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Postal / Zip Code" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Owner Aadhaar Number *" required /></div>
          </div>
          <div className="mb-3"><input type="text" className="form-control" placeholder="Owner PAN Number" /></div>

          {/* Tenant Details */}
          <h5 className="mt-4">Tenant Details</h5>
          <div className="row mb-3">
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Tenant First Name" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Tenant Last Name" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="S/o, D/o, W/o" /></div>
            <div className="col-md-3 mb-2"><input type="number" className="form-control" placeholder="Tenant Age" /></div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Tenant Address" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="City" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Postal / Zip Code" /></div>
            <div className="col-md-3 mb-2"><input type="text" className="form-control" placeholder="Tenant Aadhaar Number *" required /></div>
          </div>
          <div className="mb-3"><input type="text" className="form-control" placeholder="Tenant PAN Number" /></div>

          {/* Additional Tenants */}
          <h5 className="mt-4">Additional Tenants (Optional)</h5>
          <div className="row mb-3">
            <div className="col-md-2 mb-2"><input type="text" className="form-control" placeholder="2nd Tenant Name" /></div>
            <div className="col-md-2 mb-2"><input type="text" className="form-control" placeholder="2nd S/o, D/o, W/o" /></div>
            <div className="col-md-2 mb-2"><input type="number" className="form-control" placeholder="2nd Tenant Age" /></div>
            <div className="col-md-2 mb-2"><input type="text" className="form-control" placeholder="3rd Tenant Name" /></div>
            <div className="col-md-2 mb-2"><input type="text" className="form-control" placeholder="3rd S/o, D/o, W/o" /></div>
            <div className="col-md-2 mb-2"><input type="number" className="form-control" placeholder="3rd Tenant Age" /></div>
          </div>

          {/* Agreement Dates */}
          <h5 className="mt-4">Agreement Dates</h5>
          <div className="row mb-3">
            <div className="col-md-6 mb-2"><input type="date" className="form-control" required /></div>
            <div className="col-md-6 mb-2"><input type="date" className="form-control" required /></div>
          </div>

          {/* Payment Info */}
          <h5 className="mt-4">Payment Info</h5>
          <div className="row mb-3">
            <div className="col-md-4 mb-2">
              <select className="form-select" required>
                <option>Select Payment Mode</option>
                <option>UPI</option>
                <option>Cash</option>
                <option>Cheque</option>
                <option>Credit/Debit/Netbanking</option>
              </select>
            </div>
            <div className="col-md-4 mb-2"><input type="text" className="form-control" placeholder="Monthly Rent" /></div>
            <div className="col-md-4 mb-2"><input type="text" className="form-control" placeholder="Security Amount" /></div>
          </div>

          <div className="mb-3">
            <textarea className="form-control" rows="3" placeholder="Additional Notes or Conditions"></textarea>
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
  );
};

export default Contact;
