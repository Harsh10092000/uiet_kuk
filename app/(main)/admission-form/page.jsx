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
      img: "/coures-card-pict.jpg",
    },

    {
      id: "3",
      title: "Electronics & Communication Engineering",
      Intake: "120",
      desc: "Master circuits, embedded systems, and communication technologies for a connected digital world.",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "4",
      title: "Computer Science and Engineering",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "5",
      title: "Computer Science and Engineering",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "6",
      title: "Computer Science and Engineering",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
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
      img: "/coures-card-pict.jpg",
    },

    {
      id: "3",
      title: "Biotechnology Engineering",
      Intake: "60",
      desc: "Specialize in Artificial Intelligence and Machine Learning to innovate in automation and intelligent systems.",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "4",
      title: "Industrial & Production",
      Intake: "120",
      desc: "Master circuits, embedded systems, and communication technologies for a connected digital world.",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "5",
      title: "Thermal Engg.",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "6",
      title: "Electrical Engg.",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "7",
      title: "Defence Technology",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
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
      img: "/coures-card-pict.jpg",
    },

    {
      id: "3",
      title: "Mechanical Engineering",
      Intake: "60",
      desc: "Specialize in Artificial Intelligence and Machine Learning to innovate in automation and intelligent systems.",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "4",
      title: "Applied Sciences: Physics",
      Intake: "120",
      desc: "Master circuits, embedded systems, and communication technologies for a connected digital world.",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "5",
      title: "Chemistry",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
    },

    {
      id: "6",
      title: "Mathematics",
      Intake: "120",
      desc: "Develop skills in programming, algorithms, and emerging technologies to build the future of computing",
      img: "/coures-card-pict.jpg",
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
            <div class="col-md-4 accreditation-item">
              <img src="/logo-ug-1.jpg" alt="UGC Logo" />
              <h6>UGC Entitled</h6>
            </div>

            <div class="col-md-4 accreditation-item">
              <img src="/logo-ug-2.jpg" alt="NAAC Logo" />
              <h6>NAAC A++ Grade</h6>
            </div>

            <div class="col-md-4 accreditation-item">
              <img src="/logo-ug-3.jpg" alt="AICTE Logo" />
              <h6>AICTE Approved</h6>
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
          <h2 class="section-title">Featured Programmes</h2>

          <ul class="nav nav-tabs mb-3" id="degreeTabs" role="tablist">
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
              <div
                class=""
                id="bachelor"
                role="tabpanel"
              >
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
              <div
                class=""
                id="bachelor"
                role="tabpanel"
              >
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
    </div>
  );
};

export default page;
