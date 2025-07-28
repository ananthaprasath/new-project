import React from 'react'
import Landfaq from './landfaq'

const Landsurvey = () => {
  return (
    <>
    {/* HERO / BREADCRUMB */}
<section className="hero-crumb">
  <div className="container text-center" data-aos="fade-down">
    <h1 className="hero-title fw-bold display-4">
    Land Survey – Boundary & Measurement Essentials
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
    What is Land Survey?
  </h2>

  <div className="khata-body">
    <p data-aos="fade-up" data-aos-delay="200">
      Land surveying is the professional method used to map out the boundaries, dimensions, and angles of a piece of land. It involves precisely measuring the Earth's surface to define the location of plots, structures, and features. This process plays a crucial role in urban planning, real estate transactions, and land ownership documentation.
    </p>

    <p data-aos="fade-up" data-aos-delay="300">
      A land survey typically starts with examining the property's legal documents and history. Next, the surveyor visits the site, physically marks key boundaries, and notes visible landmarks. This on-site process—called fieldwork—helps gather real-time data to draw accurate land maps and define property lines.
    </p>

    <p data-aos="fade-up" data-aos-delay="400">
      Surveys are essential for avoiding land disputes, ensuring legal clarity, and enabling structured development. From real estate transactions to public infrastructure projects, land surveys form the foundation for informed decision-making, construction, and environmental planning.
    </p>

    <p data-aos="fade-up" data-aos-delay="500">
      Surveyors use a tool called a <strong>theodolite</strong> to measure both horizontal and vertical angles between fixed points. These angle readings, when combined with distance measurements taken via measuring tape or chains, allow the exact location of any point to be calculated using trigonometric principles.
    </p>
  </div>
</section>

    {/* Land Survey Section */}
    <section className="khata-info-section mt-5">
      <h2 className="khata-title" data-aos="fade-up">
        What is a Land Survey Number?
      </h2>

      <div className="khata-body">
        <p data-aos="fade-up" data-aos-delay="200">
          A Land Survey Number is a unique identification number assigned to a specific parcel of land by the revenue department. It acts like an address for rural or agricultural properties and is used to track ownership, location, and extent of land.
        </p>

        <p data-aos="fade-up" data-aos-delay="300">
          Each survey number is mapped and measured during an official government land survey. It helps authorities and owners identify land boundaries and verify legal records. For larger areas, a survey number may be subdivided into 'Hissa' numbers (ex: 25/1, 25/2).
        </p>

        <blockquote className="khata-quote" data-aos="fade-up" data-aos-delay="400">
          “Without a proper survey number, it’s impossible to legally define your land’s location or ownership.”
        </blockquote>

        <p data-aos="fade-up" data-aos-delay="500">
          Survey numbers are used in all property-related documents such as RTC, Khata, Mutation Extract, and Encumbrance Certificate. When buying or selling land, always verify the survey number to avoid overlaps or legal disputes.
        </p>

        <p data-aos="fade-up" data-aos-delay="600">
          You can check your land’s survey details and maps in Karnataka using the official <a href="https://landrecords.karnataka.gov.in" target="_blank" rel="noopener noreferrer">Bhoomi portal</a> or consult the local revenue office.
        </p>
      </div>
    </section>
    <section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Understanding Land Surveying in Karnataka</h2>

    {/* Benefits Section */}
    <div className="custom-table-wrapper mt-4">
      <h4 className="mb-3"> What Are the Benefits of Surveying Land?</h4>
      <ul>
        <li><strong>Identifies Boundaries Clearly:</strong> Avoid disputes with neighbors by knowing exact limits.</li>
        <li><strong>Protects Against Encroachments:</strong> Detect illegal occupation of your property.</li>
        <li><strong>Ensures Legal Clarity:</strong> Verifies land records and property measurements.</li>
        <li><strong>Boosts Investment Confidence:</strong> Offers peace of mind for buyers and banks.</li>
        <li><strong>Helps in Development Planning:</strong> Essential for fencing, approvals, and layout design.</li>
      </ul>
    </div>

    {/* What Happens During Survey */}
    <div className="custom-table-wrapper mt-5">
      <h4 className="mb-3"> What Happens During a Land Survey?</h4>
      <ul>
        <li>Surveyor provides a <strong>boundary sketch</strong> with legal demarcation of the property.</li>
        <li>Includes a <strong>written description</strong> of nearby roads, landmarks, buildings, etc.</li>
        <li>Helps in <strong>official processing</strong> like BBMP/Panchayat approvals or registration.</li>
        <li>Essential for <strong>land conversion, fencing</strong>, or resale documentation.</li>
      </ul>
    </div>

    {/* Types of Surveying */}
    <div className="custom-table-wrapper mt-5">
      <h4 className="mb-3"> Types of Land Surveying in Karnataka</h4>

      <h5 className="mt-3">1. Manual Chain Surveying (Traditional Method)</h5>
      <p>
        This involves triangulation using physical chains or tapes. Common in village surveys and revenue records.
        No angular tools are used, only direct field measurements.
      </p>
      <p><strong>Common Chain Types:</strong></p>
      <ul>
        <li>Metric Chain</li>
        <li>Steel Band or Band Chain</li>
        <li>Gunter’s Chain (Surveyor’s Chain)</li>
        <li>Engineer’s Chain</li>
        <li>Revenue Chain</li>
      </ul>

      <h5 className="mt-4">2. Digital Surveying (Modern GPS-Based)</h5>
      <p>
        Uses Total Station, GPS, and mapping software for precise data. Best for urban layouts and plotted developments.
      </p>
      <ul>
        <li>Highly accurate & accepted by BBMP and government agencies</li>
        <li>Provides geo-tagged coordinates and elevation data</li>
        <li>Includes digital output files (PDF, DXF)</li>
        <li>Faster, cleaner, and scalable for larger properties</li>
      </ul>
    </div>
  </div>
</section>


    {/* Comparison Table */}
    <section className="doc-section mt-5">
  <div className="container" data-aos="fade-up">
    <h2 className="section-heading text-center">Difference – Land Survey vs Registration</h2>
    <div className="custom-table-wrapper mt-4">
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Land Survey</th>
            <th>Registration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Measures and defines exact land boundaries and dimensions</td>
            <td>Legally transfers ownership of property through a sale deed</td>
          </tr>
          <tr>
            <td>Conducted by licensed surveyors using tools like theodolites, GPS</td>
            <td>Carried out at the Sub-Registrar Office under Registration Act</td>
          </tr>
          <tr>
            <td>Used to prepare maps, sketch boundaries, and avoid disputes</td>
            <td>Required for lawful recognition of a property transaction</td>
          </tr>
          <tr>
            <td>Includes physical fieldwork and documentation of land features</td>
            <td>Involves signing, stamping, and submission of the sale deed</td>
          </tr>
          <tr>
            <td>Not legally mandatory, but crucial for construction, resale, or loans</td>
            <td>Legally mandatory for transfer of property ownership</td>
          </tr>
          <tr>
            <td>Can be initiated by property owner or buyer through land records office</td>
            <td>Requires buyer, seller, and witnesses to be physically present</td>
          </tr>
          <tr>
            <td>Helps identify encroachments or overlaps with neighboring plots</td>
            <td>Does not verify physical land boundaries or layout accuracy</td>
          </tr>
          <tr>
            <td>Survey sketch is needed for conversion, fencing, and layout approvals</td>
            <td>Registration document is needed for bank loans and legal proof</td>
          </tr>
          <tr>
            <td>Typically done once before or after purchase; can be repeated if land is divided</td>
            <td>Done only once per sale transaction; a new registration is needed upon resale</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

  </div>
</section>
<Landfaq/>
    </>
  )
}

export default Landsurvey