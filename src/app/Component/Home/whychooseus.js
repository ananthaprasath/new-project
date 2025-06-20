'use client';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const WhyChooseUsAndFormSection = () => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Shape */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#1c1b36',
          clipPath: 'polygon(0 3%, 100% 0%, 100% 97%, 0% 100%)',
          zIndex: -1,
        }}
      ></div>

      <Container style={{ paddingTop: '80px', paddingBottom: '80px', color: '#fff' }}>
        <Row className="align-items-start">
          {/* Left Side - Why Choose Us */}
          <Col md={6}>
            <h2 className="mb-4">Why Choose Us</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Docandeed provides a platform that allows skilled and experienced professionals to
              connect with users looking for specific service. All the professionals, though
              experienced and skilled, undergo intensive training modules before being allowed to
              list their service on the platform. Who are closest to the users' requirements and
              available at the requested time and date.
            </p>

            <Row className="mt-4">
              <Col xs={6}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3">
                    <span style={boxStyle}></span> Client Focused Mindset
                  </li>
                  <li className="mb-3">
                    <span style={boxStyle}></span> Process Delivery Excellence
                  </li>
                  <li className="mb-3">
                    <span style={boxStyle}></span> Integrity & Transparency
                  </li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li className="mb-3">
                    <span style={boxStyle}></span> Service Offering
                  </li>
                  <li className="mb-3">
                    <span style={boxStyle}></span> Experienced Professionals
                  </li>
                  <li className="mb-3">
                    <span style={boxStyle}></span> Teamwork & Learning
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Right Side - Form */}
          <Col md={6}>
            <div
              style={{
                background: '#fff',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 className="text-center mb-3" style={{ color: '#1c3fa8' }}>
                Schedule an appointment
              </h3>
              <p className="text-center text-muted mb-4">
                One of our team members will call you back to confirm your appointment.
              </p>

              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="firstName">
                      <Form.Label>Name<span style={{ color: 'red' }}></span>Name</Form.Label>
                      <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Label className="invisible">Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Col>
                </Row>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email <span style={{ color: 'red' }}></span></Form.Label>
                  <Form.Control type="email" placeholder="Your Email Address" />
                </Form.Group>

                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone Number <span style={{ color: 'red' }}></span></Form.Label>
                      <Form.Control type="tel" placeholder="+91 81234 56789" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="location">
                      <Form.Label>Location <span style={{ color: 'red' }}></span></Form.Label>
                      <Form.Control type="text" placeholder="Location" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="message" className="mb-4">
                  <Form.Label>Your Message <span style={{ color: 'red' }}></span></Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your Message Here" />
                </Form.Group>

                <div className="text-end">
                  <Button variant="danger" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const boxStyle = {
  display: 'inline-block',
  width: '20px',
  height: '20px',
  marginRight: '10px',
  border: '3px solid #2d6bff',
};

export default WhyChooseUsAndFormSection;
