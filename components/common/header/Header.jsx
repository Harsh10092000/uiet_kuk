"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import SubHeader from "../subHeader/SubHeader";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    // Close all open Bootstrap dropdowns on navigation
    // This is necessary because data-bs-auto-close="outside" prevents auto-closing
    // for specific dropdowns (like Academic), and we need them to close when clicking links.
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle.show');
    dropdownToggles.forEach((toggle) => {
      toggle.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
      if (toggle.nextElementSibling) {
        toggle.nextElementSibling.classList.remove('show');
      }
    });

  }, [pathname, searchParams]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header>
        <SubHeader />

        <div className="main-header mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="logo">
                  <Link href="/" className="desktop-logo"><img src="/logo.png" alt="logo" className=" img-fluid" /></Link>
                  <Link href="/" className="mobile-logo"><img src="/logo-mobile.png" alt="logo" className=" img-fluid" /></Link>
                </div>
              </div>
              <div className="col-md-8">
                <div className="logo-tagline pt-3">
                  <Link href="/" className="desktop-logo"><img src="/logo-tagline.png" alt="tagline" className="img-fluid" /></Link>
                </div>
              </div>
              <div className="col-md-2">
                <div class="search-container mt-4">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                  />
                  <button className="search-icon">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <span className="toggle-menu d-block d-lg-none" onClick={toggleMobileMenu} style={{ cursor: 'pointer' }}><i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i></span>
        </div>

        <nav className={`mt-sm-0 mt-lg-2 main-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="container">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li className="dropdown">
                <Link href="#" className="dropdown-toggle" type="button" id="dropdownAppAdmin" data-bs-toggle="dropdown" aria-expanded="false">Administration</Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownAppAdmin">
                  <li><Link href="/vice-chancellor">Vice Chancellor</Link></li>
                  <li><Link href="/registrar">Registrar</Link></li>
                  <li><Link href="/director">Director</Link></li>
                  <li><Link href="/roll-of-honor-directors-uiet">Roll of Honor – Directors UIET</Link></li>
                  {/* <li><Link href="#">Institute</Link></li> */}
                </ul>
              </li>

              <li className="dropdown">
                <Link href="#" className="dropdown-toggle" type="button" id="dropdownAppDept" data-bs-toggle="dropdown" aria-expanded="false">Department</Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownAppDept">

                  <li><Link href="/computer-science-engg-department">Computer Science & Engg. Department</Link></li>
                  <li><Link href="/electronics-and-communication-engg-department">Electronics & Communication Engg. Department</Link></li>
                  <li><Link href="/mechanical-engg-department">Mechanical Engg. Department</Link></li>
                  <li><Link href="/biotechnology-engg-department">Biotechnology Engg. Department</Link></li>
                  <li><Link href="/electrical-engg-department">Electrical Engg. Department</Link></li>
                  <li><Link href="/applied-sciences-department">Applied Sciences Department</Link></li>

                </ul>
              </li>

              <li><Link href="/admission"> Admission</Link></li>

              <li className="dropdown">
                <Link href="#" className="dropdown-toggle" type="button" id="dropdownAppAcademic" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Examination </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownAppAcademic">

                  <li><Link href="/time-table">Time Table</Link></li>
                  <li><Link href="/academic-calendar.pdf" target="_blank">Academic Calendar</Link></li>
                  <li><Link href="/emerging-areas-in-b.tech.pdf" target="_blank">Emerging Areas</Link></li>
                  <li><Link href="/R&D_activities.jpg" target="_blank">R&D Activities</Link></li>
                  <li><Link href="/program-offered-intake.pdf" target="_blank">Program Offered & Intake</Link></li>
                  <li className="dropdown-submenu">
                    <a
                      href="#"
                      className="submenu-toggle"
                      role="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // Manual toggle for submenu
                        const submenu = e.currentTarget.nextElementSibling;
                        if (submenu) {
                          submenu.classList.toggle('show');
                        }
                      }}
                    >
                      Syllabus
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link href="/syllabus">All Departments</Link></li>
                      <li><Link href="/syllabus?department=Computer science and Engineering">Computer science and Engineering</Link></li>
                      <li><Link href="/syllabus?department=Electronics %26 Communication Engineering">Electronics & Communication Engineering</Link></li>
                      <li><Link href="/syllabus?department=Electrical and Computer Engineering">Electrical and Computer Engineering</Link></li>
                      <li><Link href="/syllabus?department=Mechanical Engineering">Mechanical Engineering</Link></li>
                      <li><Link href="/syllabus?department=Bio-Technology">Bio-Technology</Link></li>
                      <li><Link href="/syllabus?department=Industrial %26 Production">Industrial & Production</Link></li>
                      <li><Link href="/syllabus?department=Thermal Engg.">Thermal Engg.</Link></li>
                      <li><Link href="/syllabus?department=Electrical Engg.">Electrical Engg.</Link></li>
                      <li><Link href="/syllabus?department=Defence Technology">Defence Technology</Link></li>
                      <li><Link href="/syllabus?department=Others">Others</Link></li>
                    </ul>

                  </li>
                  {/* <li><Link href="/online-fee"> Online Fee</Link></li>
                  <li><Link href="/gallery"> Gallery</Link></li> */}
                </ul>
              </li>

              <li><Link href="/training-placement-cell"> Placements</Link></li>
              <li><Link href="/iic">  IIC / Start-Up</Link></li>
              <li><Link href="#">  Alumni</Link></li>
             

              <li className="dropdown">
                <Link href="#" className="dropdown-toggle" type="button" id="dropdownAppLink" data-bs-toggle="dropdown" aria-expanded="false">Important Link</Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownAppLink">
                  {/* <li><Link href="#">LMS/IUMS</Link></li> */}
                  <li><Link href="/teqip">TEQIP-III</Link></li>
                  <li><Link href="/feedback">Feedback / Grievance / Suggestion</Link></li>
                  <li><Link href="#">Grievances </Link></li>
                  <li><Link href="/ideas-innovation">Ideas/Innovation</Link></li>

                </ul>
              </li>

              {/* <li className="dropdown">
                <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Download</a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link href="/time-table">Time Table</Link></li>
                  <li><Link href="/notifications">Notifications</Link></li>
                  <li><Link href="/reports">Reports</Link></li>
                  <li><Link href="/aicte-reports">AICTE Reports</Link></li>
                  <li><Link href="/policies">Policies</Link></li>
                </ul>
              </li> */}


            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
