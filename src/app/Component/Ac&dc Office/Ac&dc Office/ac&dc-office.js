import React from 'react'

const Acdcoffice = () => {
  return (
    <>
    {/* HERO / BREADCRUMB */}
<section className="hero-crumb">
  <div className="container text-center" data-aos="fade-down">
    <h1 className="hero-title fw-bold display-4">
      All Revenue Work Services
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
        Comprehensive Guide to Revenue-Related Property Services
      </h2>

      <div className="khata-body">
        <p data-aos="fade-up" data-aos-delay="200">
          Revenue work encompasses all official documentation and processes related to land or property ownership and recognition by local authorities such as BBMP, BMRDA, and Panchayats. These services ensure your property is legally documented, tax-compliant, and eligible for resale, construction, or bank loans.
        </p>

        <p data-aos="fade-up" data-aos-delay="300">
          From Khata Registration and Mutation to Property Tax Setup and Land Surveys, every document plays a key role in securing your property rights and simplifying real estate transactions. Docandeed provides an end-to-end digital solution to help you complete these complex legal formalities efficiently.
        </p>

        <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
          “From mutation to measurement—every inch of land must be backed by valid revenue records.”
        </blockquote>

        <p data-aos="fade-up" data-aos-delay="500">
          Whether you're a buyer, seller, builder, or investor, understanding and maintaining proper revenue records is non-negotiable. Always verify documents such as RTC, EC, and Khata before proceeding with any real estate transaction.
        </p>
      </div>
    </section>

    {/* COMPARISON TABLE */}
    <section className="doc-section py-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Revenue Services We Offer – Complete Breakdown</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Purpose</th>
            <th>Who Needs It</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Khata Registration</td>
            <td>Registers your property in the municipal records</td>
            <td>New property owners in BBMP/BMRDA areas</td>
          </tr>
          <tr>
            <td>Mutation of Property</td>
            <td>Updates ownership in the revenue records after sale or inheritance</td>
            <td>Buyers, heirs, gift deed holders</td>
          </tr>
          <tr>
            <td>RTC / Pahani</td>
            <td>Shows title, cultivation, and ownership details of land</td>
            <td>Agricultural landowners, buyers</td>
          </tr>
          <tr>
            <td>Encumbrance Certificate (EC)</td>
            <td>Lists any registered legal dues, loans, or claims on the property</td>
            <td>Buyers, banks, legal verifications</td>
          </tr>
          <tr>
            <td>Survey Sketch / Land Measurement</td>
            <td>Verifies the boundaries and size of your land</td>
            <td>All landowners, layout developers</td>
          </tr>
          <tr>
            <td>Property Tax Setup</td>
            <td>Helps calculate and register your property for municipal tax</td>
            <td>All property owners within city limits</td>
          </tr>
          <tr>
            <td>Form 9 & Form 11 (Rural Areas)</td>
            <td>Proof of ownership in Gram Panchayat jurisdiction</td>
            <td>Owners of land in village limits</td>
          </tr>
          <tr>
            <td>Title Verification & Legal Opinion</td>
            <td>Ensures the property is free of disputes and ownership is clear</td>
            <td>Serious buyers, developers, NRIs</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

    {/* REVENUE CONTENT LIST */}
    <section className="py-5 khata-section">
      <div className="container">
        <div className="p-4 rounded-4 shadow khata-box">
          <h4 className="text-center fw-bold text-primary mb-4">📋 Types of Revenue Work We Handle</h4>
          <ul className="list-unstyled fs-5">
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-journal-text me-2 text-dark"></i>
              <span>Khata Registration & Khata Transfer</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-arrow-left-right me-2 text-dark"></i>
              <span>Mutation of Property in Revenue Records</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-card-list me-2 text-dark"></i>
              <span>RTC (Pahani) & Land Record Updates</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-shield-check me-2 text-dark"></i>
              <span>EC (Encumbrance Certificate) Application</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-map-fill me-2 text-dark"></i>
              <span>Land Survey for Boundary Validation & Sketch Generation</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-receipt-cutoff me-2 text-dark"></i>
              <span>Property Tax Setup / Payment Assistance</span>
            </li>
            <li className="mb-3 d-flex align-items-start">
              <i className="bi bi-folder-check me-2 text-dark"></i>
              <span>Legal Opinion & Title Verification for Revenue Land</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* NEW SECTION STARTS HERE */}
    <section className="bg-light py-5">
  <div className="container">
    <h2 className="fw-bold mb-4 text-center">Why Revenue Work Matters – Real Impact</h2>
    <p className="lead text-center mb-5">
      Revenue documentation isn’t just paperwork—it impacts your ability to own, transfer, build, finance, or lease your land legally and efficiently.
    </p>

    <div className="row align-items-stretch">
      {/* LEFT SIDE */}
      <div className="col-md-6 d-flex flex-column justify-content-between">
        <ul className="list-group list-group-flush shadow-sm rounded bg-white p-3 h-100">
          <li className="list-group-item">🌱 Unlocks access to government schemes & rural development subsidies</li>
          <li className="list-group-item">🏦 Required for home loan, construction loan & mortgage approvals</li>
          <li className="list-group-item">📜 Vital for resale, gift deed transfers & succession cases</li>
          <li className="list-group-item">🧾 Enables accurate municipal property tax billing & reassessment</li>
          <li className="list-group-item">📍 Prevents disputes through clear boundary & ownership proof</li>
          <li className="list-group-item">📈 Adds legal value & appreciation potential for resale market</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="col-md-6">
        <div className="bg-white shadow p-4 rounded h-100 d-flex flex-column justify-content-between">
          <h5 className="fw-bold mb-3">Quick Facts – Key Revenue Documents</h5>
          <table className="table table-bordered mb-0">
            <thead>
              <tr>
                <th>Document</th>
                <th>Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Khata Certificate</td>
                <td>Official recognition by the municipality</td>
              </tr>
              <tr>
                <td>RTC (Pahani)</td>
                <td>Land ownership, usage, and cultivation status</td>
              </tr>
              <tr>
                <td>EC (Encumbrance)</td>
                <td>Confirms property has no legal or financial liability</td>
              </tr>
              <tr>
                <td>Survey Sketch</td>
                <td>Map that proves boundary accuracy and area</td>
              </tr>
              <tr>
                <td>Form 9 / 11</td>
                <td>Ownership record in Panchayat (village jurisdiction)</td>
              </tr>
              <tr>
                <td>Mutation Extract</td>
                <td>Shows latest title transfer in revenue records</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>


  </div>
</section>

    </>
  )
}

export default Acdcoffice
