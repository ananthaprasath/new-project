'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Powerofattorney = () => {
 useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* HERO / BREADCRUMB */}
      <section className="hero-crumb">
      <div className="container text-center" data-aos="fade-down">
  <h1 className="hero-title fw-bold display-4">
   Encumbrance Certificate
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
  Everything You Need to Know About Encumbrance Certificate
  </h2>
 
  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
    An Encumbrance Certificate (EC) is a vital legal document that certifies a property is free from monetary or legal liabilities. It is issued by the relevant government authorities—like the Sub-Registrar’s office—and is essential during property transactions, loan approvals, or ownership transfers.
    </p>
 
    <p data-aos="fade-up" data-aos-delay="300">
    It includes vital details like ownership history, sale transaction dates, registration details, property description, and any mortgages or legal liabilities associated with the property. A valid Encumbrance Certificate ensures your land is free from encumbrances and officially recognized for development, resale, or financing.
    </p>
 
    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “An Encumbrance Certificate is not just a formality—it's your assurance that the property you’re buying is free and clear.”
      </blockquote>
      <ul>
        <li>Verify the EC from the local sub-registrar</li>
        <li>Check for the correct duration (at least past 13–30 years)</li>
        <li>Consult a legal expert for authenticity</li>
      </ul>
    

 
    <p data-aos="fade-up" data-aos-delay="500">
    Always consult a legal expert before purchasing any plot. Ensure the property has a clear title, is free from encumbrances,
    and has a valid Encumbrance Certificate for a smooth registration process and future resale.
    </p>
  </div>
</section>
 
<section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Key Features of an Encumbrance Certificate</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Issued By</td>
            <td>Sub-Registrar’s Office (where the property is registered)</td>
          </tr>
          <tr>
            <td>Purpose</td>
            <td>To ensure the property is free from encumbrances like loans or liens</td>
          </tr>
          <tr>
            <td>Time Period</td>
            <td>Can be issued for a specific period (e.g., last 10 or 15 years)</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>Form 15: Shows transactions (encumbrances)
            - Form 16: No transactions (no encumbrance)</td>
          </tr>
          <tr>
            <td>Required Documents</td>
            <td>Property details, title deed, owner details, application form</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  </div>
</section>
<section className="py-5 khata-section">
  <div className="container">
    <div className="p-4 rounded-4 shadow khata-box">
      <h4 className="text-center fw-bold text-primary mb-4">How to Get an EC</h4>
      <ul className="list-unstyled fs-5">
      <li className="mb-3 d-flex align-items-start">
  <i className="bi bi-building-check me-2 text-dark"></i>
  <span>Visit the local Sub-Registrar’s Office or apply online (varies by state).</span>
</li>

<li className="mb-3 d-flex align-items-start">
  <i className="bi bi-file-earmark-text me-2 text-dark"></i>
  <span>Property details</span>
</li>

<li className="mb-3 d-flex align-items-start">
  <i className="bi bi-file-richtext me-2 text-dark"></i>
  <span>Title deed copy</span>
</li>

<li className="mb-3 d-flex align-items-start">
  <i className="bi bi-person-vcard-fill me-2 text-dark"></i>
  <span>Identity/address proof</span>
</li>

<li className="mb-3 d-flex align-items-start">
  <i className="bi bi-cash-coin me-2 text-dark"></i>
  <span>Application fee</span>
</li>

<li className="mb-3 d-flex align-items-start">
  <i className="bi bi-clock-history me-2 text-dark"></i>
  <span>Receive the certificate within a few days to weeks.</span>
</li>

       
      </ul>
    </div>
  </div>
</section>
        </div>
      </section>
 
      
    </>
  )
}

export default Powerofattorney