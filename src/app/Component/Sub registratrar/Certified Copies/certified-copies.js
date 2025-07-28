'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certifiedcopies = () => {
  useEffect(() => {
        AOS.init({ duration: 800, once: true });
      }, []);
    
      return (
        <>
        <section className="hero-crumb">
      <div className="container text-center" data-aos="fade-down">
  <h1 className="hero-title fw-bold display-4">
  Certified Copies
  </h1>
</div>
      </section>
 
      {/* MAIN ARTICLE */}
      <section className="article-section py-5">
        <div className="container">
          <div className="featured-img mb-4" data-aos="zoom-in">
            <img
              src="/images/sub registration/gren2.jpg"
              alt="Coffee from around the world"
              className="img-fluid rounded"
            />
          </div>
          </div>
          </section>
      
    {/* CTA */}
    <section className="cta-section py-4 text-center bg-primary mb-5">
          <h2 className="info-title text-white mb-0">Book Certified Copies Services Now</h2>
        </section>
  
       {/* FORM & DOCUMENTS */}
       <section className="info-section py-5 bg-light">
          <div className="container">
            <div className="row g-5">
              {/* FORM */}
              <div className="col-md-7">
                <h3 className="fw-bold mb-4">Fill The Form For Khata Transfer Registration</h3>
                <form noValidate autoComplete="off">
                  <div className="row mb-3">
                    <div className="col">
                      <label className="form-label fw-bold">First Name *</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col">
                      <label className="form-label fw-bold">Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Email *</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Phone Number *</label>
                    <input type="tel" className="form-control" required />
                  </div>
                  <div className="mb-3 fw-bold">
              <label>Street Address *</label>
              <input type="text" className="form-control" placeholder="Street Address" required />
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="City" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Postal / Zip Code" />
              </div>
            </div>
            <div className="mb-3 fw-bold">
              <label>Deed Type</label>
              <input type="text" className="form-control" placeholder="Sale/Transfer/Gift/etc." />
            </div>
            <div className="mb-3 fw-bold">
              <label>Property Location</label>
              <input type="text" className="form-control" placeholder="e.g., Whitefield, Bangalore" />
            </div>
            <div className="row mb-3 fw-bold">
              <div className="col">
                <label>Property Type</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Flat" id="flat" />
                  <label className="form-check-label" htmlFor="flat">Flat</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Empty Plot" id="plot" />
                  <label className="form-check-label" htmlFor="plot">Empty Plot</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="BLDG" id="bldg" />
                  <label className="form-check-label" htmlFor="bldg">BLDG</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Other" id="other" />
                  <label className="form-check-label" htmlFor="other">Other</label>
                </div>
              </div>
              <div className="col">
                <label>Property Measurement</label>
                <input type="text" className="form-control" placeholder="e.g., 30x40, 1200 sqft" />
              </div>
            </div>
            <div className="mb-3 fw-bold">
              <label>Property Description</label>
              <textarea className="form-control" rows="3" placeholder="Write about property location, purpose, etc." />
            </div>
            <div className="mb-3 fw-bold">
              <label>Order Date *</label>
              <input type="date" className="form-control" required />
            </div>
            <div className="mb-3 fw-bold">
              <label>Upload a File (e.g., documents)</label>
              <input type="file" className="form-control" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="terms" required />
              <label className="form-check-label" htmlFor="terms">
                I agree to the Terms And Conditions & <a href="#">Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="btn btn-primary me-2">Submit</button>
            <button type="reset" className="btn btn-secondary">Reset</button>
          </form>
        </div>
  
   
              {/* DOCUMENTS */}
              <div className="col-md-5">
                <h3 className="fw-bold mb-4">Documents Required For Khata Transfer</h3>
                <ul className="list-unstyled lh-lg">
                  <li><strong>✔️ </strong> EC</li>
                  <li><strong>✔️ </strong> Title Deed</li>
                
                </ul>
              </div>
            </div>
          </div>
        </section>
   
  

</>
  )
}

export default Certifiedcopies