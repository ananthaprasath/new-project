import React from 'react';
import './Header.css';


const Headertop = () => {
  return (
    <div className="header-top d-flex align-items-center justify-content-between px-3 py-2">
      <div className="d-flex align-items-center gap-3">
        <div className="d-flex align-items-center">
          <i className="bi bi-telephone me-2"></i> +91 7892844385
        </div>
        <div className="d-flex align-items-center">
          <i className="bi bi-envelope me-2"></i> info@docandeed.com
        </div>
      </div>

      {/* <div>
        <button className="btn translate-btn">Translate »</button>
      </div> */}

      <div className="d-flex align-items-center gap-3 social-icons">
        <a href="#"><i className="bi bi-facebook"></i></a>
        <a href="#"><i className="bi bi-instagram"></i></a>
        <a href="#"><i className="bi bi-whatsapp"></i></a>
        <a href="#"><i className="bi bi-search"></i></a>
        {/* <a href="#"><i className="bi bi-cart"></i></a> */}
      </div>
    </div>
  );
}

export default Headertop;
