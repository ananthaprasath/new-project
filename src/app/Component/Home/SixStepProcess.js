'use client';
import { Container, Row, Col, Card } from 'react-bootstrap';

const steps = [
  {
    number: 1,
    title: 'Order Online',
    description: 'Book any documentation services online at your convenience.',
  },
  {
    number: 2,
    title: 'Review Documents',
    description: 'Our experts review your documents within one business day.',
  },
  {
    number: 3,
    title: 'Order Estimation',
    description: 'Receive a detailed estimation from our executive.',
  },
  {
    number: 4,
    title: 'Payment',
    description: 'Pay securely online or choose offline payment methods.',
  },
  {
    number: 5,
    title: 'Order Confirmation',
    description: 'Get confirmation and status updates via email or SMS.',
  },
  {
    number: 6,
    title: 'Doorstep Delivery',
    description: 'We deliver the documents to your doorstep, hassle-free.',
  },
];

const SixStepProcess = () => {
  return (
    <section
      className="py-5"
      style={{
        background:"rgb(241, 241, 241)",
      }}
    >
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: '#0d1b7e' }}>
          How Docandeed Works – 6 Easy Steps
        </h2>
        <Row className="g-4">
          {steps.map((step) => (
            <Col key={step.number} md={6} lg={4}>
              <Card className="h-100 text-center border-0 shadow-sm bg-white">
                <Card.Body>
                  <div
                    className="rounded-circle text-white d-inline-flex justify-content-center align-items-center mb-3"
                    style={{
                      width: '50px',
                      height: '50px',
                      fontWeight: '600',
                      background: 'linear-gradient(135deg,rgb(70, 221, 229), #6366f1)',
                      boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)',
                    }}
                  >
                    {step.number}
                  </div>
                  <Card.Title className="fw-semibold text-dark">
                    {step.title}
                  </Card.Title>
                  <Card.Text className="text-muted small">
                    {step.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SixStepProcess;
