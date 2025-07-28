'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Khatatransfer = () => {
   useEffect(() => {
           AOS.init({ duration: 800, once: true });
         }, []);
         return (
           <>
             {/* HERO / BREADCRUMB */}
             <section className="hero-crumb">
             <div className="container text-center" data-aos="fade-down">
         <h1 className="hero-title fw-bold display-4">
         Gram Panchayat Khata Transfer
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
      <h4 className="text-center fw-bold mb-4">What Is Khata Transfer?</h4>
      <p>
          <strong>Khata Transfer</strong> is the process of updating property records in the local municipal or Gram Panchayat office to reflect the new owner's name following a change in ownership through sale, inheritance, gift, or a legal order. This update is essential, as it enables the new owner to pay property taxes under their name, apply for building plan approvals or bank loans, and legally establish ownership of the property.
        </p>

    
    </div>
    
  </div>
</section>

<section className="py-5">
  <div className="container">
    <div className="p-4 p-md-5 bg-white rounded-4 shadow">
      <h4 className="text-center fw-bold mb-4">Time Required for Khata Transfer</h4>
      <p>
    <strong>Khata Transfer</strong> typically takes 30 to 45 working days to process — depending on jurisdiction and documentation.
  </p>
  <div class="mb-3">
    <h6 class="fw-semibold text-dark mb-1">Karnataka (Under Sakala Services):</h6>
    <p class="mb-1">
      As per the Sakala Act, the government mandates timely delivery of services.
    </p>
    <p class="mb-0">Standard timeline: 30 to 45 days</p>
  </div>

  <div class="mb-3">
    <h6 class="fw-semibold text-dark mb-1">Factors That May Affect the Duration:</h6>
    <ul class="mb-0 ps-3">
      <li>Incomplete or missing documents</li>
      <li>Pending property tax dues or legal disputes</li>
      <li>Delays in verification by revenue officials</li>
      <li>Processing method (online via <em>e-SWATHU/BBMP</em> vs offline)</li>
    </ul>
  </div>

  <div>
    <h6 class="fw-semibold text-dark mb-1">Tip to Avoid Delays:</h6>
    <ul class="mb-0 ps-3">
      <li>Submit all documents correctly</li>
      <li>Clear any pending taxes</li>
      <li>Apply through the correct local body (BBMP, BDA, or Gram Panchayat)</li>
    </ul>
  </div>

    
    </div>
    
  </div>
</section>
</div>
</section>
<div class="container my-5">
  <h4 class="text-dark fw-bold mb-4 text-center">E-Khatha vs Revenue Khatha</h4>
  <div class="table-responsive">
    <table class="table table-bordered table-striped align-middle">
      <thead class="table-light">
        <tr className='text-center'>
          <th scope="col">Criteria</th>
          <th scope="col">E-Khatha</th>
          <th scope="col">Revenue Khatha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Legal Status</td>
          <td>Considered as a legal property</td>
          <td>Considered as an illegal or semi-legal property</td>
        </tr>
        <tr>
          <td>Jurisdiction</td>
          <td>Falls under BBMP jurisdiction</td>
          <td>Falls under local jurisdiction</td>
        </tr>
        <tr>
          <td>Transfer of Ownership</td>
          <td>Possible</td>
          <td>Not possible</td>
        </tr>
        <tr>
          <td>Loan Eligibility</td>
          <td>Loans can be availed</td>
          <td>Cannot avail loans</td>
        </tr>
        <tr>
          <td>Building & Trade Approvals</td>
          <td>Building plan, license, and trade license can be obtained</td>
          <td>Cannot obtain the same</td>
        </tr>
        <tr>
          <td>Construction Permission</td>
          <td>Permission can be granted</td>
          <td>Cannot proceed with construction</td>
        </tr>
        <tr>
          <td>Utility Connections</td>
          <td>Can apply for water and electricity</td>
          <td>Cannot apply for the same</td>
        </tr>
        <tr>
          <td>Resale</td>
          <td>Resale of property is possible</td>
          <td>Improvements/resale not permitted</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="container my-5">
  <h4 class="text-dark text-center fw-bold mb-4">Details Found in a Khata Certificate</h4>
  <div class="row g-4">
    <div class="col-md-6">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <h6 class="fw-bold">📌 Property Owner’s Name</h6>
          <p class="mb-0">Legal name of the current property owner.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <h6 class="fw-bold">📐 Size / Measurement</h6>
          <p class="mb-0">Land area or dimensions as per official records.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <h6 class="fw-bold">📍 Location of the Property</h6>
          <p class="mb-0">Address including survey number, block, and ward.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <h6 class="fw-bold">🏗️ Built-Up Area</h6>
          <p class="mb-0">Total constructed area in sq. ft. or sq. m.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <h6 class="fw-bold">🔒 Occupancy Status</h6>
          <p class="mb-0">Whether the property is vacant or occupied.</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <h6 class="fw-bold">🏘️ Purpose of Use</h6>
          <p class="mb-0">Residential, commercial, industrial, or mixed use.</p>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card border-0 shadow-sm h-100">
        <div class="card-body">
          <h6 class="fw-bold">💰 Annual Value</h6>
          <p class="mb-0">Valuation used for calculating property tax annually.</p>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
  )
}

export default Khatatransfer