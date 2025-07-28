
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Contact';
const Khataregistration = () => {

    useEffect(() => {
         AOS.init({ duration: 800, once: true });
       }, []);
       return (
         <>
           {/* HERO / BREADCRUMB */}
           <section className="hero-crumb">
           <div className="container text-center" data-aos="fade-down">
       <h1 className="hero-title fw-bold display-4">
       Gram Panchayat Khata Registration
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
      <h4 className="text-center fw-bold mb-4">What is Khata?</h4>
      <p className="mb-0">
        <strong>Khata</strong> is an official document issued by the <strong>Gram Panchayat</strong> or the local municipal authority that certifies a property’s ownership and tax assessment. It contains crucial details such as the property owner's name, property dimensions, built-up area, location, usage type (residential or commercial), tax liabilities, and the <strong>Property Identification Number (PID)</strong>.
      </p>
      <p className="mt-3 mb-0">
        It is a mandatory legal document required for property registration, transfer, obtaining building permissions, utility connections, and paying property taxes. Without a valid Khata, a property is considered irregular and may face legal or civic limitations.
      </p>
    </div>
  </div>
</section>

      
<section class="container my-5 py-5">

  {/* <!-- Title --> */}
  <div class="text-center mb-5">
    <h2 class=" fw-bold" data-aos="fade-up">
      Everything You Need to Know About the Encumbrance Certificate
    </h2>
  </div>

  {/* <!-- Form-9 --> */}
  <div class="card mb-4 shadow-sm border-0">
    <div class="card-body">
      <h3 class="text-dark card-title">What is Form-9?</h3>
      <p>
        <strong>Form-9</strong> is issued under Rule 28 (2006, amended 2013) and certifies non-agricultural properties within Gram Panchayat limits.
      </p>
      <h6 class="fw-semibold">Eligible Property Types:</h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">✔️ <strong>Converted Properties:</strong> As per Karnataka Land Revenue Act, 1964</li>
        <li class="list-group-item">✔️ <strong>Government Schemes:</strong> Basava Vasati, Ambedkar, Indira Awaas Yojana</li>
        <li class="list-group-item">✔️ <strong>Gramathana:</strong> Certified by the Tahsildar</li>
      </ul>
    </div>
  </div>

  {/* <!-- Form-11 --> */}
  <div class="card mb-4 shadow-sm border-0">
    <div class="card-body">
      <h3 class="text-dark card-title">What is Form-11?</h3>
      <p>
        <strong>Form-11</strong>, issued under Rule 30, is the Register of Demand, Collection, and Balance (DCB) for buildings and land within Panchayat areas.
      </p>
    </div>
  </div>

  {/* <!-- Purpose --> */}
  <div class="card mb-4 shadow-sm border-0">
    <div class="card-body">
      <h4 class="text-dark card-title">Purpose of Form-9 & Form-11</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">For Property Tax Assessment under Section 199 (Karnataka Panchayat Raj Act)</li>
        <li class="list-group-item">Mandatory for property registration (Circular RD 344 MUNOMU 2005)</li>
        <li class="list-group-item">Both forms must be obtained before property registration or sale in Gram Panchayat areas.</li>
      </ul>
    </div>
  </div>

  {/* <!-- How to Apply --> */}
  <div class="card mb-4 shadow-sm border-0">
    <div class="card-body">
      <h4 class="text-dark card-title mb-4">How to Apply for Form-9</h4>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h5 class="card-title fw-bold">Gramathana</h5>
              <p class="card-text">Requires a sketch certified by the Tahsildar.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h5 class="card-title fw-bold">Converted Property</h5>
              <ul class="list-unstyled">
                <li>Ownership documents</li>
                <li>Conversion order</li>
                <li>Layout plan</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h5 class="card-title fw-bold">Govt Housing Scheme</h5>
              <ul class="list-unstyled">
                <li>Hakku Patra</li>
                <li>Sanction letter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h6 class="fw-semibold">Additional Documents Required:</h6>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">Passport-size photo</li>
          <li class="list-inline-item">Aadhaar / PAN / Ration Card</li>
        </ul>
      </div>
    </div>
  </div>

  {/* <!-- Processing Time --> */}
  <div class="card mb-4 shadow-sm border-0">
    <div class="card-body">
      <h4 class="text-dark card-title">Processing Time & Restrictions</h4>
      <p><strong>Form-9</strong> is a Sakala service (since 01-Apr-2011). Max processing time: 45 days.</p>
      <h6 class="fw-semibold">Eligibility Restrictions:</h6>
      <ul>
        <li><strong>Form-9:</strong> Only for Gramathana, approved layouts, or Govt scheme properties</li>
        <li><strong>Form-11:</strong> Only if Form-9 exists or the property is listed in the DCB register</li>
      </ul>
    </div>
  </div>

  {/* <!-- Issuance & Verification --> */}
  <div class="card mb-4 shadow-sm border-0">
    <div class="card-body">
      <h4 class="text-dark card-title">Issuance & Verification</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Issued by Gram Panchayat (PDO & GP Secretary)</li>
        <li class="list-group-item">Apply online via e-SWATHU portal (first-time & reissue within 3 days)</li>
        <li class="list-group-item">Digitally signed since 15-Jun-2013 (replaces ink signatures)</li>
        <li class="list-group-item">Certificate Number: Unique verifiable ID</li>
        <li class="list-group-item">
          Verification is available via the e-SWATHU portal using the certificate number. Certificates include:
          <ul>
            <li>Hologram</li>
            <li>Watermark</li>
            <li>2D Barcode (mandatory in Bengaluru Urban/Rural & Ramanagara)</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  {/* <!-- Authorities --> */}
  <div class="card shadow-sm border-0">
    <div class="card-body">
      <h4 class="text-dark card-title">Competent Authorities</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Conversion Orders:</strong> Issued by Deputy Commissioner (Revenue Dept)</li>
        <li class="list-group-item"><strong>Layout Approval:</strong> Town Planning Authority or Director of Town Planning</li>
      </ul>
    </div>
  </div>

</section>

      
     <section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">E-Khata vs Revenue Khata</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>E-Khata</th>
            <th>Revenue Khata</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Legal Status</td>
            <td>Recognized as legal property</td>
            <td>Considered illegal or semi-legal</td>
          </tr>
          <tr>
            <td>Jurisdiction</td>
            <td>Falls under BBMP (Bruhat Bengaluru Mahanagara Palike)</td>
            <td>Falls under local bodies like Gram Panchayats</td>
          </tr>
          <tr>
            <td>Ownership Transfer</td>
            <td>Permitted</td>
            <td>Not permitted</td>
          </tr>
          <tr>
            <td>Loan Eligibility</td>
            <td>Eligible for home and property loans</td>
            <td>Not eligible for loans</td>
          </tr>
          <tr>
            <td>Building Approvals</td>
            <td>Can obtain building plan approval, building license, and trade license</td>
            <td>Not allowed</td>
          </tr>
          <tr>
            <td>Construction Permission</td>
            <td>Construction is legally permitted</td>
            <td>Construction not permitted</td>
          </tr>
          <tr>
            <td>Utility Connections</td>
            <td>Can apply for water and electricity connections</td>
            <td>Cannot apply for utility services</td>
          </tr>
          <tr>
            <td>Resale</td>
            <td>Resale of property is allowed</td>
            <td>Resale or improvements not permitted</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="py-5 khata-section bg-light">
  <div className="container">
    <div className="p-4 p-md-5 bg-white rounded-4 shadow khata-box">
      <h4 className="text-center fw-bold mb-4">Property Details Included in Khata</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Property Owner’s Name:</strong> Name of the registered owner of the property</li>
        <li className="list-group-item"><strong>Size of the Property:</strong> Exact land area or site dimensions (in sq. ft or sq. m)</li>
        <li className="list-group-item"><strong>Location:</strong> Address including street, locality, and jurisdiction area</li>
        <li className="list-group-item"><strong>Built-up Area:</strong> Total constructed area of the property</li>
        <li className="list-group-item"><strong>Occupancy Status:</strong> Indicates whether the property is vacant or occupied</li>
        <li className="list-group-item"><strong>Utilization Purpose:</strong> Purpose for which the property is used (residential, commercial, etc.)</li>
        <li className="list-group-item"><strong>Annual Value:</strong> Estimated annual rental value used for tax calculation</li>
      </ul>
    </div>
  </div>
</section>

             </div>
           </section>
      
           <Contact/>
         </>
  )
}

export default Khataregistration