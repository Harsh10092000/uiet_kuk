import React from "react";
import Link from "next/link";
import SubHeader from "../subHeader/SubHeader";

const Header = () => {
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
          <span className="toggle-menu d-block d-lg-none"><i className="fa-solid fa-bars"></i></span>
        </div>

        <nav className="mt-sm-0 mt-lg-2 main-menu">
          <div className="container">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li className="dropdown">
                <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Administration</Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">                  
                  <li><Link href="/vice-chancellor">Vice Chancellor</Link></li>
                  <li><Link href="/registrar">Registrar</Link></li>
                  <li><Link href="/director">Director</Link></li>
                  <li><Link href="/roll-of-honor-directors-uiet">Roll of Honor – Directors UIET</Link></li>
                   {/* <li><Link href="#">Institute</Link></li> */}
                </ul>
              </li>

              <li className="dropdown">
                <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Department</Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                  <li><Link href="/computer-science-engg-department">Computer Science & Engg. Department</Link></li>
                  <li><Link href="/electronics-and-communication-engg-department">Electronics & Communication Engg. Department</Link></li>
                  <li><Link href="/mechanical-engg-department">Mechanical Engg. Department</Link></li>
                  <li><Link href="/biotechnology-engg-department">Biotechnology Engg. Department</Link></li>
                  <li><Link href="/electrical-engg-department">Electrical Engg. Department</Link></li>
                  <li><Link href="/applied-sciences-department">Applied Sciences Department</Link></li>

                </ul>
              </li>

              {/* <li className="dropdown">
                <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Faculty</Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link href="/faculty-of-computer-science-engineering">Computer Science & Engg.</Link></li>
                  <li><Link href="#">Electronics and Communication Engg.</Link></li>
                  <li><Link href="#">Mechanical Engg.</Link></li>
                  <li><Link href="#">Biotechnology</Link></li>
                  <li><Link href="#">Electrical Engg.</Link></li>
                  <li><Link href="#">Applied Sciences</Link></li>

                </ul>
              </li> */}

               <li><Link href="/admission"> Admission</Link></li>

             

              {/* <li className="dropdown">
                <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Examination</Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link href="https://iums.kuk.ac.in" target="_blank">LMS/IUMS</Link></li>
                  <li><Link href="/examination"> Exam Notices</Link></li>
                  <li><Link href="/syllabus"> Syllabus</Link></li>
                  <li><Link href="/datesheet"> Date Sheet </Link></li>
                  <li><Link href="/results"> Results </Link></li>                

                </ul>
              </li> */}




             

              <li className="dropdown">
                <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Academic</Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  
                  <li><Link href="/time-table">Time Table</Link></li>
                   <li><Link href="/academic-calendar.pdf" target="_blank">Academic Calendar</Link></li>   
                    <li><Link href="/emerging-areas-in-b.tech.pdf" target="_blank">Emerging Areas</Link></li>              
                  <li><Link href="/R&D_activities.jpg" target="_blank">R&D Activities</Link></li>
                   <li><Link href="/program-offered-intake.pdf" target="_blank">Program Offered & Intake</Link></li>
                   <li className="dropend"><Link href="#" className="dropdown-toggle" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">Syllabus </Link>
                   <ul className="dropdown-menu">
                       <li><Link href="#">CSE </Link></li>
                        <li><Link href="#">AIML</Link></li>
                         <li><Link href="#">ECE</Link></li>
                         <li><Link href="#">ME</Link></li>
                        <li><Link href="#">BT</Link></li>
                         <li><Link href="#">ECO</Link></li>
                        <li><Link href="#">First Year</Link></li>
                   </ul>
                   
                   </li>
                  {/* <li><Link href="/online-fee"> Online Fee</Link></li>
                  <li><Link href="/gallery"> Gallery</Link></li> */}
                </ul>
              </li>

                <li><Link href="/training-placement-cell"> Placements</Link></li>
                <li><Link href="/iic">  IIC / Start-Up</Link></li>
                 <li><Link href="/gallery"> Gallery</Link></li>

               <li className="dropdown">
                <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Important Link</Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {/* <li><Link href="#">LMS/IUMS</Link></li> */}
                  <li><Link href="/teqip">TEQIP-III</Link></li>
                  <li><Link href="/feedback">Feedback / Grievance / Suggestion</Link></li>
                  <li><Link href="#">NIRF</Link></li>
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
