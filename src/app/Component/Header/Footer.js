'use client';

import React from 'react';
import './Header.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-5">

            <div className="col-lg-4 col-md-6">
              <h5>About Docandeed</h5>
              <p className="small-text">
                Docandeed is Bangalore based startup for providing online documentation service platform for properties (Real Estate). Launched in 2019, Docandeed today operates in Bangalore.
              </p>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5>Quick Links</h5>
              <ul className="list-unstyled footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5>Our Address</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.222066890386!2d77.58585687594335!3d12.93975011567356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae154bff40915d%3A0xe5c42e9b13e0c74!2sAGB%20layout!5e0!3m2!1sen!2sin!4v1623155985175!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              ></iframe>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5>Follow Us</h5>
              <div className="social-icons d-flex gap-4 mt-3">
                <a href="#"><i className="bi bi-facebook fs-4"></i></a>
                <a href="#"><i className="bi bi-instagram fs-4"></i></a>
                <a href="#"><i className="bi bi-whatsapp fs-4"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-4 mt-4">
        <div className="container">
          <small>© 2025 Docandeed. All rights reserved. Designed & Developed by <strong>Orion Techgen</strong></small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
