'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Taxpayment = () => {
  useEffect(() => {
             AOS.init({ duration: 800, once: true });
           }, []);
           return (
             <>
               {/* HERO / BREADCRUMB */}
               <section className="hero-crumb">
               <div className="container text-center" data-aos="fade-down">
           <h1 className="hero-title fw-bold display-4">
           Gram Panchayat Tax Payments
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
      <h4 className="text-center fw-bold mb-4">What is Property Tax?</h4>
      <p>
    Property tax is a Property tax is a levy imposed by local government authorities on property owned by individuals or legal entities. It is typically calculated based on the assessed value of the property, including land and any buildings on it. This tax serves as a major source of revenue for local bodies such as municipalities or gram panchayats and is used to fund public services like sanitation, road maintenance, and infrastructure development. In some regions, property tax may also apply to tangible personal property like vehicles or boats. The property owner is legally obligated to pay this tax, usually on an annual basis.</p>
  
    </div>
  </div>
</section>
</div>
</section>
<div class="container my-3">
  <h3 class="text-center fw-bold mb-4">How Property Tax Is Determined</h3>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Overview</h5>
      <p class="card-text">
        Property tax is calculated by multiplying the property’s current market value by the applicable tax rate set by the local government.
        This rate is typically reviewed and adjusted annually by the local tax authority.
      </p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title ">What’s Taxed?</h5>
      <p class="card-text">
        Most property taxes apply to real property — which includes land, buildings, and permanent structures.
        This classification is defined and regulated by state and local laws.
      </p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Who Assesses the Property?</h5>
      <p class="card-text">
        A tax assessor, either appointed or elected by the local municipality, evaluates the market value of properties in the area.
        Based on this valuation, your property is assigned an assessed value, which becomes the basis for your property tax bill.
      </p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">When and How Do You Pay?</h5>
      <p class="card-text">
        Payment schedules vary by region — some require annual payments, while others may ask for biannual or quarterly installments.
        Municipalities often provide online portals for easier tax payments.
      </p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Can You Dispute Your Tax Amount?</h5>
      <p class="card-text">
        Yes. Property owners have the right to dispute the assessed value or the tax rate.
        Local tax offices typically offer formal procedures for appealing or negotiating property tax bills.
      </p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">What Happens If You Don’t Pay?</h5>
      <p class="card-text">
        If property taxes remain unpaid, the local authority may place a lien on the property.
        This legal claim can complicate resale and, in extreme cases, lead to the loss of the property.
        It's crucial to verify any existing liens before buying a property.
      </p>
    </div>
  </div>
</div>

<div class="container my-4">
  <div class="card shadow-sm border-secondary">
    <div class="card-body">
      <h5 class="card-title fw-bold text-center">Definition of Built-up Area (Rule 2(vi))</h5>
      <p class="card-text">
        <strong>Built-up Area</strong> includes all areas covered by buildings above the plinth level, such as:
      </p>
      <ul>
        <li>Basement, mezzanine floors, balconies (covered or uncovered)</li>
        <li>Garages, constructed swimming pool boundaries</li>
        <li>Fuel storage tanks (above or below ground)</li>
        <li>Open storage for materials like timber, granite, bricks</li>
        <li>Stilt areas meant for parking</li>
        <li>Telecommunication towers, hoardings on land or rooftops</li>
      </ul>

      <p class="fw-bold mt-3">Exclusions:</p>
      <ul>
        <li>Ground-level courtyards, gardens, rocky areas, wells, overhead tanks, fountains</li>
        <li>Drainage structures such as culverts, conduits, and gutters</li>
        <li>Compound walls, uncovered stairs, small watchman booths (up to 3 sq. m), sump tanks</li>
      </ul>
    </div>
  </div>
</div>




               </>
            
  )
}

export default Taxpayment