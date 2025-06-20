'use client';

import React from 'react';
import Headertop from './Headertop';
import './Header.css';
import Link from 'next/link';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';

const Header = () => {
  const menuData = [
    {
      title: 'BBMP SERVICES',
      subcategories: [
        { label: 'Khata Registration', link: '/bbmp/khata-registration' },
        { label: 'Khata Transfer', link: '/bbmp/khata-transfer' },
        { label: 'Khata Amalgamation', link: '/bbmp/khata-amalgamation' },
        { label: 'Khata Bifurcation', link: '/bbmp/khata-bifurcation' },
        { label: 'Khata Extract & Certificate', link: '/bbmp/khata-extract-certificate' },
        { label: 'BBMP Building Plan Approval', link: '/bbmp/building-plan-approval' },
        { label: 'BBMP Tax Payments', link: '/bbmp/tax-payments' }
      ]
    },
    {
      title: 'SUB REGISTRAR SERVICES',
      subcategories: [
        { label: 'Sale Deed Registration', link: '/sub-registrar/sale-deed-registration' },
        { label: 'Sale Agreement Registration', link: '/sub-registrar/sale-agreement-registration' },
        { label: 'Power Of Attorney Registration', link: '/sub-registrar/power-of-attorney' },
        { label: 'Gift Deed Registration', link: '/sub-registrar/gift-deed' },
        { label: 'Partition Deed Registration', link: '/sub-registrar/partition-deed' },
        { label: 'Release Deed Registration', link: '/sub-registrar/release-deed' },
        { label: 'Exchange Deed Registration', link: '/sub-registrar/exchange-deed' },
        { label: 'Cancellation Deed Registration', link: '/sub-registrar/cancellation-deed' },
        { label: 'Certified Copies', link: '/sub-registrar/certified-copies' },
        { label: 'Encumbrance Certificate', link: '/sub-registrar/encumbrance-certificate' }
      ]
    },
    {
      title: 'TALUK OFFICE SERVICES',
      subcategories: [
        { label: 'RTC', link: '/taluk/rtc' },
        { label: 'Mutation Register Copies', link: '/taluk/mutation-register' },
        { label: 'Land Survey', link: '/taluk/land-survey' },
        { label: 'Property Survey Documents', link: '/taluk/property-survey-documents' },
        { label: 'Land Conversion', link: '/taluk/land-conversion' },
        { label: 'Family Tree', link: '/taluk/family-tree' },
        { label: 'Layout Approval', link: '/taluk/layout-approval' },
        { label: 'Land Podi', link: '/taluk/land-podi' },
        { label: '11E Sketch', link: '/taluk/11e-sketch' }
      ]
    },
    {
      title: 'AGREEMENTS & DRAFTS',
      subcategories: [
        { label: 'Rental Agreement', link: '/agreements/rental-agreement' },
        { label: 'Lease Agreement', link: '/agreements/lease-agreement' },
        { label: 'Construction Agreement', link: '/agreements/construction-agreement' },
        { label: 'M.O.U Agreement', link: '/agreements/mou-agreement' },
        { label: 'Material Transfer Agreement', link: '/agreements/material-transfer-agreement' },
        { label: 'Vendor Agreement', link: '/agreements/vendor-agreement' },
        { label: 'Joint Development Agreement', link: '/agreements/joint-development-agreement' }
      ]
    },
    {
      title: 'GRAM PANCHAYAT',
      subcategories: [
        { label: 'Gram Panchayat Khata Registration', link: '/gram-panchayat/khata-registration' },
        { label: 'Gram Panchayat Khata Transfer', link: '/gram-panchayat/khata-transfer' },
        { label: 'Gram Panchayat Khata Amalgamation', link: '/gram-panchayat/khata-amalgamation' },
        { label: 'Gram Panchayat Khata Bifurcation', link: '/gram-panchayat/khata-bifurcation' },
        { label: 'Gram Panchayat Khata Extract & Certificate', link: '/gram-panchayat/khata-extract-certificate' },
        { label: 'Gram Panchayat Building Plan Approval', link: '/gram-panchayat/building-plan-approval' },
        { label: 'Gram Panchayat Tax Payments', link: '/gram-panchayat/tax-payments' }
      ]
    }
  ];

  const closeDropdown = () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-menu.show');
    dropdownToggles.forEach(el => el.classList.remove('show'));
  };

  return (
    <>
      <Headertop />
      <nav className="navbar navbar-expand-lg bg-white border-bottom main-navbar py-3">
        <div className="container-fluid px-4">
          <Link className="navbar-brand d-flex align-items-center" href="/">
            <img src="/Logo.webp" alt="Logo" className="logo-img me-2" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
              <li className="nav-item">
                <Link className="nav-link active text-primary mx-2" href="/">
                  HOME
                </Link>
              </li>

              {menuData.map((menu, index) => (
                <li key={index} className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle mx-2"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {menu.title}
                  </a>
                  <ul className="dropdown-menu animate__animated animate__fadeIn shadow-sm">
                    {menu.subcategories.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          className="dropdown-item"
                          href={sub.link}
                          onClick={closeDropdown}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li className="nav-item">
                <Link className="nav-link mx-2" href="/construction-services">
                  CONSTRUCTION SERVICES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
