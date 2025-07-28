
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Khatabefurcation = () => {
  useEffect(() => {
             AOS.init({ duration: 800, once: true });
           }, []);
           return (
             <>
               {/* HERO / BREADCRUMB */}
               <section className="hero-crumb">
               <div className="container text-center" data-aos="fade-down">
           <h1 className="hero-title fw-bold display-4">
           Gram Panchayat Khata Bifurcation
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
      <h4 className="text-center fw-bold mb-4">What is Khata Bifurcation ?</h4>
      <p className="mb-0">
        <strong>Khata Bifurcation </strong>  is the process of dividing a single Khata into two or more separate Khatas when a property is legally split among different owners. This typically occurs in cases of inheritance, partition, or sale of a portion of the property. Once bifurcated, each new property portion is assigned a separate Khata certificate and property tax account. The process generally takes around 30 to 45 days and requires submission of legal ownership documents, along with a processing fee as applicable by the local municipal authority such as BBMP, BDA, or the Gram Panchayat.</p>
     
    </div>
  </div>
</section>
</div>
</section>

<div class="container my-5">
  <h4 class="fw-bold text-dark text-center mb-4">Difference Between E-Khatha and Revenue Khatha</h4>
  <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead class="table-primary">
        <tr>
          <th>Feature</th>
          <th>E-Khatha</th>
          <th>Revenue Khatha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Legal Status</td>
          <td>Considered a legally recognized property</td>
          <td>Not fully legal; considered semi-legal or irregular</td>
        </tr>
        <tr>
          <td>Jurisdiction</td>
          <td>Falls under BBMP or Municipal limits</td>
          <td>Falls under Village Panchayat or non-BBMP limits</td>
        </tr>
        <tr>
          <td>Ownership Transfer</td>
          <td>Ownership transfer is allowed</td>
          <td>Ownership transfer is not allowed until regularized</td>
        </tr>
        <tr>
          <td>Loan Eligibility</td>
          <td>Loans can be availed from banks</td>
          <td>Not eligible for bank loans</td>
        </tr>
        <tr>
          <td>Building & Trade Licenses</td>
          <td>Eligible for building plan approval, license, and trade license</td>
          <td>Not eligible for approvals or licenses</td>
        </tr>
        <tr>
          <td>Construction Permission</td>
          <td>Construction is permitted</td>
          <td>Construction is not permitted</td>
        </tr>
        <tr>
          <td>Utility Connections</td>
          <td>Can apply for water and electricity connections</td>
          <td>Cannot apply for utility connections</td>
        </tr>
        <tr>
          <td>Property Resale</td>
          <td>Property can be sold legally</td>
          <td>Resale is restricted or not permitted</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="container my-5">
  <h4 class="fw-bold text-dark text-center mb-4">Key Details in a Khata Certificate</h4>
  
  <ul class="list-group list-group-flush mt-3">
    <li class="list-group-item">
      <strong>Property Owner’s Name:</strong> The legal name of the individual or entity that owns the property.
    </li>
    <li class="list-group-item">
      <strong>Size or Measurement of the Property:</strong> The total area of the property, recorded in square feet or square meters, based on official survey or layout documents.
    </li>
    <li class="list-group-item">
      <strong>Location of the Property:</strong> The address of the property, including details like ward number, survey number, locality/village, and administrative zone.
    </li>
    <li class="list-group-item">
      <strong>Built-up Area:</strong> The constructed area within the property boundary, which is relevant for tax and building approvals.
    </li>
    <li class="list-group-item">
      <strong>Occupancy Status:</strong> Indicates whether the property is currently occupied or vacant, which can affect tax liability.
    </li>
    <li class="list-group-item">
      <strong>Purpose of Utilization:</strong> The designated use of the property — such as residential, commercial, industrial, or mixed-use.
    </li>
    <li class="list-group-item">
      <strong>Annual Value:</strong> The estimated annual rental or market value of the property, used as a basis for property tax calculation.
    </li>
  </ul>
</div>


       </>
  )
}

export default Khatabefurcation