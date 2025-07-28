'use client';
import { useState } from 'react';

const WhyChooseUsAndFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const features = [
    {
      icon: '🎯',
      title: 'Client Focused Mindset',
      color: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    {
      icon: '⚡',
      title: 'Process Delivery Excellence',
      color: 'linear-gradient(135deg, #f093fb, #f5576c)'
    },
    {
      icon: '🛡️',
      title: 'Integrity & Transparency',
      color: 'linear-gradient(135deg, #4facfe, #00f2fe)'
    },
    {
      icon: '🎁',
      title: 'Service Offering',
      color: 'linear-gradient(135deg, #43e97b, #38f9d7)'
    },
    {
      icon: '👥',
      title: 'Experienced Professionals',
      color: 'linear-gradient(135deg, #fa709a, #fee140)'
    },
    {
      icon: '🤝',
      title: 'Teamwork & Learning',
      color: 'linear-gradient(135deg, #a8edea, #fed6e3)'
    }
  ];

  return (
    <section className="position-relative py-5 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: 'url("/images/bg-pattern.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2
        }}
      />
      
      {/* Dark Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, rgba(28, 27, 54, 0.95), rgba(44, 62, 80, 0.9))',
          zIndex: -1
        }}
      />

      {/* Floating Geometric Shapes */}
      <div 
        className="position-absolute"
        style={{
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div 
        className="position-absolute"
        style={{
          bottom: '15%',
          right: '8%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.1))',
          transform: 'rotate(45deg)',
          animation: 'float 6s ease-in-out infinite reverse',
        }}
      />

      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Left Side - Why Choose Us */}
          <div className="col-lg-6">
            <div className="pe-lg-4">
              {/* Section Badge */}
              <span 
                className="badge rounded-pill px-3 py-2 mb-3"
                style={{
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  color: 'white',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                }}
              >
                ⭐ Why Choose Docandeed
              </span>

              {/* Main Heading */}
              <h2 
                className="display-6 fw-bold mb-4 text-white"
                style={{
                  lineHeight: '1.2',
                }}
              >
                Your Trusted Partner for 
                <span 
                  className="d-block"
                  style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Real Estate Documentation
                </span>
              </h2>

              {/* Description */}
              <p 
                className="text-light mb-4"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  opacity: '0.9'
                }}
              >
                Docandeed provides a platform that allows skilled and experienced professionals to
                connect with users looking for specific services. All professionals undergo intensive
                training modules before being allowed to list their services on our platform.
              </p>

              {/* Features Grid */}
              <div className="row g-3">
                {features.map((feature, index) => (
                  <div key={index} className="col-md-6">
                    <div 
                      className="d-flex align-items-center p-3 rounded-4 h-100"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div 
                        className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: feature.color,
                          fontSize: '1.2rem',
                        }}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h6 className="mb-0 text-white fw-semibold" style={{ fontSize: '0.95rem' }}>
                          {feature.title}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-lg-6">
            <div 
              className="rounded-4 p-4 p-md-5"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Form Header */}
              <div className="text-center mb-4">
                <div 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  }}
                >
                  <span className="text-white fs-4">📅</span>
                </div>
                <h3 
                  className="fw-bold mb-2"
                  style={{
                    color: '#2c3e50',
                    fontSize: '1.5rem'
                  }}
                >
                  Schedule an Appointment
                </h3>
                <p className="text-muted mb-0">
                  One of our team members will call you back to confirm your appointment.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        style={{
                          border: '2px solid #e9ecef',
                          borderRadius: '12px',
                        }}
                      />
                      <label htmlFor="firstName">First Name <span className="text-danger">*</span></label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        style={{
                          border: '2px solid #e9ecef',
                          borderRadius: '12px',
                        }}
                      />
                      <label htmlFor="lastName">Last Name <span className="text-danger">*</span></label>
                    </div>
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      border: '2px solid #e9ecef',
                      borderRadius: '12px',
                    }}
                  />
                  <label htmlFor="email">Email Address <span className="text-danger">*</span></label>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="+91 81234 56789"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          border: '2px solid #e9ecef',
                          borderRadius: '12px',
                        }}
                      />
                      <label htmlFor="phone">Phone Number <span className="text-danger">*</span></label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleInputChange}
                        style={{
                          border: '2px solid #e9ecef',
                          borderRadius: '12px',
                        }}
                      />
                      <label htmlFor="location">Location <span className="text-danger">*</span></label>
                    </div>
                  </div>
                </div>

                <div className="form-floating mb-4">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Your Message Here"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      height: '120px',
                      border: '2px solid #e9ecef',
                      borderRadius: '12px',
                    }}
                  />
                  <label htmlFor="message">Your Message</label>
                </div>

                <div className="d-grid">
                  <button 
                    type="submit"
                    className="btn btn-lg rounded-pill py-3"
                    style={{
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      border: 'none',
                      color: 'white',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                    }}
                  >
                    Schedule Appointment 🚀
                  </button>
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="text-center mt-4">
                <small className="text-muted d-flex align-items-center justify-content-center">
                  <span className="me-2">🔒</span>
                  Your information is secure and confidential
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .form-control:focus {
          border-color: #667eea !important;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25) !important;
        }
        
        .form-floating > label {
          color: #6c757d;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsAndFormSection;