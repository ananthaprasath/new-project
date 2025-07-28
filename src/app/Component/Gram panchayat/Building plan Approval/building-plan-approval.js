
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
            Gram Panchayat Building Plan Approval
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
               <section className="py-5">
  <div className="container">
    <div className="p-4 p-md-5 bg-white rounded-4 shadow">
      <h4 className="text-center fw-bold mb-4">Know More About Gram Panchayat Building Plan Approval
      </h4>
      <p className="mb-0">
        <strong>Gram Panchayat Building Plan Approval </strong> is a legal process that allows property owners to obtain permission from the village-level authority to construct or modify buildings within rural areas. Before any construction begins, the proposed plan must be submitted to the Gram Panchayat for review. The plan typically includes structural drawings, site layout, usage details (residential, commercial, etc.), and property ownership documents.

Approval ensures the building complies with local zoning rules, setback regulations, and sanitation norms. Without this approval, the construction may be deemed unauthorized, which can lead to penalties, demolition, or denial of essential services like water and electricity.
</p>
    </div>
  </div>
</section>
</div>
</section>

<div className="container my-3">
  <h2 className="fw-bold mb-4 text-dark text-center">
    Gram Panchayat Building Plan Approval – Step-by-Step Process
  </h2>
  <ol className="list-group list-group-numbered">
    <li className="list-group-item">
      <strong>Online Application Submission:</strong> Submit the building plan application through the official online portal (if applicable in your state).
    </li>
    <li className="list-group-item">
      <strong>Payment of Scrutiny/Processing Fee:</strong> Pay the required license or scrutiny fees online as part of the application.
    </li>
    <li className="list-group-item">
      <strong>Upload Documents and Drawings:</strong> Attach scanned copies of:
      <ul className="mt-2">
        <li>Ownership records (RTC, Title Deed, Khata, etc.)</li>
        <li>Proposed building drawings</li>
        <li>Identity/address proof</li>
      </ul>
    </li>
    <li className="list-group-item">
      <strong>Document & Drawing Verification:</strong> The Panchayat authority will verify the documents and ensure the plan complies with building norms and zoning rules.
    </li>
    <li className="list-group-item">
      <strong>Site Inspection:</strong> A Panchayat-appointed engineer will inspect the proposed construction site physically.
    </li>
    <li className="list-group-item">
      <strong>Issue of Demand Note:</strong> If the application and site inspection are in order, a demand note will be issued for payment of the requisite approval fees.
    </li>
    <li className="list-group-item">
      <strong>Payment of Requisite Fees:</strong> The applicant must pay the balance fees online (as per the demand note).
    </li>
    <li className="list-group-item">
      <strong>Download Acknowledgment/Receipt:</strong> Once payment is confirmed, download the official receipt or acknowledgment for your records.
    </li>
    <li className="list-group-item">
      <strong>Approval Issuance:</strong> The Building Plan Approval will be issued within 30 days, subject to compliance with all requirements.
    </li>
  </ol>
</div>

<div className="container my-5">
  <h2 className="fw-bold text-dark text-center mb-3">Cost of Building Plan Sanction – Bangalore Rural</h2>
  <p>
    The cost for obtaining building plan approval in Bangalore Rural typically ranges from ₹20,000 to ₹80,000. This cost can vary based on several important factors, including:
  </p>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">
       <strong>Site Dimensions:</strong> Plot size in square feet/meters.
    </li>
    <li className="list-group-item">
       <strong>Type of Construction:</strong> Whether the building is residential or commercial.
    </li>
    <li className="list-group-item">
       <strong>Built-up Area:</strong> Total construction area covered by the plan.
    </li>
    <li className="list-group-item">
      <strong>Approving Authority:</strong> Costs vary depending on the jurisdiction, such as:
      <ul className="mt-2">
        <li>BBMP (Bruhat Bengaluru Mahanagara Palike)</li>
        <li>BDA (Bangalore Development Authority)</li>
        <li>BMRDA (Bangalore Metropolitan Region Development Authority)</li>
        <li>Gram Panchayat or Local Planning Authority</li>
      </ul>
    </li>
  </ul>
</div>


            </>
  )
}

export default Buildingplanapproval