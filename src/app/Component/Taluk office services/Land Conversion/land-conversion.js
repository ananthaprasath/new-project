import React from 'react'
import Landconversionfaq from './landconversionfaq'

const Landconversion = () => {
  return (
    <>
    {/* HERO / BREADCRUMB */}
<section className="hero-crumb">
<div className="container text-center" data-aos="fade-down">
  <h1 className="hero-title fw-bold display-4">
  Land Conversion Demystified – Everything You Need to Know  </h1>
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
    What is Land Conversion?
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Land Conversion is the legal process of changing the classification of land from agricultural to non-agricultural use (residential, commercial, or industrial). It is mandatory if you plan to build on farmland or use it for any non-farming activity.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      The conversion process is governed by the local revenue authority and typically involves submitting an application, along with land records, survey maps, and a fee. Once approved, you receive a Conversion Order officially allowing you to proceed with non-agricultural use.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “Without conversion approval, any non-agricultural activity on farmland is considered illegal.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      Land conversion ensures compliance with zoning and planning laws. It is also essential for getting plan approvals, building permits, and electricity or water connections.
    </p>

    <p data-aos="fade-up" data-aos-delay="600">
      You can apply for land conversion at your district’s Deputy Commissioner’s office or through Karnataka’s official land services portal. Always check whether the land is already converted before buying.
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
    <h2 className="section-heading text-center">Difference – Agricultural Land vs Converted Land</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Agricultural Land</th>
            <th>Converted Land</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Farming, cultivation, and plantation use only</td>
            <td>Residential, commercial, or industrial use allowed</td>
          </tr>
          <tr>
            <td>Construction not permitted legally</td>
            <td>Construction allowed with plan approval</td>
          </tr>
          <tr>
            <td>Electricity/water limited to farm purposes</td>
            <td>Full access to civic connections</td>
          </tr>
          <tr>
            <td>Eligible for agricultural loans only</td>
            <td>Eligible for home and business loans</td>
          </tr>
          <tr>
            <td>Lower tax and revenue charges</td>
            <td>Higher property and development taxes</td>
          </tr>
          <tr>
            <td>No conversion fee applicable</td>
            <td>Conversion fee must be paid to the DC office</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section style={{ marginTop: "3rem", padding: "1rem", backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
  <h2 style={{ textAlign: "center", fontSize: "1.8rem", fontWeight: "bold", color: "#333", marginBottom: "1rem" }}>
    Steps to Apply for Land Conversion in Karnataka
  </h2>

  <ol style={{ maxWidth: "800px", margin: "0 auto", paddingLeft: "1.5rem", fontSize: "1rem", color: "#444", lineHeight: "1.8" }}>
    <li><strong>Collect Documents:</strong> RTC (Pahani), mutation record, and land survey sketch.</li>
    <li><strong>Apply Online or Offline:</strong> Visit the Deputy Commissioner’s office or apply via the <a href="https://landrecords.karnataka.gov.in/" target="_blank" rel="noopener noreferrer">Bhoomi portal</a>.</li>
    <li><strong>Submit Details:</strong> Provide all land documents, usage purpose, and pay the fee.</li>
    <li><strong>Verification:</strong> Land Revenue Inspector will conduct a site inspection.</li>
    <li><strong>Approval:</strong> The DC Office examines the report and issues the Conversion Order.</li>
    <li><strong>Update Records:</strong> Reflect the converted status in land records and Khata.</li>
  </ol>
</section>


</div>
</section>
<Landconversionfaq/>
  </>
  )
}

export default Landconversion