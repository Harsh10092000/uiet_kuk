export default function Home() {
  return (
    <>
      {/* <section className="banner-slide">
      <div className="slide-pict">
          <img src="/slide-1.jpg" alt="slide1"/>
      </div>      
   </section> */}

      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="/slide-1.jpg"
              alt="Los Angeles"
              class="d-block img-fluid"
            />
          </div>
          <div class="carousel-item">
            <img src="/slide-2.jpg" alt="Chicago" class="d-block img-fluid" />
          </div>
          <div class="carousel-item">
            <img src="/slide-3.jpg" alt="New York" class="d-block img-fluid" />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <section className="Bulletin">
        <div className="container">
          <div className="bg-light-gray">
            <div className="row">
              <div className="col-md-2">
                <div className="tagline">Bulletin</div>
              </div>
              <div className="col-md-10">
                <div className="list-news">
                  <marquee direction="left" id="marque">
                    <a href="#" target="_blank">
                      <b>
                        {" "}
                        Announcement for inviting Applications for WIS FORUM
                        Awards{" "}
                      </b>
                    </a>
                    <a href="#" target="_blank">
                      <b> Guidelines</b>
                    </a>

                    <a href="#" target="_blank">
                      <b> International Gita Olympiad 2025 </b>
                    </a>

                    <a href="#" target="_blank">
                      <b> A++ Grade NAAC Accredited </b>
                    </a>

                    <a href="#" target="_blank">
                      Announcement of Goyal Prizes and Rajib Goyal prizes for
                      Young Scientists 2023-24
                    </a>

                    <a href="#" target="_blank">
                      Apply for Virtual Internship Programme (VIP)
                    </a>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Bulletin admission-notifaction">
        <div className="container">
          <div className="bg-light-gray">
            <div className="row">
              <div className="col-md-3">
                <div className="tagline">Admissions 2025-26</div>
              </div>
              <div className="col-md-9">
                <div className="list-news">
                  <marquee direction="left" id="marque">
                    <a href="#" target="_blank">
                      <b>
                        {" "}
                        Announcement for inviting Applications for WIS FORUM
                        Awards{" "}
                      </b>
                    </a>
                    <a href="#" target="_blank">
                      <b> Guidelines</b>
                    </a>

                    <a href="#" target="_blank">
                      <b> International Gita Olympiad 2025 </b>
                    </a>

                    <a href="#" target="_blank">
                      <b> A++ Grade NAAC Accredited </b>
                    </a>

                    <a href="#" target="_blank">
                      Announcement of Goyal Prizes and Rajib Goyal prizes for
                      Young Scientists 2023-24
                    </a>

                    <a href="#" target="_blank">
                      Apply for Virtual Internship Programme (VIP)
                    </a>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-block pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 border-right">
              <div className="message-block ">
                <h3>
                  Vice Chancellor <span className="red">Speaks</span>
                </h3>
                <div className="profile-info mt-4 mb-5">
                  <div className="profile">
                    <img src="/som-nath.jpg" alt="img-fluid" />
                  </div>
                  <div className="profile-details">
                    <h4>Prof. Som Nath Sachdeva</h4>
                    <p>
                      It is a matter of great pride that UIET was established in
                      2004 and established itself as a premier Institution in
                      the state of Haryana, imparting technical & valuable
                      engineering education with good placements. In a very
                      short span of time, the institute has carved a niche for
                      itself among the best technical institutes in Haryana and
                      is a dream institute for budding engineers.
                    </p>
                    <a href="/vice-chancellor" className="red">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
              <div className="message-block mt-150">
                <h3>
                  Director,<span className="red"> UIET KUK.</span>
                </h3>
                <div className="profile-info mt-4">
                  <div className="profile">
                    <img src="/sunil-dhingra.jpg" alt="img-fluid" />
                  </div>
                  <div className="profile-details">
                    <h4>Prof.Sunil Dhingra</h4>
                    <p>
                      It gives me immense pleasure to introduce University
                      Institute of Engineering and Technology (UIET) which was
                      established in 2004 in the campus of Kurukshetra
                      University. It was established with a motive 'MIND TO
                      MARKET' so as to achieve excellence in the key areas of
                      engineering and to produce talented and committed human
                      resources .
                    </p>
                    <a href="/director" className="red">
                      Read More...
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-content message-block">
                <h3 className="mb-3 mt-0">
                  About <span className="red">Us</span>
                </h3>
                <p>
                  University Institute of Engineering & Technology (UIET) was
                  established by Kurukshetra University in 2004 with objective
                  to develop as a "Centre of Excellence" and offer quality
                  technical education and to undertake research in Engineering &
                  Technology.
                </p>

                <p>
                  Presently, the institute is offering six B. Tech Courses
                  (Computer Science & Engineering,Computer Science & Engineering
                  (AI & ML), Electronics and Communication Engineering,
                  Electrical & Computer Engineering, Biotechnology and
                  Mechanical Engineering) and seven M. Tech. courses in the
                  technically important disciplines Computer Science &
                  Engineering, Electronics and Communication\ Engineering,
                  Mechanical Engg.{" "}
                </p>

                <a href="#" className="btn-red">
                  Read More..
                </a>

                <div className="mission-vission">
                  <h4>Our Vision</h4>
                  <p>
                    To Contribibute to the Nation through best practices in
                    Technical Education and be recognized as one of the most
                    Comprehensive Institute in India.
                  </p>
                </div>

                <div className="mission-vission">
                  <h4>Our Mission</h4>
                  <p>
                    To Educate the Students of Engineering & Technology by
                    providing Value Based Technical Education. To produce
                    skilled Engineering Graduates to cater to the needs of
                    Industry and society. To develop dynamic and innovative
                    researchers/entrepreneurs in the field of Enineering and
                    Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="take-a-tour bg-gray pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="video-block">
                <h2>Take a Tour</h2>
                <div className="video">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/4t4_K1Xq5Sc?si=wQGB9oexOxHvTGvt&amp;start=15"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <a href="#" className="admission-update">
                  Admission Updates
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="btn-list">
                <ul>
                  <li>
                    <a href="#" class="gradient-btn">
                      {" "}
                      Library details
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn">
                      {" "}
                      Fee Stucture for B.Tech Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn">
                      National Cadet Corps
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn">
                      {" "}
                      Application form
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn">
                      {" "}
                      Say No to Ragging
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn">
                      {" "}
                      Scholarship Notice
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn">
                      {" "}
                      University Notices
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn">
                      Miscellaneous Notices
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div class="notification-block">
                <h4>
                  <span>
                    <img src="/announment.png" alt="icon" />
                  </span>
                  Announcements
                </h4>
                <marquee
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                  direction="up"
                  scrollamount="2"
                  height="160px"
                  loop=""
                >
                  <ul>
                    <li>
                      <a href="#">
                        INTERNATIONAL CONFERENCE ON Reimagining Business:
                        Innovate, Include & Thrive
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Two-Day National Seminar on ‘Towards Satyadharma:
                        Appraising Jotirao Phule, His Reformation Movement and
                        Legacies’
                      </a>
                    </li>
                  </ul>
                </marquee>
              </div>

              <div class="notification-block mt-3">
                <h4>
                  <span>
                    <img src="/notification.png" alt="icon" />
                  </span>
                  Notifications
                </h4>
                <marquee
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                  direction="up"
                  scrollamount="2"
                  height="160px"
                  loop=""
                >
                  <ul>
                    <li>
                      <a href="#">
                        INTERNATIONAL CONFERENCE ON Reimagining Business:
                        Innovate, Include & Thrive
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Two-Day National Seminar on ‘Towards Satyadharma:
                        Appraising Jotirao Phule, His Reformation Movement and
                        Legacies’
                      </a>
                    </li>
                  </ul>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="coures-block pt-5 pb-5">
        <div className="container">
          <div className="main-title text-center">
            <h2>
              <span className="red d-block">Courses Offered</span>Courses
              Designed for Your Success
            </h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3">
              <div className="course-box">
                <div className="course-icon red">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <h5>Computer Science &Engg. Department</h5>
                <p>
                  The Department of Computer Science & Engineering was
                  established in the year 2004.
                </p>
                <p>
                  <a href="#" className="red">
                    View More..
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="course-box">
                <div className="course-icon red">
                  <i class="fa-solid fa-bolt"></i>
                </div>
                <h5>Electronics & Comm. Engg Department.</h5>
                <p>
                  The Department of Electronics and Communication Engg.(ECE)was
                  established in the year 2004.
                </p>
                <p>
                  <a href="#" className="red">
                    View More..
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="course-box">
                <div className="course-icon red">
                  <i class="fa-solid fa-gears"></i>
                </div>
                <h5>Mechanical Engg. Department</h5>
                <p>
                  The B.Tech courses in Mechanical Engineering are broad based
                  and integral with emphasis.
                </p>
                <p>
                  <a href="#" className="red">
                    View More..
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="course-box">
                <div className="course-icon red">
                  <i class="fa-solid fa-flask"></i>
                </div>
                <h5>Biotechnology Department</h5>
                <p>
                  U.I.E.T. is one of the pioneer institutes providing B.Tech.
                  and M.Tech. in Biotechnology.
                </p>
                <p>
                  <a href="#" className="red">
                    View More..
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="latest-news-link">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div class="btn-list">
                <ul>
                  <li>
                    <a href="#" class="gradient-btn red-btn">                
                      University Notices
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn red-btn">                   
                     College Notices
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn red-btn">
                     Student Notices
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn red-btn">                 
                    Employee’s Notices
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gradient-btn red-btn">                   
                     Miscellaneous Notices
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="latest-notice notification-block">
                <h5>Latest Notice & Circulars</h5>
                 <marquee
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                  direction="up"
                  scrollamount="2"
                  height="220px"
                  loop=""
                >
                <ul>
                  <li>Notification regarding PMS for the session 2025-26 for SC/BC students.</li>
                  <li>Notification for inviting quotations for Cultural Directors or coaches</li>
                  <li>TEN-DAY COACHING PROGRAMME FOR BANK PO (PRELIMINARY) EXAMINATION
                  Application Form</li>
                  <li>Admission Notice: Additional 10 Seats in BBA(H)</li>
                  <li>International Gita Olympiad 2025</li>
                  <li>Prospectus July 2025 (CDOE)</li>
                </ul>
                </marquee>              
              </div>
              <div className="text-center mt-2">
                <a href="#" class="btn-red">View All</a>
                </div>
            </div>
            <div className="col-md-4">

              <div className="helpline-number latest-notice notification-block">
                 <h5>Helpline Numbers for<br/> Women Safety</h5>
                 <div class="table-responsive">               

                    <table class="table table-bordered table-sm">                      
                      <tbody>
                        <tr>
                              <td>Security Officer</td>
                              <td>7082113077</td>                          
                            </tr>
                        <tr>
                          <td>Proctor</td>
                          <td>3022 Intercom,7082113124</td>
                        
                        </tr>
                        <tr>
                          <td>ICCASH</td>
                        <td>2986 Intercom,9812665659</td>
                        
                        </tr>
                        <tr>
                          <td>WSRC</td>
                          <td>2727 Intercom,239665</td>
                        </tr>
                      </tbody>
                     </table>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="counter-block mt-5">
        <div className="container">
          <div class="row">
            <div className="col-md-3">
              <div className="counter-box">
                <strong>20,000+</strong>
                <h4>Happy Students</h4>
              </div>
            </div>

             <div className="col-md-3">
              <div className="counter-box">
                <strong>300+</strong>
                <h4>Faculty</h4>
              </div>
            </div>

             <div className="col-md-3">
              <div className="counter-box">
                <strong>10,000+</strong>
                <h4>Student Placement </h4>
              </div>
            </div>

             <div className="col-md-3">
              <div className="counter-box">
                <strong>100%</strong>
                <h4>Student Result</h4>
              </div>
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
}
