import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header>
        <div className="topbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="top-left list">
                  <ul>
                    <li>
                      <span>
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <a target="_blank" href="tel:01744239155">01744-239155</a>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <a target="_blank" href="mailto:director.uiet@kuk.ac.in">
                        director.uiet@kuk.ac.in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="top-right list">
                  <ul>
                    <li>
                      <Link href="#">MRCN 2023</Link>
                    </li>
                    <li>
                      <Link href="#">MRCN 2024</Link>
                    </li>
                    <li>
                      <Link href="#">MRCN 2025</Link>
                    </li>
                    <li>
                      <Link href="#">Feedback</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/iic">IIC/Startup </Link>
                    </li>
                    <li>
                      <Link href="/training-placement-cell">T&P Cell</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <Link href="/" className="desktop-logo"><img src="/logo-tagline.png" alt="tagline" className="img-fluid"  /></Link>
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
              </ul>            
            </li>

            <li className="dropdown">
              <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Department</Link>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                
                  <li><Link href="/computer-science-engg-department">Computer Science & Engg. Department</Link></li>
                  <li><Link href="#">Electronics & Communication Engg. Department</Link></li>
                  <li><Link href="#">Mechanical Engg. Department</Link></li>
                  <li><Link href="#">Biotechnology Engg. Department</Link></li> 
                  <li><Link href="#">Electrical Engg. Department</Link></li>
                  <li><Link href="#">Applied Sciences Department</Link></li>
                
              </ul>            
            </li>

             <li className="dropdown">
              <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Faculty</Link>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link href="/faculty-of-computer-science-engineering">Computer Science & Engg.</Link></li>
                <li><Link href="#">Electronics and Communication Engg.</Link></li>
                  <li><Link href="#">Mechanical Engg.</Link></li>
                  <li><Link href="#">Biotechnology</Link></li> 
                  <li><Link href="#">Electrical Engg.</Link></li>
                  <li><Link href="#">Applied Sciences</Link></li>
                
              </ul>            
            </li>

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
            
            <li className="dropdown">
              <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Examination</Link>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link href="https://iums.kuk.ac.in" target="_blank">LMS/IUMS</Link></li>
                <li><Link href="/examination"> Exam Notices</Link></li>
                <li><Link href="#"> Syllabus</Link></li>
                <li><Link href="#"> Date Sheet </Link></li>
                <li><Link href="#"> Results </Link></li>
                <li><Link href="#"> Syllabus</Link></li>
              
              </ul>            
            </li>
         
        
          
           
            <li><Link href="/admission"> Admission</Link></li>
     
            <li className="dropdown">
              <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Academic</Link>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link href="#">Emerging Areas in B.Tech</Link></li>
                <li><Link href="#">Program Offered & Intake</Link></li>
                  <li><Link href="#">R&D Activities</Link></li>                        
                  <li><Link href="/online-fee"> Online Fee</Link></li>
                  <li><Link href="/gallery"> Gallery</Link></li>
              </ul>              
            </li>

             <li className="dropdown">
              <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Download</a>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link href="#">Time Table</Link></li>
                <li><Link href="#">Notifications</Link></li>
                <li><Link href="#">Reports</Link></li> 
                <li><Link href="#">Aicte Reports</Link></li> 
                <li><Link href="#">Policies</Link></li> 
              </ul>            
            </li>
           
            
          </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
