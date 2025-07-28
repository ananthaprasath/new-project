
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Khataextractcertificate = () => {
  useEffect(() => {
               AOS.init({ duration: 800, once: true });
             }, []);
             return (
               <>
                 {/* HERO / BREADCRUMB */}
                 <section className="hero-crumb">
                 <div className="container text-center" data-aos="fade-down">
             <h1 className="hero-title fw-bold display-4">
             Gram Panchayat Khata Extract & Certificate
             </h1>
             </div>
             </section>
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
      <h4 className="text-center fw-bold mb-4">What is Khata Extract?</h4>
      <p className="mb-0">
        <strong>Khata Extract </strong>  is an official record issued by the local municipal body or Gram Panchayat that provides detailed property information as listed in the property register. It is a key document used for verifying property ownership and property tax assessment.</p>
     </div>
  </div>
</section>

  <div className="container">
    <div className="p-4 p-md-5 bg-white rounded-4 shadow">
      <h4 className="text-center fw-bold mb-4">What is Khata Certificate ?</h4>
      <p className="mb-0">
        <strong>Khata Certificate </strong>A Khata Certificate is an official document issued by the municipal authority or Gram Panchayat that certifies a particular property is registered in the name of the owner in the records of the local body.It is primarily used for property tax assessment, ownership verification, and for applying for utilities and licenses.</p>
     </div>
  </div>

</div>
</section>

<div className="container my-5">
  <h4 className="fw-bold text-dark text-center mb-4">E-Khatha vs Revenue Khatha</h4>
  <div className="table-responsive">
    <table className="table table-bordered table-striped">
      <thead className="table-primary">
        <tr>
          <th>Feature</th>
          <th>E-Khatha</th>
          <th>Revenue Khatha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Legal Status</td>
          <td>Recognized as a legal property</td>
          <td>Considered semi-legal or unauthorized</td>
        </tr>
        <tr>
          <td>Jurisdiction</td>
          <td>Under BBMP or municipal authority</td>
          <td>Under Gram Panchayat or local body</td>
        </tr>
        <tr>
          <td>Ownership Transfer</td>
          <td>Transfer is permitted</td>
          <td>Transfer is not officially permitted</td>
        </tr>
        <tr>
          <td>Loan Eligibility</td>
          <td>Eligible for bank loans</td>
          <td>Not eligible for loans</td>
        </tr>
        <tr>
          <td>Approvals</td>
          <td>Building, trade licenses can be obtained</td>
          <td>Approvals cannot be obtained</td>
        </tr>
        <tr>
          <td>Construction Permission</td>
          <td>Allowed with proper approvals</td>
          <td>Not allowed legally</td>
        </tr>
        <tr>
          <td>Utility Connections</td>
          <td>Can apply for water & electricity</td>
          <td>Cannot apply for civic utilities</td>
        </tr>
        <tr>
          <td>Resale</td>
          <td>Permitted and supported</td>
          <td>Resale may be restricted</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="container my-5">
      <h4 className="fw-bold text-dark text-center mb-4">Key Fields in a Khata Certificate</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Owner’s Name:</strong> Full legal name of the individual or entity that holds ownership rights to the property.
        </li>
        <li className="list-group-item">
          <strong>Property Dimensions:</strong> Total measured area of the land or property, usually recorded in square feet or square meters.
        </li>
        <li className="list-group-item">
          <strong>Property Location:</strong> Detailed address including ward number, village or locality name, survey number, and zone.
        </li>
        <li className="list-group-item">
          <strong>Built-up Area:</strong> Total constructed space on the property, used for approvals and tax assessments.
        </li>
        <li className="list-group-item">
          <strong>Occupancy Status:</strong> Indicates whether the property is currently in use (occupied) or vacant.
        </li>
        <li className="list-group-item">
          <strong>Usage Type:</strong> Specifies the intended use of the property — residential, commercial, industrial, or mixed-use.
        </li>
        <li className="list-group-item">
          <strong>Annual Property Value:</strong> An estimated annual valuation of the property used for calculating property tax liabilities.
        </li>
      </ul>
    </div>

</>
  )
}

export default Khataextractcertificate