'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Leaseagrement = () => {
  useEffect(() => {
             AOS.init({ duration: 800, once: true });
           }, []);
           return (
             <>
               {/* HERO / BREADCRUMB */}
               <section className="hero-crumb">
               <div className="container text-center" data-aos="fade-down">
           <h1 className="hero-title fw-bold display-4">
           Lease Agreement
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
        <h4 className="text-center fw-bold mb-4">What is a Lease Agreement?</h4>
        <p className="mb-0">
        A <strong>lease agreement</strong> is made when a person (“landlord”) allows another (“tenant”) to use and enjoy
      their property for a defined period in exchange for rent. While it is common to have a written lease agreement,
      it is not legally required — even verbal agreements may be valid, although written ones are strongly recommended
      for legal clarity and protection.</p>
      </div>
  </div>
  </section>
  <div className="container">
      <div className="p-4 p-md-5 bg-white rounded-4 shadow">
        <h4 className="text-center fw-bold mb-4">Why a Written Agreement Matters?</h4>
        <p className="mb-0">
        The primary benefit of a <strong>written rental agreement</strong> is that it clearly outlines all the terms and conditions
      agreed upon by both the landlord and the tenant — covering responsibilities before and after the tenant occupies the space.
      Once both parties sign the document, the agreement cannot be modified unless both the landlord and the tenant mutually agree to do so.
  </p>
       </div>
    </div>
  
    <div className="container mt-5">
      <div className="p-4 p-md-5 bg-white rounded-4 shadow">
        <h4 className="text-center fw-bold mb-4">When a Lease Becomes Legally Void</h4>
        <p className="mb-0">
        A lease agreement is considered <strong>automatically void</strong> if it is made for an unlawful purpose — for example, renting a property for illegal activities. 
      In other cases, such as when a lease is signed under <strong>fraud, coercion, or duress</strong>, it may be declared void at the request of the affected party, 
      but not necessarily by the other party.
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
 
  
          </>
  )
}

export default Leaseagrement