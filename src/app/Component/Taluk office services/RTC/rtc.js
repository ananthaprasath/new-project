'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Actor } from 'next/font/google';
import Rtcfaq from './rtcfaq';
import Contact from './Contact';

const Rtc = () => {
      useEffect(() => {
        AOS.init({ duration: 800, once: true });
      }, []);
  return (
   <>
    {/* HERO / BREADCRUMB */}
<section className="hero-crumb">
  <div className="container text-center" data-aos="fade-down">
    <h1 className="hero-title fw-bold display-4">
      RTC - Record of Rights, Tenancy & Crops
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

    <section className="khata-info-section">
      <h2 className="khata-title" data-aos="fade-up">
        What is RTC (Record of Rights, Tenancy & Crops)?
      </h2>

      <div className="khata-body">
        <p data-aos="fade-up" data-aos-delay="200">
          RTC, also known as Pahani, is a vital land record document issued by the Karnataka government. It details the legal rights of the landowner, tenancy status, soil type, crop patterns, and land use.
        </p>

        <p data-aos="fade-up" data-aos-delay="300">
          It is primarily used to establish ownership and agricultural use. This document is necessary during land sale, mutation, or for applying for bank loans on the land.
        </p>

        <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
          “RTC is more than just a record—it is your official proof of land ownership and usage.”
        </blockquote>

        <p data-aos="fade-up" data-aos-delay="500">
          Always ensure your RTC document is up to date, especially after a property transfer or crop change. It helps avoid disputes and proves your rightful possession.
        </p>
      </div>
    </section>

    <section className="doc-section mt-5">
      <div className="container" data-aos="fade-up">
        <h2 className="section-heading text-center">Comparison – RTC vs Mutation Extract</h2>
        <div className="custom-table-wrapper mt-4">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>RTC Document</th>
                <th>Mutation Extract</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shows land ownership, tenancy & crop info</td>
                <td>Shows legal change of land ownership</td>
              </tr>
              <tr>
                <td>Issued by Village Accountant</td>
                <td>Maintained by Revenue Department</td>
              </tr>
              <tr>
                <td>Used for agricultural land transactions</td>
                <td>Used after sale, inheritance, or gift</td>
              </tr>
              <tr>
                <td>Contains details like soil, area, crops</td>
                <td>Confirms title transfer in government records</td>
              </tr>
              <tr>
                <td>Helps with subsidies and loan applications</td>
                <td>Essential to complete land registration</td>
              </tr>
              <tr>
                <td>Updated during seasonal crop changes</td>
                <td>Updated after ownership change only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="py-5 bbmp-section">
      <div className="container">
        <div className="p-4 rounded-4 shadow bbmp-box">
          <h4 className="text-center fw-bold text-primary mb-4">📄 Key Information in RTC Document</h4>
          <ul className="list-unstyled fs-5">
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-person-vcard-fill me-2 text-dark"></i>
              <span>Name and details of the landowner</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-globe-asia-australia me-2 text-dark"></i>
              <span>Soil type and land classification</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-flower2 me-2 text-dark"></i>
              <span>Crops cultivated on the land</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-bounding-box-circles me-2 text-dark"></i>
              <span>Land area and survey number</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-droplet-half me-2 text-dark"></i>
              <span>Water rate and irrigation method</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-bank me-2 text-dark"></i>
              <span>Loan or liability records (if any)</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-check-circle-fill me-2 text-dark"></i>
              <span>Nature of land possession & tenancy</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</section>
<Contact/>
 <Rtcfaq/>
   </>
  )
}

export default Rtc