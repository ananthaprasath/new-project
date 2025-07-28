import React from 'react'

const Landpodi = () => {
  return (
    <>
      {/* HERO / BREADCRUMB */}
<section className="hero-crumb">
  <div className="container text-center" data-aos="fade-down">
    <h1 className="hero-title fw-bold display-4">
    Podi – Land Subdivision Process    </h1>
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
    What is Land Podi?
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Land Podi refers to the official subdivision of a larger land parcel into smaller, individual survey numbers or plots. This process is essential when a landowner wants to divide their land legally—either for sale, gifting, or inheritance.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      Once Podi is completed by the Revenue Department, each subdivided portion is assigned a new survey number, making it a distinct and traceable land unit in government records.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “Podi ensures that each portion of land has a separate identity, allowing for smooth registration and legal transactions.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      Without Podi, multiple owners or buyers may face issues with boundaries, tax calculation, and ownership documentation. It's especially important in cases of joint ownership or inherited agricultural land.
    </p>

    <p data-aos="fade-up" data-aos-delay="600">
      The Podi process typically involves a land survey, application submission to the taluk office, verification by the Village Accountant, and approval from the Revenue Inspector. This ensures transparency and accountability at each step.
    </p>

    <p data-aos="fade-up" data-aos-delay="700">
      Once Podi is approved, it becomes easier to obtain Khata, mutation, and other land-related certificates for each subdivided plot, making it a crucial step in the land development process.
    </p>
  </div>
</section>

<section className="khata-info-section">
  <h2 className="khata-title" data-aos="fade-up">
    Understanding Land Podi – Subdivision of Land Parcels
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Land Podi is the process of officially dividing a single land parcel into smaller, individual plots, each with a unique survey number. This is commonly needed when land is inherited among heirs, sold in parts, or converted for layout development.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      The Podi process is governed by the Revenue Department and typically begins with a formal application, followed by a land survey conducted by government-appointed surveyors. Each subdivided plot is then recorded separately in government land records.
    </p>

    <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
      “Podi gives every new plot a legal identity — crucial for registration, mutation, and future transactions.”
    </blockquote>

    <p data-aos="fade-up" data-aos-delay="500">
      One of the major benefits of completing Podi is the ability to generate individual RTC (Record of Rights, Tenancy and Crops) for each subdivided plot. This allows landowners to sell, mortgage, or develop each portion independently.
    </p>

    <p data-aos="fade-up" data-aos-delay="600">
      Podi also prevents future disputes between co-owners or heirs by clearly demarcating boundaries. It enables better tax calculation, infrastructure planning, and clarity for buyers during layout formation or resale.
    </p>

    <p data-aos="fade-up" data-aos-delay="700">
      In Karnataka, landowners can apply for Podi at the local taluk office or Grama One centers. Required documents typically include RTC, a copy of the sale deed or inheritance papers, and a sketch showing proposed subdivision. Once verified, the Podi order is passed and new survey numbers are generated.
    </p>

    <p data-aos="fade-up" data-aos-delay="800">
      It's important to note that without Podi, layout approvals, Khata registration, and land mutation can face delays or rejection. Therefore, Podi is a foundational legal step in land development and inheritance.
    </p>

    <p data-aos="fade-up" data-aos-delay="900">
      For layout developers, Land Podi is the first formal requirement before submitting applications for DC Conversion, Layout Approval, or RERA registration. It’s a core step that legitimizes subdivision in the eyes of the government.
    </p>
  </div>
</section>


    {/* Comparison Table */}
    <section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Difference – Podi vs Khata vs DC Conversion</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Podi</th>
            <th>Khata</th>
            <th>DC Conversion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Purpose</td>
            <td>Subdivision of land and new survey numbers</td>
            <td>Entry in municipal or panchayat records</td>
            <td>Converting agricultural land to non-agricultural use</td>
          </tr>
          <tr>
            <td>Issued By</td>
            <td>Revenue Department / Survey Office</td>
            <td>Municipality or Panchayat Office</td>
            <td>Deputy Commissioner's Office</td>
          </tr>
          <tr>
            <td>When Required</td>
            <td>Before selling, dividing, or developing land</td>
            <td>Before registration or construction approval</td>
            <td>Before residential or commercial development</td>
          </tr>
          <tr>
            <td>Output Document</td>
            <td>New Survey Numbers (RTC for each plot)</td>
            <td>Khata Certificate & Khata Extract</td>
            <td>DC Conversion Order</td>
          </tr>
          <tr>
            <td>Legal Use</td>
            <td>Identifies each plot separately in records</td>
            <td>Allows property tax payment and approval</td>
            <td>Makes land eligible for non-agricultural use</td>
          </tr>
          <tr>
            <td>Online Access</td>
            <td>Bhoomi Portal (landrecords.karnataka.gov.in)</td>
            <td>Municipal or Grama Panchayat website</td>
            <td>Depends on district’s DC office or Seva Sindhu</td>
          </tr>
          <tr>
            <td>Common for</td>
            <td>Developers, joint families, large land parcels</td>
            <td>All landowners in urban and rural areas</td>
            <td>Developers planning housing or layout projects</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


  </div>
</section>
    
    </>
  )
}

export default Landpodi