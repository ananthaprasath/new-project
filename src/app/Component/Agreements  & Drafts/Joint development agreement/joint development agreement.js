
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Jointdevelopmentagreement = () => {
   useEffect(() => {
                 AOS.init({ duration: 800, once: true });
               }, []);
               return (
                 <>
                   {/* HERO / BREADCRUMB */}
                   <section className="hero-crumb">
                   <div className="container text-center" data-aos="fade-down">
               <h1 className="hero-title fw-bold display-4">
               Joint Development Agreement
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
            <h4 className="text-center fw-bold mb-4">What is a Joint Development Agreement (JDA)</h4>
            <p className="mb-0">
        <strong>Joint Development Agreement (JDA)</strong> is a legal arrangement between a landowner and a builder or developer. In this partnership, the <strong>landowner provides the land</strong>, while the <strong>developer handles all other responsibilities</strong> involved in the real estate project.</p>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
    <li>Obtaining regulatory and statutory approvals</li>
    <li>Construction and infrastructure development</li>
    <li>Project launch and branding</li>
    <li>Marketing and sales execution</li>
    <li>Investment of financial resources and project management</li>
  </ul>
          </div>
      </div>
      </section>
      <div className="container">
          <div className="p-4 p-md-5 bg-white rounded-4 shadow">
            <h4 className="text-center fw-bold mb-4">What is a Development Agreement Process ?</h4>
            <p className="mb-0">
            The Development Agreement process is a formal arrangement between a city or municipal authority and a property developer. It begins with the submission of a detailed development proposal, outlining the scope of the project, land use, timelines, and compliance with zoning and environmental regulations. This proposal is reviewed by the Planning Commission to ensure alignment with the city’s long-term development goals. Following the review, public hearings are held to gather input from stakeholders and residents. If deemed viable, the proposal is forwarded to the Board of Supervisors or local governing body for final approval. Once approved, both parties enter into a legally binding agreement that clearly outlines each party’s responsibilities, timelines, and conditions. The agreement ensures transparency, legal compliance, and accountability throughout the project's execution and duration.
      </p>
      
           </div>
        </div>
      
        <div className="container mt-5">
          <div className="p-4 p-md-5 bg-white rounded-4 shadow">
            <h4 className="text-center fw-bold mb-4">Legal Validity of JDA and Role of Power of Attorney</h4>
            <p className="mb-0">
            As of now, there is no mandatory legal requirement to register a Joint Development Agreement (JDA) or its supplementary/amendment deeds under Indian law. Despite the absence of registration, such agreements remain valid and legally enforceable if properly executed on appropriate stamp paper. However, developers often require a Deed of Power of Attorney (PoA) from the landowner to carry out responsibilities such as obtaining approvals, applying for licenses, or handling project execution. This PoA is typically granted pursuant to the terms outlined in the JDA and should ideally be registered to enhance legal standing and reduce future disputes.
      </p>
     
           </div>
        </div>
  
        <div className="container mt-5">
          <div className="p-4 p-md-5 bg-white rounded-4 shadow">
            <h4 className="text-center fw-bold mb-4">Understanding Joint Development Agreements in Urban Real Estate</h4>
        
      
      
  
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <p className="text-gray-700 leading-relaxed">In metropolitan cities, property owners of old or underutilized buildings often seek to modernize and increase the usable floor space by leveraging regulatory permissions for additional construction such as basements and stilt areas. In such cases, the owner may enter into a Joint Development Agreement (JDA) with a developer, where the existing property is handed over for redevelopment. Under this arrangement, the newly constructed floors or units are shared between the owner and the developer. To facilitate the project, developers may also provide temporary alternate accommodation and monetary compensation to the owner during the construction phase. For large-scale residential or commercial projects, where land acquisition requires significant capital, JDAs allow developers to bypass upfront land costs by partnering with landowners. In return, the developer compensates the landowner through a combination of monetary consideration and allocation of developed units, as per mutually agreed terms. This collaborative model has become a common and efficient method for real estate development in high-demand urban areas.


        </p>
  
        
      </div>
    </div>
    </div>
  
  
      
      </div>
      </section>
      
      
      
         
        
      </>
  )
}

export default Jointdevelopmentagreement