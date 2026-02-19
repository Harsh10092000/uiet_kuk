import React from 'react'
import Link from 'next/link'
const SubHeader = () => {
  return (
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
                {/* <li>
                  <Link href="/mrcn-2023">MRCN 2023</Link>
                </li>
                <li>
                  <Link href="/mrcn-2024">MRCN 2024</Link>
                </li>
                <li>
                  <Link href="/mrcn-2025">MRCN 2025</Link>
                </li> */}
                <li>
                  <Link href="/feedback">Feedback</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                {/* <li>
                      <Link href="/iic">IIC/Startup </Link>
                    </li> */}
                {/* <li>
                      <Link href="/training-placement-cell">T&P Cell</Link>
                    </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubHeader