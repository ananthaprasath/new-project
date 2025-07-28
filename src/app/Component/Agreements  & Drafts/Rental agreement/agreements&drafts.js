'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Contact';

const Agreementsdrafts = () => {
  useEffect(() => {
           AOS.init({ duration: 800, once: true });
         }, []);
         return (
           <>
             {/* HERO / BREADCRUMB */}
             <section className="hero-crumb">
             <div className="container text-center" data-aos="fade-down">
         <h1 className="hero-title fw-bold display-4">
         Rental Agreement
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
      <h4 className="text-center fw-bold mb-4">What is a Rental Agreement?</h4>
      <p className="mb-0">
        <strong>A rental agreement</strong>is a legally binding contract between a property owner (landlord) and a tenant. It allows the tenant to use the property for residential or commercial purposes for a specific period in exchange for rent.</p>
      
    </div>
</div>
</section>
<div className="container">
    <div className="p-4 p-md-5 bg-white rounded-4 shadow">
      <h4 className="text-center fw-bold mb-4"> Key Elements of a Rental Agreement:</h4>
      <p className="mb-0">
      A rental agreement is a legally binding document that outlines the terms and conditions under which a property is rented. It typically includes the names and details of the landlord and tenant, the address and description of the rented property, and the duration of the lease — often 11 months in India. The agreement specifies the monthly rent amount, payment due date, mode of payment, and security deposit details. It also outlines responsibilities related to maintenance, utility bills, and repairs. Important clauses may include rules on subletting, termination notice period, rent escalation, and conditions under which the agreement can be renewed or terminated. By clearly defining the obligations and expectations of both parties, a rental agreement helps prevent disputes and ensures a smooth rental experience.

</p>
     </div>
  </div>

  <div className="container mt-5">
    <div className="p-4 p-md-5 bg-white rounded-4 shadow">
      <h4 className="text-center fw-bold mb-4">validity of a Rental Agreement:</h4>
      <p className="mb-0">
      In India, a rental agreement is typically valid for 11 months to avoid mandatory registration under the Rent Control Laws, which apply to agreements of 12 months or more. An 11-month rental agreement signed by both landlord and tenant is legally valid even without registration; however, for added legal protection, especially in case of disputes, registration is recommended. If the agreement is for 12 months or longer, it must be registered under the Indian Registration Act to be legally enforceable in court. Stamp duty and registration charges vary by state, and paying them ensures the document’s legal validity. Renewal of the agreement must be mutually agreed upon and documented, either by extension or drafting a new agreement.
</p>
     </div>
  </div>

</div>
</section>

<div className="bg-white py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
      How Our Rental Agreement Process Works
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Step 1 */}
      <div className="p-6 bg-gray-50 rounded-xl shadow-md text-center hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-4"></div>
        <h3 className="text-xl font-semibold mb-2">Step 1: Submit Your Details</h3>
        <p className="text-gray-600">
          Fill out a quick form with your property and tenant information — it's simple and secure.
        </p>
      </div>

      {/* Step 2 */}
      <div className="p-6 bg-gray-50 rounded-xl shadow-md text-center hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-4"></div>
        <h3 className="text-xl font-semibold mb-2">Step 2: Agreement Preparation</h3>
        <p className="text-gray-600">
          We prepare your rental agreement with all required legal clauses and optional customizations.
        </p>
      </div>

      {/* Step 3 */}
      <div className="p-6 bg-gray-50 rounded-xl shadow-md text-center hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-4"></div>
        <h3 className="text-xl font-semibold mb-2">Step 3: Doorstep Delivery</h3>
        <p className="text-gray-600">
          Get your stamped & signed agreement delivered to your home or sent via email—your choice!
        </p>
      </div>
    </div>

   
  </div>
</div>
<section className="bg-white py-12">
  <div className="max-w-md mx-auto text-center px-4">
    {/* Icon */}
    <div className="mb-6">
      <img
        src="/icons/support-agent.png" // Replace with your actual emoji-style image path
        alt="Personalized Assistance"
        className="w-16 h-16 mx-auto"
      />
    </div>

    {/* Heading */}
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personalized Assistance</h3>

    {/* Description */}
    <p className="text-gray-600 mb-6">
      Contact us to get a relationship manager who will handle everything for you — assisting with the agreement and
      drafting custom clauses tailored to your needs. Prefer DIY? Fill out the form below.
    </p>

    {/* Button */}
    <a
      href="/contact"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
    >
      CONTACT US &nbsp;→
    </a>
  </div>
</section>

<Contact/>
        </>
  )
}

export default Agreementsdrafts