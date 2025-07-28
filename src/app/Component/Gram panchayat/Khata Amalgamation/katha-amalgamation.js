

'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Kathaamalgamation = () => {
  useEffect(() => {
           AOS.init({ duration: 800, once: true });
         }, []);
         return (
           <>
             {/* HERO / BREADCRUMB */}
             <section className="hero-crumb">
             <div className="container text-center" data-aos="fade-down">
         <h1 className="hero-title fw-bold display-4">
         Gram Panchayat Khata Amalgamation
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
      <h4 className="text-center fw-bold mb-4">Khata Amalgamation</h4>
      <p>
        <strong>Khata Amalgamation</strong> is the process of merging two or more Khatas (property accounts) into a single unified Khata, typically done when adjacent properties are combined under one ownership.
      </p>

      <ul class="list-group list-group-flush my-3">
        <li class="list-group-item">
           <strong>Time Required:</strong> Approximately 30 days for processing
        </li>
        <li class="list-group-item">
          <strong>Processing Fee:</strong> 2% of the stamp duty paid at the time of registration
        </li>
      </ul>

      <div class="alert alert-warning mt-3" role="alert">
         Ensure all property tax dues are cleared and ownership documents are in order before applying.
      </div>
    </div>
  </div>
</section>

</div>
</section>

<div class="container my-5">
  <h4 class="text-dark text-center fw-bold mb-4">Comparison: E Khatha vs Revenue Khatha</h4>
  <div class="table-responsive">
    <table class="table table-bordered table-striped align-middle">
      <thead class="table-light">
        <tr>
          <th>Criteria</th>
          <th>E Khatha</th>
          <th>Revenue Khatha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Legality</td>
          <td>Considered a legal property</td>
          <td>Considered illegal or semi-legal</td>
        </tr>
        <tr>
          <td>Jurisdiction</td>
          <td>Falls under BBMP jurisdiction</td>
          <td>Falls under local jurisdiction (e.g., Gram Panchayat)</td>
        </tr>
        <tr>
          <td>Ownership Transfer</td>
          <td>Transfer of ownership is possible</td>
          <td>Ownership transfer not permitted</td>
        </tr>
        <tr>
          <td>Loan Eligibility</td>
          <td>Loans can be availed</td>
          <td>Loans cannot be availed</td>
        </tr>
        <tr>
          <td>Building Plan Approvals</td>
          <td>Can obtain building, trade licenses</td>
          <td>Cannot obtain such approvals</td>
        </tr>
        <tr>
          <td>Construction Permission</td>
          <td>Construction is permitted</td>
          <td>Construction is not permitted</td>
        </tr>
        <tr>
          <td>Utility Connections</td>
          <td>Can apply for water and electricity</td>
          <td>Cannot apply for utilities</td>
        </tr>
        <tr>
          <td>Property Resale</td>
          <td>Resale of property is allowed</td>
          <td>Resale or improvements not allowed</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="container my-5">
  <h4 class="fw-bold text-dark text-center mb-4">Key Fields in a Khata Certificate</h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Property Owner’s Name:</strong> Name of the person holding legal rights to the property</li>
    <li class="list-group-item"><strong>Size / Measurement:</strong> Area of the property in square feet/meters (as per records)</li>
    <li class="list-group-item"><strong>Location:</strong> Address details including survey number, ward, and locality</li>
    <li class="list-group-item"><strong>Built-up Area:</strong> Total constructed area of the property</li>
    <li class="list-group-item"><strong>Occupancy Status:</strong> Whether the property is occupied or vacant</li>
    <li class="list-group-item"><strong>Purpose of Utilization:</strong> Residential, commercial, industrial, or mixed-use</li>
    <li class="list-group-item"><strong>Annual Value:</strong> Estimated annual value used for property tax calculation</li>
  </ul>
</div>


</>
  )
}

export default Kathaamalgamation