'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BuildingplanapprovalFaq from './BuildingplanapprovalFaq';

const Buildingplanapproval = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* HERO / BREADCRUMB */}
      <section className="hero-crumb">
      <div className="container text-center" data-aos="fade-down">
  <h1 className="hero-title fw-bold display-4">
  BBMP Building Plan Approval
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
    Everything You Need to Know About BBMP Building Plan Approval
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      BBMP Building Plan Approval is a mandatory legal process required before starting any construction in Bangalore under the BBMP limits. It ensures that your building complies with zoning regulations, safety norms, and civic infrastructure planning.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      The approved plan includes detailed architectural drawings, site layout, floor-wise usage, and setbacks. It serves as a blueprint for lawful construction and safeguards you from penalties or demolition notices.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “A BBMP-approved plan is not just paperwork — it’s your foundation for legal and safe construction.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      Always work with a certified architect or planner when applying. Make sure your land has a clear title, valid Khata, and falls under BBMP jurisdiction to avoid delays or rejections in the approval process.
    </p>
  </div>
</section>


<section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Document Comparison – Building Plan vs Completion Certificate</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Building Plan Approval</th>
            <th>Completion Certificate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Required before starting any construction</td>
            <td>Issued after construction is completed</td>
          </tr>
          <tr>
            <td>Approved by BBMP’s Town Planning Authority</td>
            <td>Issued by BBMP after on-site inspection</td>
          </tr>
          <tr>
            <td>Includes architectural and structural drawings</td>
            <td>Confirms building was constructed as per plan</td>
          </tr>
          <tr>
            <td>Needed to obtain water, electricity connections</td>
            <td>Needed for property tax assessment and Khata</td>
          </tr>
          <tr>
            <td>Must follow zonal and FAR regulations</td>
            <td>Validates adherence to BBMP bylaws</td>
          </tr>
          <tr>
            <td>Application includes ownership and land documents</td>
            <td>Applicant submits as-built drawings for review</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="py-5 bbmp-section">
  <div className="container">
    <div className="p-4 rounded-4 shadow bbmp-box">
      <h4 className="text-center fw-bold text-primary mb-4">🏗️ BBMP Building Plan Approval – Key Inclusions</h4>
      <ul className="list-unstyled fs-5">
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-person-check-fill me-2 text-dark"></i>
          <span>Owner’s identity and ownership documents</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-map-fill me-2 text-dark"></i>
          <span>Site plan and land measurement documents</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-buildings-fill me-2 text-dark"></i>
          <span>Architectural design with building layout</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-file-earmark-medical-fill me-2 text-dark"></i>
          <span>Structural stability and safety certificates</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-journal-check me-2 text-dark"></i>
          <span>Sanctioned building plan from a licensed architect</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-shield-lock-fill me-2 text-dark"></i>
          <span>Fire NOC and other safety clearances (if applicable)</span>
        </li>
        <li className="mb-3 d-flex align-items-start">
          <i className="bi bi-bank me-2 text-dark"></i>
          <span>Tax-paid receipts and BBMP property records</span>
        </li>
      </ul>
    </div>
  </div>
</section>

        </div>
      </section>
   <BuildingplanapprovalFaq/>
    </>
  );
};

export default Buildingplanapproval;
