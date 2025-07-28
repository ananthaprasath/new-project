import React from 'react'
import Properlyfaq from './properlyfaq'

const Propertysurveydocuments = () => {
  return (
      <>
       {/* HERO / BREADCRUMB */}
<section className="hero-crumb">
  <div className="container text-center" data-aos="fade-down">
    <h1 className="hero-title fw-bold display-4">
    Complete Guide to Property Survey Records
    </h1>
  </div>
</section>

{/* MAIN ARTICLE */}
<section className="article-section py-5">
  <div className="container">
    <div className="featured-img mb-4" data-aos="zoom-in">
      <img
        src="/images/bbmp services/KhataRegistration.jpeg"
        alt="Mutation Register in Bangalore"
        className="img-fluid rounded"
      />
    </div>

    {/* Mutation Register Info */}
    <section className="khata-info-section">
  <h2 className="khata-title" data-aos="fade-up">
    Property Survey Documents – What You Need to Know
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Property survey documents are official records that define the physical boundaries, measurements, and ownership status of a land parcel. These records are often required during land registration, buying or selling property, or applying for building permissions.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      A complete land survey file generally includes the site sketch, survey number, extent of the land, neighboring property details, and surveyor’s certification. It may also contain GPS coordinates, topographic notes, and land classification (residential, agricultural, etc.).
    </p>

    <p data-aos="fade-up" data-aos-delay="400">
      In Karnataka, important property survey documents include the <strong>Survey Sketch</strong>, <strong>Village Map</strong>, <strong>Phodi Sketch</strong> (for land division), and the <strong>RTC (Pahani)</strong>. These are typically issued or validated by the Revenue Department or the local survey office.
    </p>

    <p data-aos="fade-up" data-aos-delay="500">
      Having accurate and up-to-date survey documents helps avoid legal disputes, confirms ownership rights, and is crucial while applying for Khata transfer, mutation, or land conversion. Buyers should always verify the survey sketch and match it with physical boundaries on-site before purchasing.
    </p>
  </div>
</section>

    {/* Land Survey Section */}
    <section className="khata-info-section mt-5">
  <h2 className="khata-title" data-aos="fade-up">
    Why Property Survey Documents Matter
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Property survey documents are the foundation for legal clarity, safe transactions, and boundary validation. Without these documents, buyers may unknowingly purchase land with unclear borders, legal encumbrances, or overlapping claims.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      These documents include both physical site surveys and official revenue records. They establish the location, size, and type of land, often validated by the Department of Survey, Settlement, and Land Records in Karnataka.
    </p>

    <p data-aos="fade-up" data-aos-delay="400">
      Key property survey documents include:
    </p>
    <ul data-aos="fade-up" data-aos-delay="450">
      <li><strong>Survey Sketch:</strong> A visual representation of plot boundaries with measurements.</li>
      <li><strong>Phodi Sketch:</strong> Used when land is split among legal heirs or co-owners.</li>
      <li><strong>Tippon or Atlas:</strong> An old cadastral map showing survey numbers and landmarks.</li>
      <li><strong>RTC (Pahani):</strong> Details on land extent, usage, owner, and tenancy.</li>
      <li><strong>Mutation Register Extract:</strong> Shows latest ownership change entries.</li>
    </ul>

    <p data-aos="fade-up" data-aos-delay="500">
      When applying for Khata transfer, building permits, loans, or land conversion, these survey documents are crucial. They also support your claim in case of litigation or property dispute.
    </p>

    <p data-aos="fade-up" data-aos-delay="600">
      Always cross-verify the physical boundaries with the survey sketch, especially when purchasing agricultural land or farm plots. If needed, request a re-survey through the local revenue office.
    </p>
  </div>
</section>

    {/* Comparison Table */}
    <section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Property Survey Documents – Explained</h2>
    <p className="text-center mt-3" data-aos="fade-up" data-aos-delay="100">
      Here’s a simplified table to help you understand key survey documents and their importance in land ownership and verification.
    </p>

    <div className="custom-table-wrapper mt-4" data-aos="fade-up" data-aos-delay="200">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Purpose</th>
            <th>Issued By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Survey Sketch</strong></td>
            <td>Shows exact land boundaries, measurements, and plot shape.</td>
            <td>Revenue Department / Survey Office</td>
          </tr>
          <tr>
            <td><strong>Phodi Sketch</strong></td>
            <td>Prepared when land is divided among multiple parties.</td>
            <td>Taluk Surveyor or Assistant Director of Land Records</td>
          </tr>
          <tr>
            <td><strong>Tippon Copy</strong></td>
            <td>Traditional land map that includes survey number details.</td>
            <td>Revenue Department (Village/Taluk Office)</td>
          </tr>
          <tr>
            <td><strong>RTC (Pahani)</strong></td>
            <td>Shows land ownership, usage, extent, and crop details.</td>
            <td>Village Accountant / Bhoomi Portal</td>
          </tr>
          <tr>
            <td><strong>Mutation Extract</strong></td>
            <td>Records recent ownership changes and property inheritance.</td>
            <td>Taluk Office / Bhoomi Portal</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-4" data-aos="fade-up" data-aos-delay="300">
      These documents are essential when applying for Khata transfer, construction approval, fencing, legal verification, or land resale. For Karnataka residents, most of these can be accessed via the <a href="https://landrecords.karnataka.gov.in" target="_blank" rel="noopener noreferrer">Bhoomi portal</a> or by visiting your local land records office.
    </p>
  </div>
</section>


  </div>
</section>
<Properlyfaq/>
      </>
  )
}

export default Propertysurveydocuments