import React from 'react'
import Mutationfaq from './mutationfaq'

const Mutationregister = () => {
  return (
    <>
      {/* HERO / BREADCRUMB */}
<section className="hero-crumb">
  <div className="container text-center" data-aos="fade-down">
    <h1 className="hero-title fw-bold display-4">
      Mutation Register – Property Ownership Update
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

    {/* Introduction */}
    <section className="khata-info-section">
      <h2 className="khata-title" data-aos="fade-up">
        What is Mutation Register?
      </h2>

      <div className="khata-body">
        <p data-aos="fade-up" data-aos-delay="200">
          Mutation is the process of changing the title ownership of a property in land revenue records after a sale, inheritance, or gift. It helps the government update tax details and confirm the rightful owner for revenue collection purposes.
        </p>

        <p data-aos="fade-up" data-aos-delay="300">
          Once the mutation is completed, the buyer’s name is reflected in the land records maintained by the Village Accountant or the local municipal body. This ensures that property tax is charged correctly.
        </p>

        <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
          “Mutation is proof that the government officially recognizes you as the new landowner.”
        </blockquote>

        <p data-aos="fade-up" data-aos-delay="500">
          Though not a substitute for registration, mutation is an essential follow-up process that makes the ownership visible in tax and revenue records.
        </p>
      </div>
    </section>
    <section className="khata-info-section">
  <h2 className="khata-title" data-aos="fade-up">
  Understanding the Mutation Register in Land Records
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Mutation refers to the official process of updating the ownership details of a property in the revenue records after a sale, inheritance, gift, or court order. It legally reflects the change of title in government land records and allows the new owner to pay property taxes in their name.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      The Mutation Register is a land revenue document maintained by the Village Accountant or local revenue authorities. It includes information such as the name of the previous and current owner, mode of acquisition, survey number, extent of land, and date of transfer. It is essential for rural as well as urban properties.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “Mutation is not just a formality — it’s the legal recognition of your ownership in the eyes of the revenue department.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      Without updating the mutation, the government’s revenue records will still reflect the previous owner’s name, leading to complications in tax payment, agricultural benefits, or future property transactions. Mutation ensures transparency in land ownership and simplifies recordkeeping.
    </p>

    <p data-aos="fade-up" data-aos-delay="600">
      In Karnataka, mutation can be done both online via the <a href="https://landrecords.karnataka.gov.in" target="_blank" rel="noopener noreferrer">Bhoomi portal</a> and offline through local taluk offices or Grama One/Kiosk centers. Applicants need to submit the registered sale deed, identity/address proof, and a mutation application form to initiate the process.
    </p>

    <p data-aos="fade-up" data-aos-delay="700">
      Once the application is verified, the revenue department issues a Mutation Extract — an official document that confirms the successful update in ownership records. This document is often required while applying for bank loans, land conversion, or in legal proceedings.
    </p>
  </div>
</section>

    {/* Comparison Table */}
    <section className="doc-section mt-5">
      <div className="container" data-aos="fade-up">
        <h2 className="section-heading text-center">Difference – Mutation vs Registration</h2>
        <div className="custom-table-wrapper mt-4">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Mutation</th>
                <th>Registration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Updates name in land revenue/tax records</td>
                <td>Transfers property legally via sale deed</td>
              </tr>
              <tr>
                <td>Handled by local panchayat or revenue office</td>
                <td>Handled at the Sub-Registrar Office</td>
              </tr>
              <tr>
                <td>Required to pay property tax in your name</td>
                <td>Required to become the legal owner</td>
              </tr>
              <tr>
                <td>Needed after sale, gift, or inheritance</td>
                <td>Done once during property transaction</td>
              </tr>
              <tr>
                <td>Not mandatory, but strongly recommended</td>
                <td>Mandatory for legal validity of ownership</td>
              </tr>
              <tr>
                <td>Can be done online via municipal portal</td>
                <td>Requires physical presence and documentation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  </div>
</section>
<Mutationfaq/>
    </>
  )
}

export default Mutationregister