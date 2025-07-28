'use client';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="py-5 position-relative overflow-hidden">
      {/* Animated background elements */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(rgba(5, 4, 65, 0.26) 0%,rgba(26, 13, 3, 0.21) 100%)',
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        }}
      />
      
      {/* Floating decorative elements */}
      <div 
        className="position-absolute"
        style={{
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, #ff9a9e, #fecfef)',
          borderRadius: '50%',
          opacity: '0.1',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div 
        className="position-absolute"
        style={{
          bottom: '15%',
          left: '8%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(45deg, #a8edea, #fed6e3)',
          borderRadius: '50%',
          opacity: '0.08',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-5">
          {/* Content Column */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="pe-lg-4">
              {/* Badge */}
            

              {/* Main heading */}
              <h2 
                className="display-5 fw-bold mb-4"
                style={{
                  background: 'linear-gradient(135deg,rgb(27, 27, 192),rgb(12, 3, 59))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.2',
                }}
              >
                Revolutionizing Real Estate Documentation
              </h2>

              {/* Description */}
              <p 
                className="lead text-white mb-4"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                }}
              >
                Docandeed is a Bangalore-based startup offering online documentation services for 
                real estate properties. Since its launch in 2019, we've been committed to 
                simplifying legal property processes through trained professionals and seamless 
                online booking.
              </p>

              {/* Feature highlights */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div 
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(116, 75, 162, 0.1), rgba(102, 126, 234, 0.1))',
                      border: '1px solid rgba(116, 75, 162, 0.2)',
                    }}
                  >
                    <div 
                      className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(45deg,rgb(20, 34, 95),hsl(253, 86.80%, 44.70%))',
                        color: 'white',
                      }}
                    >
                      ⚡
                    </div>
                    <div>
                      <h6 className="mb-0 fw-semibold">Fast Processing</h6>
                      <small className="text-muted">Quick turnaround</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div 
                    className="d-flex align-items-center p-3 rounded-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 167, 38, 0.1))',
                      border: '1px solid rgba(255, 107, 107, 0.2)',
                    }}
                  >
                    <div 
                      className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(45deg, #ff6b6b, #ffa726)',
                        color: 'white',
                      }}
                    >
                      🏠
                    </div>
                    <div>
                      <h6 className="mb-0 fw-semibold">From Home</h6>
                      <small className="text-muted">Complete comfort</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button
              <button 
                className="btn btn-lg rounded-pill px-4 py-3"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                Learn More About Us →
              </button> */}
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="position-relative">
              {/* Decorative frame */}
              <div 
                className="position-absolute w-100 h-100 rounded-4"
                style={{
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  transform: 'rotate(3deg)',
                  zIndex: 0,
                }}
              />
              
              {/* Image container with modern card design */}
              <div 
                className="position-relative rounded-4 overflow-hidden"
                style={{
                  background: 'white',
                  padding: '12px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  transform: 'rotate(-1deg)',
                  zIndex: 1,
                }}
              >
                <div className="position-relative rounded-3 overflow-hidden">
                  <Image
                    src="/images/home/aboutus.webp"
                    alt="About Docandeed - Real Estate Documentation Services"
                    width={600}
                    height={400}
                    className="w-100 h-auto"
                    style={{ 
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div 
                    className="position-absolute bottom-0 start-0 w-100 p-3"
                    style={{
                      background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                      color: 'white',
                    }}
                  >
                    <small className="fw-semibold">Trusted by 10,000+ customers</small>
                  </div>
                </div>
              </div>

              {/* Stats badge */}
              <div 
                className="position-absolute top-0 end-0 translate-middle badge rounded-pill"
                style={{
                  background: 'linear-gradient(45deg, #ff6b6b, #ffa726)',
                  color: 'white',
                  fontSize: '0.8rem',
                  padding: '8px 16px',
                  zIndex: 3,
                }}
              >
                5+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .btn:hover {
          transform: translateY(-2px) !important;
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;