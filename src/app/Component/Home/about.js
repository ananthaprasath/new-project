'use client';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUsSection = () => {
  return (
    <section
      style={{
        backgroundColor: '#1c1b36',
        color: '#fff',
        transform: 'skewY(-3deg)',
        margin: '60px 0',
      }}
    >
      <Container
        style={{
          transform: 'skewY(3deg)',
          paddingTop: '60px',
          paddingBottom: '60px',
        }}
      >
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="mb-4">About Us</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              Docandeed is bangalore based startup for providing online documentation service
              platform for properties (Real Estate). Launched in 2019, Docandeed today operates in
              bangalore. The platform helps customers books reliable & High quality service for
              documentation of properties related quarries - delivered by trained professionals
              conveniently at home. Docandeed vision is to empower millions of professionals
              worldwide to deliver documentation service at home like never experienced before.
            </p>
          </Col>
          <Col md={6}>
            <div
              style={{
                background: '#fff',
                borderRadius: '8px',
                padding: '10px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.15)',
              }}
            >
              <Image
                src="/images/home/aboutus.webp" // make sure to place the image in /public folder
                alt="About Us"
                width={800}
                height={500}
                layout="responsive"
                style={{ borderRadius: '8px' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
