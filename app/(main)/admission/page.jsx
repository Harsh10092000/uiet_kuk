"use client";
import CourseCard from "@/components/addmissionForm/CoursesCard/CoursesCard";
import CourseTab from "@/components/addmissionForm/CourseTab/CourseTab";
import React from "react";
import { useState } from "react";
const page = () => {
  const [parentTab, setParentTab] = useState("1");
  const [childTab, setChildTab] = useState("1");

  const btech_coursese = [
    {
      id: "1",
      title: "Computer Science and Engineering",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "2",
      title: "Computer Science and Engineering (AI & ML)",
      Intake: "60",
      desc: "Specialize in Artificial Intelligence and Machine Learning to innovate in automation and intelligent systems.",
      img: "/2coures-card-pict.jpg",
    },

    {
      id: "3",
      title: "Electronics & Communication Engineering",
      Intake: "120",
      desc: "Master circuits, embedded systems, and communication technologies for a connected digital world.",
      img: "/3coures-card-pict.jpg",
    },

    {
      id: "4",
      title: "Electrical and Computer Engineering",
      Intake: "60",
      desc: "Combine power systems and computing for careers in modern automation and smart technology fields.",
      img: "/4coures-card-pict.jpg",
    },

    {
      id: "5",
      title: "Mechanical Engineering",
      Intake: "120",
      desc: "Learn design, thermodynamics, and manufacturing for engineering solutions that move the world forward.",
      img: "/5coures-card-pict.jpg",
    },

    {
      id: "6",
      title: "Bio-Technology",
      Intake: "120",
      desc: "Blend biology and technology to innovate in healthcare, agriculture, and environmental sciences.",
      img: "/6coures-card-pict.jpg",
    },
  ];

  const mtech_coursese = [
    {
      id: "1",
      title: "Computer Science and Engineering",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
    },
    {
      id: "2",
      title: "Electronics & Communication Engineering",
      Intake: "60",
      desc: "Specialize in Artificial Intelligence and Machine Learning to innovate in automation and intelligent systems.",
      img: "/3coures-card-pict.jpg",
    },

    {
      id: "3",
      title: "Biotechnology Engineering",
      Intake: "60",
      desc: "Specialize in Artificial Intelligence and Machine Learning to innovate in automation and intelligent systems.",
      img: "/6coures-card-pict.jpg",
    },

    {
      id: "4",
      title: "Industrial & Production",
      Intake: "120",
      desc: "Master circuits, embedded systems, and communication technologies for a connected digital world.",
      img: "/7coures-card-pict.jpg",
    },

    {
      id: "5",
      title: "Thermal Engg.",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/8coures-card-pict.jpg",
    },

    {
      id: "6",
      title: "Electrical Engg.",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/9coures-card-pict.jpg",
    },

    {
      id: "7",
      title: "Defence Technology",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/10coures-card-pict.jpg",
    },
  ];

  const phd_coursese = [
    {
      id: "1",
      title: "Computer Science and Engineering",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
    },
    {
      id: "2",
      title: "Electronics & Communication Engineering",
      Intake: "60",
      desc: "Specialize in Artificial Intelligence and Machine Learning to innovate in automation and intelligent systems.",
      img: "/3coures-card-pict.jpg",
    },

    {
      id: "3",
      title: "Mechanical Engineering",
      Intake: "60",
      desc: "Specialize in Artificial Intelligence and Machine Learning to innovate in automation and intelligent systems.",
      img: "/5coures-card-pict.jpg",
    },

    {
      id: "4",
      title: "Applied Sciences: Physics",
      Intake: "120",
      desc: "Master circuits, embedded systems, and communication technologies for a connected digital world.",
      img: "/11coures-card-pict.jpg",
    },

    {
      id: "5",
      title: "Chemistry",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/12coures-card-pict.jpg",
    },

    {
      id: "6",
      title: "Mathematics",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/13coures-card-pict.jpg",
    },
  ];

  const handleChildTab = (val) => {
    setChildTab(val);
  };

  return (
    <div>
      <section className="banner banner-bg">
        <div className="container">
          <div className="banner-content">
            <h2>Earn an Engineering Degree From UIET</h2>
            <p>
              If you want to design, develop, test, and/or supervise the
              production of innovative goods, one of University's engineering
              degrees could be ideal.
            </p>
            <a href="#" className="btn-red btn btn-lg me-3">
              Enroll Now
            </a>
            <a href="#" className="btn-red btn btn-lg">
              Admission Open Now
            </a>
          </div>
        </div>
      </section>

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

      <div class="accreditation-section">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-4 ">
              <div className="accreditation-item">
              <img src="/logo-ug-1.jpg" alt="UGC Logo" />
              <h6>UGC Entitled</h6>
              </div>
            </div>

            <div class="col-md-4">
              <div className="accreditation-item">
              <img src="/logo-ug-2.jpg" alt="NAAC Logo" />
              <h6>NAAC A++ Grade</h6>
              </div>
            </div>

            <div class="col-md-4">
               <div className="accreditation-item">
              <img src="/logo-ug-3.jpg" alt="AICTE Logo" />
              <h6>AICTE Approved</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="main-content mt-5 mb-5 ">
        <div class="container">
          <div class="about-bg">
            <div class="row">
              <div class="col-sm-10 col-md-12 col-lg-3">
                <div class="aboutpict mb-40">
                  <img src="/somnath.jpg" class="img-fluid" />
                </div>
              </div>
              <div class="col-sm-10 col-md-12 col-lg-8">
                <div class="contact-panel mb-40">
                  <h2>
                    PROF. SOM NATH SACHDEVA
                    <span class="red d-block">
                      Vice Chancellor's Message, UIET KUK.
                    </span>
                  </h2>
                  <p>
                    It is a matter of great pride that UIET was established in
                    2004 and established itself as a premier Institution in the
                    state of Haryana, imparting technical & valuable engineering
                    education with good placements. In a very short span of
                    time, the institute has carved a niche for itself among the
                    best technical institutes in Haryana and is a dream
                    institute for budding engineers. All the Under Graduate,
                    Post Graduate and Ph.D. programs are the centre stage of
                    research and development activities in UIET KUK. I am sure
                    that all the courses of the institute will prepare students
                    with skills required to develop their academic and research
                    acumen & will also provide ways to the corporates in
                    learning & developing good relations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="main-content mt-5 mb-5 ">
        <div class="container">
          <div class="about-bg">
            <div class="row">
              <div class="col-sm-10 col-md-12 col-lg-3">
                <div class="aboutpict mb-40">
                  <img src="/directoruiet.jpg" class="img-fluid" />
                </div>
              </div>
              <div class="col-sm-10 col-md-12 col-lg-8">
                <div class="contact-panel mb-40">
                  <h2>
                    Prof.Sunil Dhingra
                    <span class="red d-block">Director, UIET KUK.</span>
                  </h2>
                  <p>
                    It gives me immense pleasure to introduce University
                    Institute of Engineering and Technology (UIET) which was
                    established in 2004 in the campus of Kurukshetra University.
                    It was established with a motive ‘MIND TO MARKET’ so as to
                    achieve excellence in the key areas of engineering and to
                    produce talented and committed human resources driven by the
                    spirit of innovation and team work. Presently the institute
                    imparts training in the six key branches of Engineering
                    namely Computer Science Engineering, Computer Science & Engg
                    (AI & ML), Electronics and Communication Engineering,
                    Bio-Technology, Electrical and Computer Engineering and
                    Mechanical Engineering. We offer both graduate and post
                    graduate degrees in these branches of Engineering to more
                    than 2000 talented students from all parts of India having
                    top ranks in JEE Main exam. The Institute is accredited by
                    AICTE and ranks amongst top institutions in the state of
                    Haryana according to the perception of public and admission
                    seekers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="featured-section">
        <div class="container">
          <h2 class="section-title ">Featured Programmes</h2>
          <span className="underline d-block mt-2 mb-3 w-10"></span>
          <ul class="nav nav-tabs mb-5" id="degreeTabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="bachelor-tab"
                data-bs-toggle="tab"
                data-bs-target="#bachelor"
                type="button"
                role="tab"
                onClick={() => setParentTab(1)}
              >
                Bachelor Degree
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="master-tab"
                data-bs-toggle="tab"
                data-bs-target="#master"
                type="button"
                role="tab"
                onClick={() => setParentTab(2)}
              >
                Master Degree
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="phd-tab"
                data-bs-toggle="tab"
                data-bs-target="#phd"
                type="button"
                role="tab"
                onClick={() => setParentTab(3)}
              >
                Ph.D. Degree
              </button>
            </li>
          </ul>

          {parentTab == "1" ? (
            <div class="tab-content" id="degreeTabsContent">
              <div
                class="tab-pane fade show active"
                id="bachelor"
                role="tabpanel"
              >
                <div class="row g-4">
                  <div className="col-md-6">
                    <ul class="nav nav-tabs mb-3">
                      {btech_coursese.map((i) => (
                        <CourseTab
                          i={i}
                          handleChildTab={handleChildTab}
                          childTab={childTab}
                        />
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div class="tab-content">
                      {btech_coursese
                        .filter((a) => a.id == childTab)
                        .map((i) => (
                          <CourseCard i={i} />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : parentTab == "2" ? (
            <div class="tab-content" id="degreeTabsContent">
              <div class="" id="bachelor" role="tabpanel">
                <div class="row g-4">
                  <div className="col-md-6">
                    <ul class="nav nav-tabs mb-3">
                      {mtech_coursese.map((i) => (
                        <CourseTab
                          i={i}
                          handleChildTab={handleChildTab}
                          childTab={childTab}
                        />
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div class="tab-content">
                      {mtech_coursese
                        .filter((a) => a.id == childTab)
                        .map((i) => (
                          <CourseCard i={i} />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="tab-content" id="degreeTabsContent">
              <div class="" id="bachelor" role="tabpanel">
                <div class="row g-4">
                  <div className="col-md-6">
                    <ul class="nav nav-tabs mb-3">
                      {phd_coursese.map((i) => (
                        <CourseTab
                          i={i}
                          handleChildTab={handleChildTab}
                          childTab={childTab}
                        />
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div class="tab-content">
                      {phd_coursese
                        .filter((a) => a.id == childTab)
                        .map((i) => (
                          <CourseCard i={i} />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="clubs-section py-5">
        <div className="container">
          <h2 className="clubs-title text-center mb-5">
            STUDENTS CLUBS IN UIET
          </h2>

          <div className="row g-4">
            {/* Fine Arts Club */}
            <div className="col-md-6">
              <div className="club-card">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="/fine-art.jpg"
                      alt="Fine Arts Club"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="club-body">
                      <h5>Fine Arts Club</h5>
                      <div className="underline"></div>
                      <p>
                        The club will inculcate and promote activities related
                        to art and photography in the institute. It also
                        undertakes decoration and photography responsibilities
                        for events organized in UIET.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dance Music and Drama Club */}
            <div className="col-md-6">
              <div className="club-card ">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="/dance-drama-club.jpg"
                      alt="Dance Music and Drama Club"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="club-body">
                      <h5>Dance Music And Drama Club</h5>
                      <div className="underline"></div>
                      <p>
                        This club plays an important role in organizing cultural
                        events in UIET. It helps students showcase their talent
                        in music, dance, and drama while contributing to
                        institute-level cultural programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Literary Club */}
            <div className="row g-4">
              <div className="col-md-6">
                <div className="club-card">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="/literary-club.jpg"
                        alt="Literary Club"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="club-body">
                        <h5>Literary Club</h5>
                        <div className="underline"></div>
                        <p>
                          The Literary Club organizes literary, oratory, and
                          quiz events. It promotes communication skills through
                          workshops and interactive activities for students of
                          the institute.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="club-card">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="/adventure-club.jpg"
                        alt="Adventure Club"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="club-body">
                        <h5>Adventure Club</h5>
                        <div className="underline"></div>
                        <p>
                          The club will be in charge of sorting out Educational
                          Tours, Industrial Visits, Trips, Excursions, and
                          Adventure Activities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              {/* Adventure Club */}

              {/* Audio & Video Club */}
              <div className="col-md-6">
                <div className="club-card">
                  <div className="row">
                     <div className="col-md-4">
                       <img
                    src="/audio-video-club.jpg"
                    alt="Audio & Video Club"
                    className="img-fluid"
                  />
                    </div>
                    <div className="col-md-8">
                      <div className="club-body">
                        <h5>Audio & Video Club</h5>
                        <div className="underline"></div>
                        <p>
                          It will focus on the Sound and Light System Handling
                          of UIET auditorium and upgradation when required. It
                          also manages sound and lighting for university events
                          organized by UIET.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sports Club */}
              <div className="col-md-6">
                <div className="club-card ">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                    src="/sport-club.jpg"
                    alt="Sports Club"
                    className="img-fluid"
                  />
                    </div>
                    <div className="col-md-8">
                       <div className="club-body">
                    <h5>Sports Club</h5>
                    <div className="underline"></div>
                    <p>To organize indoor and outdoor sports activities.</p>
                  </div>
                    </div>
                  </div>
                  
                 
                </div>
              </div>
            </div>

            <div className="row g-4">
              {/* Yoga Club */}
              <div className="col-md-6">
                <div className="club-card">
                  <div className="row">
                  <div className="col-md-4">
                     <img
                    src="/yoga-club.jpg"
                    alt="Yoga Club"
                    className="img-fluid"
                  />
                  </div>
                  <div className="col-md-8">
                     <div className="club-body">
                    <h5>Yoga Club</h5>
                    <div className="underline"></div>
                    <p>
                      To organise meditation and Yoga activities for promoting
                      physical and mental well-being among students and staff.
                    </p>
                  </div>
                  </div>
                  </div>
                 
                 
                </div>
              </div>

              {/* Activity Club */}
              <div className="col-md-6">
                <div className="club-card">
                  <div className="row">
                    <div className="col-md-4">
                       <img
                    src="/activite-club.jpg"
                    alt="Activity Club"
                    className="img-fluid"
                  />
                    </div>
                     <div className="col-md-8">
                      <div className="club-body">
                    <h5>Activity Club</h5>
                    <div className="underline"></div>
                    <p>
                      The objective is to coordinate various student-related
                      activities such as farewells, freshers' events, and other
                      community-building programmes.
                    </p>
                  </div>
                     </div>
                  </div>
                 
                  
                </div>
              </div>

           
            </div>
          </div>
        </div>
      </section>

      <section className="teqip-section py-5">
        <div className="container">
          <h2 className="teqip-title mb-3">
            TECHNICAL EDUCATION QUALITY IMPROVEMENT PROGRAMME (TEQIP), PHASE–II
            AND III
          </h2>
          <div className="underline mb-4"></div>

          <div className="teqip-content">
            <p>
              UIET, KUK was declared as one of the 88 selected institutions in
              the country for TEQIP-II, Sub Component 1.1 in the National
              Steering Committee meeting on Technical Education Quality
              Improvement Programme (TEQIP) held 16th November 2011. A total of
              236 institutes in the country participated in the program and
              submitted Institutional Development Proposals (IDPs) to MHRD,
              Govt. of India [65 from Govt. / Govt. Aided 08 from central funded
              institutions and 163 from Private Unaided Institutions] for the
              award of prestigious project TEQIP-II, Sub Component 1.1. Under
              TEQIP-II, Sub component 1.1, there is provision of Rs.10.0 Crores
              grants for the strengthening of institutions to improve learning
              outcomes and employability of graduates. In order to continue the
              development activities initiated through TEQIP-I, MHRD, Govt. of
              India through TEQIP-II has planned to develop well performing
              institutions into excellent institutions comparable to the best in
              the world.
            </p>

            <p>
              The TEQIP Phase-II and TEQIP-III aim to support and upscale
              ongoing efforts of the UIET, KUK to improve the quality of
              technical education and enhance existing capacities of the
              institute in order to become dynamic, demand-driven,
              quality-conscious, efficient, and forward-looking institution.
              With the support of MHRD project, the institute aims to develop
              responsive and quality engineering manpower to cope with rapid
              economic and technological developments occurring both at national
              and international levels.
            </p>

            <p>
              The major benefits of the project are in strengthening of the
              Institute for scaled-up postgraduate education and demand-driven
              R&D, innovation, establishment of Centre of Excellence and
              imparting of pedagogical training to the faculty aimed to improve
              learning outcomes for increased employability of graduates. Under
              this project, schemes like faculty development, technical and
              support staff development, equipment and infrastructure
              improvement, curriculum development and implementation,
              development of learning resources & library facilities, promotion
              of industry interaction, system management capacity improvement,
              enhancing quality and reach of service to the community will be
              undertaken.
            </p>
          </div>
        </div>
      </section>

      <section className="facilities-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 facilities-list">
              <h2 className="facilities-title">Facilities</h2>
              <ul>
                <li>University Library</li>
                <li>Students’ Support Services</li>
                <li>Supporting International Students</li>
                <li>On-Campus Hostel Accommodation</li>
                <li>Health Care</li>
                <li>Career and Counseling Cell</li>
                <li>Placement Cell</li>
                <li>
                  Internal Complaints Committee (ICC) against Sexual Harassment
                  of Women at Work Place (Prevention, Prohibition and Redressal)
                </li>
                <li>Co-curricular Activities</li>
                <li>Sports</li>
                <li>Department of Youth and Cultural Affairs</li>
                <li>National Cadet Corps (NCC)</li>
                <li>National Service Scheme (NSS)</li>
                <li>SC/ST Cell</li>
                <li>Wi-Fi facility</li>
              </ul>
            </div>

            <div className="col-md-6 facilities-img text-center">
              <img
                src="/facility-daigram.png"
                alt="Facilities Diagram"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="recruiters-section py-5 text-center">
        <div className="container">
          <h2 className="recruiters-title mb-3">OUR RECRUITERS</h2>
          <div className="underline mb-5 mx-auto"></div>

          <div className="row justify-content-center g-4">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="recruiter-card">
                <img src="/wipro.png" alt="Wipro" />
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div className="recruiter-card">
                <img src="/accenture.png" alt="Accenture" />
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div className="recruiter-card">
                <img src="/tcs.png" alt="TCS" />
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div className="recruiter-card">
                <img src="/hp.png" alt="HP" />
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div className="recruiter-card">
                <img src="/yamaha.png" alt="Yamaha" />
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
              <div className="recruiter-card">
                <img src="/capgemini.png" alt="Capgemini" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="placement-section text-center">
        <div className="container">
          <h2 className="placement-title">PLACEMENT INSIGHTS</h2>
          <div className="underline mx-auto"></div>
          <p>
            The Placement Cell provides career guidance and facilitates
            corporate interaction to the University students and more so for
            students enrolled in the professional courses. The cell is headed by
            Placement Officer and there are teacher Coordinators at departmental
            level. It Coordinates and organizes campus interviews/ placement
            drives/ summer internship etc. The Cell also organizes and
            coordinates Personality Development, Soft Skills Development,
            Entrepreneurship Development Programmes, Executive Meets,
            Motivational Talks and other activities related to the career and
            personal development of the University students.
          </p>

          <div className="row g-4 justify-content-center">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">NISHU RAM</h5>
                <p className="student-details">
                  BEL, Package: 10.4 LPA, B.Tech Mechanical
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">ARTI</h5>
                <p className="student-details">
                  Federal Bank, Package: 13.0 LPA, B.Tech
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">SUNNY PANCHAL</h5>
                <p className="student-details">
                  BEL, Package: 10.4 LPA, B.Tech Mechanical
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">YASHIKA ATREJA</h5>
                <p className="student-details">
                  Hughes Systique, Package: 10.6 LPA, B.Tech CSE
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">SUNISH DAHIYA</h5>
                <p className="student-details">
                  Amazon, Package: 28 LPA, B.Tech CSE
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">TANUJ SHARMA</h5>
                <p className="student-details">
                  Maruti, GET Package: 10.34 LPA, B.Tech Mechanical
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">NAMAN MITTAL</h5>
                <p className="student-details">
                  Amazon, Package: 28 LPA, B.Tech CSE
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">JITESH YADAV</h5>
                <p className="student-details">
                  Maruti Suzuki, GET Package: 10.34 LPA, B.Tech Mechanical
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">SONALI SINGH</h5>
                <p className="student-details">Info Edge, Package: —, B.Tech</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">BHUPESH</h5>
                <p className="student-details">Federal Bank, Package: —</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">BHAVYAM KAPOOR</h5>
                <p className="student-details">
                  Maruti Suzuki, GET Package: 10.34 LPA, B.Tech Mechanical
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3 ">
              <div className="placement-card">
                <h5 className="student-name">PRANSHU PAREEK</h5>
                <p className="student-details">
                  Vitalic Health Pvt. Ltd., GET Package: 13.09 LPA, B.Tech
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">ABHINEET VERMA</h5>
                <p className="student-details">
                  JINDAL SOUTH WEST (JSW), Package: 6.5 LPA, B.Tech Mechanical
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">SONALI SINGH</h5>
                <p className="student-details">Info Edge, Package: —, B.Tech</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">BHUPEESH</h5>
                <p className="student-details">Federal Bank, Package: —</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="placement-card">
                <h5 className="student-name">BHAVYAM KAPOOR</h5>
                <p className="student-details">
                  Maruti Suzuki, GET Package: 10.34 LPA, B.Tech Mechanical
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
