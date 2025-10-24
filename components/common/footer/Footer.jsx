import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='pt-5'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-col">
                 <a href="#"> <img src="/footer-logo.png" alt="logo" className="img-fluid"/></a>
                 <div className="socail-link">
                  <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i class="fa-solid fa-location-dot"></i></a>
                 </div>
              </div> 
            </div>
             <div className="col-md-4">
              <div className='footer-col'>
                <h4>Quick Links</h4>
                <ul>                
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span>  UIET in News</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Mandatory Disclosure</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> UIET clubs for students</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> SAE Collegiate Club UIET</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Procedure for educational qualification verification</a></li>
                  <li><a href="#"><span><i class="fa-solid fa-angles-right"></i></span> Academic Calendar for Engg. (Session: 2025-26)</a></li>
                </ul>
              </div>
             </div>
              <div className="col-md-4">
                 <div className='footer-col'>
                <h4> Haryana</h4>
                <p>Tue Oct 14 2025 15:46:16 GMT+0530 <br/>(India Standard Time)</p>
              </div>
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