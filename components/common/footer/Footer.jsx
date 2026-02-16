import React from 'react'
import LiveClock from './LiveClock'

const Footer = () => {
  return (
    <div>
      <footer className='pt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-col">
                <a href="#"> <img src="/footer-logo.png" alt="logo" className="img-fluid" /></a>
                <div className="socail-link">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                  <a href="#"><i class="fa-solid fa-location-dot"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className='footer-col'>
                <h4>Academics</h4>
                <ul>
                  <li><a href="/time-table"><span><i class="fa-solid fa-angles-right"></i></span> Time Table</a></li>
                  <li><a href="/academic-calendar.pdf" target='_blank'><span><i class="fa-solid fa-angles-right"></i></span>Academic Calendar</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>Syllabus B.Tech</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Syllabus M.Tech</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Syllabus Ph.D</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> General</a></li>
                </ul>
              </div>
            </div>
              <div className="col-md-3">
              <div className='footer-col'>
                <h4>Facilities</h4>
                <ul>
                  <li><a href="/Library10.pdf" target='_blank'><span><i class="fa-solid fa-angles-right"></i></span> Library</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Computer Centre</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>Sports</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Hostels</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>Medical Facility</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>AICTE IDEA Lab</a></li>
                   <li><a href="/sae-club-webpage.pdf" target='_blank'><span><i class="fa-solid fa-angles-right"></i></span>SAE Collegiate Club</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className='footer-col'>
                <h4>Information</h4>
                <ul>
                  <li><a href="/aicte-reports"><span><i class="fa-solid fa-angles-right"></i></span> AICTE Reports</a></li>
                  <li><a href="/policies"><span><i class="fa-solid fa-angles-right"></i></span> Policies</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>Scholarship</a></li>
                  <li><a href="/NCC-Presentation.pdf" target='_blank'><span><i class="fa-solid fa-angles-right"></i></span> NCC</a></li>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScs_65te_-_Z-36q6M3pQK58ejc-HcVPtrfc6A-cMjLWWOBgA/viewform?pli=1" target='_blank'><span><i class="fa-solid fa-angles-right"></i></span>Application form</a></li>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSc-sKZCaoXPpn0a_1pwR3VTF7rRWLSHE6yOFewrrhrblAFMxA/viewform" target='_blank'><span><i class="fa-solid fa-angles-right"></i></span>Mandatory Forms</a></li>
                   <li><a href="https://new.express.adobe.com/webpage/Z18MbXQjKF4eL?" target='_blank'><span><i class="fa-solid fa-angles-right"></i></span>UIET in News</a></li>


              
          

                </ul>
              </div>              
              {/* <div className='footer-col'>
                <h4> Haryana</h4>
                <p><LiveClock /></p>
              </div> */}
            </div>
           
          </div>
        </div>
        <div className='copyright'>
          <p>© 2023 UIET Kurukshetra. All Right Reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default Footer