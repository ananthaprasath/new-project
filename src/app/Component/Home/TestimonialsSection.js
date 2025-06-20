'use client';
 
import React from 'react';
import './TestimonialSection.css';
 
const TestimonialSection = () => {
  return (
<section className="testimonial-section py-5 bg-light">
<div className="container">
<div className="row align-items-start">
<div className="col-md-4 mb-4">
<h2 className="testimonial-title">
              What our <br />
              customers are <br />
              saying about <br />
              our services?
</h2>
</div>
 
          <div className="col-md-4 mb-4">
<div className="testimonial-box shadow-sm p-4">
<p className="testimonial-text">
                I was in confusion & where to find the right platform online for my khata registration and I’m on the right place — one of the best services from Docandeed Team.
</p>
<p className="testimonial-author mb-0 fw-bold">Likhith Kumar</p>
<p className="testimonial-role text-muted">IT Company Owner</p>
</div>
</div>
 
          <div className="col-md-4 mb-4">
<div className="testimonial-box shadow-sm p-4">
<p className="testimonial-text">
                I had issues with my company’s tax payment. Docandeed team gave proper service and helpful guidance throughout the process.
</p>
<p className="testimonial-author mb-0 fw-bold">Manish Singh</p>
<p className="testimonial-role text-muted">Marketing Manager</p>
</div>
</div>
</div>
 
        <div className="newsletter-note mt-5 text-start">
<p className="text-muted fs-5">
            Don’t miss out on our monthly <br /> newsletter
</p>
</div>
</div>
</section>
  );
};
 
export default TestimonialSection;

