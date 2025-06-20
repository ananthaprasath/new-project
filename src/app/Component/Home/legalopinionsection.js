'use client';
import { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaComments } from 'react-icons/fa';

const questions = [
  {
    question: 'What Is Legal Opinion',
    answer: 'A legal opinion is a formal letter from an attorney verifying the legal standing of a property or transaction.',
  },
  {
    question: 'What is the purpose of a legal opinion',
    answer: 'It ensures that the property has a clear title and complies with all legal requirements.',
  },
  {
    question: 'Why Legal Opinion Is Important For property',
    answer: 'It protects the buyer from future legal disputes by clarifying ownership and encumbrances.',
  },
  {
    question: 'Why do we need legal advice',
    answer: 'Legal advice guides you through transactions, ensuring all documents are valid and lawful.',
  },
  {
    question: 'What is legal advice?',
    answer: 'Legal advice is guidance provided by a qualified legal professional regarding your rights or responsibilities under the law.',
  },
  {
    question: 'What will happen if I don’t register my property?',
    answer: 'Failure to register property may result in legal complications, disputes, or loss of ownership rights.',
  },
  {
    question: 'Is there a time limit for registering my property?',
    answer: 'Yes, typically registration must occur within 4 months of the sale deed. Delays may incur penalties or invalidate the transaction.',
  },
  {
    question: 'Is legal aid confidential?',
    answer: 'Yes, all discussions and documents shared with a legal aid provider are confidential and protected by law.',
  },
];

const LegalOpinionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-5" style={{ backgroundColor:'#f1f1f1' }}>
      <Container>
        <h2 className="text-center mb-3" style={{ color: '#0d1b7e' }}>
          <img
            src="/images/home/personal_assistance.webp"
            alt="icon"
            style={{ width: '70px', marginBottom: '10px' }}
          />
          <br />
          Docandeed Legal Opinion
        </h2>
        <p className="text-center text-muted mb-5">
          From sale agreement to home loan application, get end to end legal assistance in finalizing your dream home
        </p>
        <Row>
          <Col md={7}>
            <ul className="p-0" style={{ listStyle: 'none' }}>
              {questions.map((item, index) => (
                <li key={index} className="mb-3">
                  <div
                    onClick={() => toggle(index)}
                    style={{
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      padding: '10px 15px',
                      backgroundColor: '#ffffff',
                      borderRadius: '4px',
                    }}
                  >
                    {openIndex === index ? '−' : '+'} {item.question}
                  </div>
                  {openIndex === index && (
                    <div style={{ padding: '10px 20px', backgroundColor: '#fff', borderLeft: '3px solid #4b00e0' }}>
                      {item.answer}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Col>
          <Col md={5} className="d-flex flex-column  align-items-start mt-4 mt-md-0">
            <p>
              We help you with property title check, sale agreement/deed drafting, registration and more! We make your business stand out. Interested? Let’s chat.
            </p>
            <Button
              href="#contact"
              className="mt-3 border-0"
              style={{
                background: 'linear-gradient(to right, #4b00e0, #ff416c)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <FaComments /> Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LegalOpinionSection;

