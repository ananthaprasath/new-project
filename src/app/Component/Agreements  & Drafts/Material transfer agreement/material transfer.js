
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Materialtransfer = () => {
  useEffect(() => {
                 AOS.init({ duration: 800, once: true });
               }, []);
               return (
                 <>
                   {/* HERO / BREADCRUMB */}
                   <section className="hero-crumb">
                   <div className="container text-center" data-aos="fade-down">
               <h1 className="hero-title fw-bold display-4">
               Material Transfer Agreement
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
            <h4 className="text-center fw-bold mb-4"> What is a Material Transfer Agreement (MTA)?</h4>
            <p className="text-gray-700 text-lg leading-relaxed">
        A <strong>Material Transfer Agreement (MTA)</strong> is a legal contract that governs the transfer of tangible research materials between two organizations. It is typically used when the recipient intends to use the materials solely for their own research purposes. The MTA clearly defines the rights and obligations of both the provider and the recipient, including ownership, permitted use, intellectual property, and handling of any derivatives developed from the original materials.
      </p>
          </div>
      </div>
      </section>
      <div className="container">
          <div className="p-4 p-md-5 bg-white rounded-4 shadow">
            <h4 className="text-center fw-bold mb-4">Why You Need a Material Transfer Agreement
            </h4>
            <p className="mb-0">
            A Material Transfer Agreement (MTA) is essential to protect the interests of both the provider and the recipient when transferring research materials. It clearly outlines how the materials can be used, who owns any resulting inventions or data, and how confidentiality and intellectual property rights are handled. Without an MTA, disputes can arise over ownership, misuse, or liability, especially in research collaborations between institutions or companies. An MTA ensures transparency, compliance with institutional and legal guidelines, and a smoother working relationship between parties.
      </p>
      
           </div>
        </div>
      
        <div className="container mt-5">
          <div className="p-4 p-md-5 bg-white rounded-4 shadow">
            <h4 className="text-center fw-bold mb-4"> Key Features of a Material Transfer Agreement (MTA)</h4>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
      <li>
        <strong>Ownership Definition:</strong> Clarifies ownership of the original material and any modifications.
      </li>
      <li>
        <strong>Permitted Uses:</strong> Specifies how the materials may be used (e.g., research-only, non-commercial).
      </li>
      <li>
        <strong>Third-Party Sharing:</strong> States whether the recipient may transfer materials or derivatives to others.
      </li>
      <li>
        <strong>Data & Publication Rights:</strong> Defines rights to data and research results, including publication permissions.
      </li>
      <li>
        <strong>Intellectual Property (IP) Rights:</strong> Covers inventions or discoveries made using the materials.
      </li>
      <li>
        <strong>Confidentiality Obligations:</strong> Details how sensitive information should be protected.
      </li>
      <li>
        <strong>Reporting Requirements:</strong> Outlines how results or usage must be communicated to the provider.
      </li>
      <li>
        <strong>Return or Disposal Terms:</strong> Describes what happens to materials at the end of the project or agreement.
      </li>
    </ul>
    </div>
    </div>
  
        <div className="container mt-5">
          <div className="p-4 p-md-5 bg-white rounded-4 shadow">
            <h4 className="text-center fw-bold mb-4">Material Transfer Agreement Between Two Companies</h4>
        
      
      <p className="text-gray-700 text-lg mb-6 text-center">
      A Material Transfer Agreement (MTA) between two companies is a legally binding document that outlines the terms and conditions for the exchange of proprietary materials. This agreement ensures that both parties understand their rights and obligations regarding the use, modification, sharing, and ownership of the materials. It defines how the materials can be used (e.g., for research or evaluation purposes), sets restrictions on third-party transfers, outlines intellectual property and confidentiality provisions, and details how results, data, or inventions derived from the material will be handled. An MTA protects the interests of both the provider and the recipient, reducing the risk of misuse or disputes in commercial and collaborative settings.
      </p>
    </div>
    </div>
  
  
      
      </div>
      </section>
      
      
      
         
        
      </>
  )
}

export default Materialtransfer