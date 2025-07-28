'use client';
import { useEffect, useState } from 'react';
import styles from './HeroSection.module.css';

const images = [
  '/images/home/real.jpg',
  '/images/home/Document.jpg',
  '/images/home/designer.jpg'
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Image changes every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className={styles.overlay}>
        <div className="container text-center text-white py-5">
          <h1 className="display-4 fw-bold">DOCANDEED</h1>
          <p className="lead text-center">
            Buy & Sell Never Ends Your Risk<br />
            But Documentation Does !!!<br />
            <span className="fst-italic">"We Add Value To Your Assets"</span>
          </p>
          <a href="tel:+9197892844385" className="btn btn-primary btn-lg mt-3">
            Let's Talk?
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


