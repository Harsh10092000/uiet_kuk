import SubHeader from "@/components/common/subHeader/SubHeader";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header>
       <SubHeader />

        <div className="main-header placement-header mt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="logo inner-logo">
                   <Link href="/" className="desktop-logo"><img src="/logo.png" alt="logo" className=" img-fluid" /></Link>
                  <h4>Institution's Innovation Council<span className="red">Kurukshetra University(UIET), Kurukshetra</span></h4>
                </div>
              </div>
              <div className="col-md-6">
               <div className="nav-inner">
                <ul>                
                  <li><Link href="/">Home</Link></li>                
                   <li className="dropdown">
                    <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Important Links</a>            
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link href="/iic/iic-policy.pdf">Institution Innovation and Startup Policy (IISP)  </Link></li>
                        <li><Link href="https://docs.google.com/forms/d/e/1FAIpQLSf8Kp1atShNJEBUl-5P_vsDoEcXZdYhODeFVvAEg6gGjaE3MA/viewform?pli=1">Apply Online for Community Incubation Centre </Link></li>
                        <li><Link href="#">Submit your Innovative Idea </Link></li> 
                          <li><Link href="#">ARIIA Report  </Link></li> 
                            <li><Link href="#">IIC Report 2020-21 </Link></li> 
                              <li><Link href="#">IIC Report 2021-22 </Link></li> 
                               <li><Link href="#">IIC Report 2021-23 </Link></li> 
                                          
                      </ul>            
                   </li>
                  <li><Link href="https://ecelluietkuk.vercel.app/">Ecell-UIET</Link></li>                  
                  <li><Link href="#incubation-process">Incubation Process</Link></li>
                  <li><Link href="#our-team"> Our Team</Link></li>                
                </ul>
               </div>
              </div>
            
            </div>
          </div>
          <span className="toggle-menu d-block d-lg-none"><i className="fa-solid fa-bars"></i></span>
        </div>

        {/* <nav className="mt-sm-0 mt-lg-2 main-menu">
          <div className="container">
          <ul>        
            <li><a href="/">Home</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Administration</a>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a href="/vice-chancellor">Vice Chancellor</a></li>
                <li><a href="/registrar">Registrar</a></li>
                  <li><a href="/director">Director</a></li>
                  <li><a href="/roll-of-honor-directors-uiet">Roll of Honor – Directors UIET</a></li>              
              </ul>            
            </li>

            <li className="dropdown">
              <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Department</a>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                
                <li><a href="/computer-science-engg-department">Computer Science & Engg. Department</a></li>
                <li><a href="#">Electronics & Communication Engg. Department</a></li>
                  <li><a href="#">Mechanical Engg. Department</a></li>
                  <li><a href="#">Biotechnology Engg. Department</a></li> 
                  <li><a href="#">Electrical Engg. Department</a></li>
                  <li><a href="#">Applied Sciences Department</a></li>
                
              </ul>            
            </li>

             <li className="dropdown">
              <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Faculty</a>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a href="/computer-science-engg">Computer Science & Engg.</a></li>
                <li><a href="#">Electronics and Communication Engg.</a></li>
                  <li><a href="#">Mechanical Engg.</a></li>
                  <li><a href="#">Biotechnology</a></li> 
                  <li><a href="#">Electrical Engg.</a></li>
                  <li><a href="#">Applied Sciences</a></li>
                
              </ul>            
            </li>

              <li className="dropdown">
              <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Important Link</a>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a href="#">LMS/IUMS</a></li>
                <li><a href="#">TEQIP-III</a></li>
                  <li><a href="#">Feedback / Grievance / Suggestion</a></li>
                  <li><a href="#">NIRF</a></li> 
                  <li><a href="#">Ideas/Innovation</a></li>                
                
              </ul>            
            </li>
            
         
        
          
            <li><a href="#"> Exam </a></li>
            <li><a href="#"> Admission</a></li>
     
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Academic</a>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a href="#">Emerging Areas in B.Tech</a></li>
                <li><a href="#">Program Offered & Intake</a></li>
                  <li><a href="#">R&D Activities</a></li>                        
                
              </ul>            
            </li>

             <li className="dropdown">
              <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Download</a>            
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a href="#">General & Ph.D. Syllabus</a></li>
                <li><a href="#">Syllabus B.Tech & M.Tech</a></li>
                <li><a href="#">Time-Table B.Tech & M.Tech.</a></li> 
                <li><a href="#">Reports</a></li> 
                <li><a href="#">Aicte Reports</a></li> 
                <li><a href="#">Policies</a></li> 
              </ul>            
            </li>
           
          </ul>
          </div>
          // old header
        </nav> */}
      </header>
    </div>
  );
};

export default Header;
