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
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Time Table</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>Academic Calendar</a></li>
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
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Library</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Computer Centre</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>Sports</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Hostels</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>Medical Facility</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>AICTE IDEA Lab</a></li>
                   <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>SAE Collegiate Club</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className='footer-col'>
                <h4>Information</h4>
                <ul>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> AICTE Reports</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Policies</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>Scholarship</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> NOC</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Apply Form</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>Mandatory Forms</a></li>
                   <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>UIET in News</a></li>
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