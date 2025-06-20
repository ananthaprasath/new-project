// components/OurServices.js
import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

const services = [
  {
    title: 'BBMP',
    description: 'BBMP Documentation Services',
    image: '/images/home/bbmp.webp',
  },
  {
    title: 'Sub Registrar',
    description: 'Sub Registrar Documentation Services',
    image: '/images/home/subregrisation.webp',
  },
  {
    title: 'Taluk Office',
    description: 'Taluk Office Documentation Service',
    image: '/images/home/Taluk.webp',
  },
  {
    title: 'Gram Panchayat',
    description: 'Gram Panchayat Documentation Services',
    image: '/images/home/gram-panchayat.webp',
  },
  {
    title: 'Agreement & Drafts',
    description: 'Agreements & Drafts Documentation Services',
    image: '/images/home/agreement.webp',
  },
  {
    title: 'Construction Services',
    description: 'Construction Documentation Services',
    image: '/images/home/construction.webp',
  },
];

const OurServices = () => {
  return (
    <section className="py-5" style={{ backgroundColor:'#f1f1f1' }}>
      <div className="container text-center">
        <h2 className="text-primary fw-bold">Our Services</h2>
        <p className="mb-4">
          Premium & Affordable Documentation <br />
          <strong>Docandeed Services</strong>
        </p>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow text-center p-3 border-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="mx-auto mb-3"
                />
                <h5 className="fw-semibold text-primary">{service.title}</h5>
                <p>{service.description}</p>
                <a href="#" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <FaExternalLinkAlt /> View Services
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
