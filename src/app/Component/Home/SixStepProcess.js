'use client';
import { Container, Row, Col } from 'react-bootstrap';

const steps = [
  {
    number: 1,
    title: 'Order Online',
    description: 'Book Any Documentation Services',
  },
  {
    number: 2,
    title: 'Review Documents',
    description: 'We Will Review Your Documents In One Business Day',
  },
  {
    number: 3,
    title: 'Order Estimation',
    description: 'Our Executive Will Share You The Estimation',
  },
  {
    number: 4,
    title: 'Payment',
    description: 'Payment Can Be Made Online & Offline Mode',
  },
  {
    number: 5,
    title: 'Order Confirmation',
    description: 'Your Order Received',
  },
  {
    number: 6,
    title: 'Doorstep Delivery',
    description: 'Your Documents At Your Door Step No Hassle No Worry',
  },
];

const SixStepProcess = () => {
  return (
    <div className="py-4" style={{ backgroundColor: '#f1f1f1' }}>
      <Container>
        <h2 className="text-center mb-5 separator_off" style={{ fontWeight: 600 }}>
          Docandeed Documentation Services Works In Simple 6 Steps
        </h2>
        <Row>
          {steps.map((step, index) => (
            <Col
              key={index}
              md={4}
              className="d-flex flex-column align-items-center text-center mb-5"
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'radial-gradient(circle, #3a37e0 30%, #a3a6f5 60%, #e8e9fc 100%)',
                  borderRadius: '50%',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                }}
              >
                {step.number}
              </div>
              <h5 style={{ fontWeight: '600' }}>{step.title}</h5>
              <p className="text-muted" style={{ maxWidth: '220px' }}>{step.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SixStepProcess;
