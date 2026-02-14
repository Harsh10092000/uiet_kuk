import TeacherCard from "@/components/common/teacherCard/TeacherCard";
import React from "react";

export const metadata = {
  title: "Institution's Innovation Council (IIC) | UIET KUK",
  description: "IIC at UIET KUK promoting innovation and entrepreneurship among students.",
  openGraph: {
    title: "Institution's Innovation Council (IIC) | UIET KUK",
    description: "IIC at UIET KUK promoting innovation and entrepreneurship among students.",
    images: [
      {
        url: "/uiet-logo.png",
        width: 800,
        height: 600,
        alt: "UIET Kurukshetra Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  const facultyData = [
    {
      name: "Dr. Vishal Ahlawat",
      image: "/teacher-cordinator/teacher-1.jpg",
      designation: "IIC President & Convener, CIC",

    },
    {
      name: "Dr. Sanjay Kajal",
      image: "/teacher-cordinator/teacher-2.jpg",
      designation: "Member IIC",

    },
    {
      name: "Dr. Nikhil Marriwala",
      image: "/teacher-cordinator/teacher-3.jpg",
      designation: "Member IIC",

    },
    {
      name: "Mr. Archit Sharma",
      image: "/teacher-cordinator/teacher-4.jpg",
      designation: "Member IIC",

    },
    {
      name: "Ms. Sonia Saini",
      image: "/teacher-cordinator/teacher-5.jpg",
      designation: "Member IIC",

    },

    {
      name: "Ms. Shivani",
      image: "/teacher-cordinator/teacher-6.jpg",
      designation: "Member IIC",

    },

    {
      name: "Dr. Divya Bhatia",
      image: "/teacher-cordinator/teacher-7.jpg",
      designation: "Member IIC",

    },

    {
      name: "Ms. SOMYA GOYAL",
      image: "/teacher-cordinator/teacher-8.jpg",
      designation: "Member IIC",

    },


  ];

  const StudentData = [
    {
      name: "TANISHQ",
      image: "/student-cordinator/student-1.jpg",
      designation: "Team Lead",

    },
    {
      name: "KANISHKA",
      image: "/student-cordinator/student-2.jpg",
      designation: "Co-Lead",

    },
    {
      name: "Gajender Yadav",
      image: "/student-cordinator/student-3.jpg",
      designation: "Incubation Head",

    },
    {
      name: "Aman",
      image: "/student-cordinator/student-4.jpg",
      designation: "Technology Team Head",

    },
    {
      name: "Naman Saini",
      image: "/student-cordinator/student-5.jpg",
      designation: "Marketing, Research & Promotions Team Head",

    },

    {
      name: "Arjav Verma",
      image: "/student-cordinator/student-6.jpg",
      designation: "Marketing, Research & Promotions Team Head",

    },

    {
      name: "Jagriti",
      image: "/student-cordinator/student-7.jpg",
      designation: "Design & Creative Team Head",

    },

    {
      name: "Sahil",
      image: "/student-cordinator/student-8.jpg",
      designation: "Design & Creative Team Head",

    },


  ];
  return (
    <div>
      <section className="pages-title mb-4">
        <div className="container">
          <h2>Institution's Innovation Council </h2>
          <ul class="breadcrumb text-center mx-auto">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Institution's Innovation Council{" "}
            </li>
          </ul>
        </div>
      </section>

      <section className="main-content mt-5 mb-5 ">
        <div class="container">
          <div className="about-bg">
            <div className="row">
              <div className="col-md-8 ">
                <div className="video-inner mb-40">
                  <h2>
                    Institution's Innovation Council{" "}
                    <span className="red ml-e"> (IIC)</span>
                  </h2>
                  <iframe
                    class="youtube-frameVideo"
                    src="https://www.youtube.com/embed/BQ_OjBFdQnw"
                    width="100%"
                    height="500px"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
              <div className="col-md-4">
                <div className="notification-block iic-notification">
                  <h4>
                    <span>
                      <img alt="icon" src="/announment.png" />
                    </span>
                    LATEST UPDATES
                  </h4>
                  <marquee direction="up" scrollamount="2" height="160px">
                    <ul>
                      <li>
                        <a href="#">Internal SIH 2024 -Apply Here</a>
                      </li>
                      <li>
                        <a href="#">IDE Bootcamp Notification</a>
                      </li>
                    </ul>
                  </marquee>
                </div>
              </div>
            </div>
          </div>

          <div className="about-bg mt-3">
            <div className="row">
              <div className=" col-lg-12">
                <div className="content-panel message-block  mb-40">
                  <h3 className="mb-4">
                    About Institution Inovation Council <span class="red">(IIC)</span>
                  </h3>
                  <p>
                    Institution's Innovation Council (IIC) is established in the institute with an objective to foster the culture of innovation, encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes. .
                  </p>

                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="mb-4">About Community Incubation Centre <span class="red">(CIC)</span></h3>
                      <p>Community Incubation centre (CIC) is established in the institute by the support of Kurukshetra University and Department of Information Technology Electronics and Communication (DITEC), Haryana to foster and support innovations and potential enterpreneurs to build scalable and sustainable enterprise.
                      </p>

                      <h3 className="mb-4">Functions of  <span className="red">IIC & CIC</span></h3>
                      <ul>
                        <li>To conduct various innovation and entrepreneurship-related activities, identify and reward innovations and share success stories of successful entrepreneurs to create an eco-system of innovations and entrepreneurship in the institute.</li>
                        <li>Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators.</li>
                        <li>Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries.</li>
                        <li>To provide space, research facilites, mentoring support and conducive environment to the incubatees to nurture & transform their innovative ideas into marketable products/services.</li>
                      </ul>

                    </div>
                    <div className="col-md-6">
                      <div className="pict-structure">
                        <img src="/iic/IIC.jpg" alt="structure" className="img-fluid rounded" />
                      </div>
                    </div>
                  </div>




                  <h3 className="mb-3 mt-5">
                    DEPARTMENT <span className="red">VISION AND MISSION</span>
                  </h3>
                  <h5>
                    <span className="red">VISION</span>
                  </h5>
                  <p>
                    Empower UIET, Kurukshetra University, to be the leader to facilitate and catalyse the innovations, start-ups, entrepreneurial development and business growth to the students and faculties for the sustainable economic growth of the community.
                  </p>
                  <h5>
                    <span class="red">MISSION</span>
                  </h5>
                  <p>
                    To develop a system with the required infrastructure that can enable the creative thinkers and faculties to innovate and prototype their ideas with the support from government, industry and reputed academic institutions around the world and help them to realize their potentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5 bg-light" id="incubation-process">
        <div className="container text-center">
          <div class="main-title text-center mb-5"><h2><span class="red d-block">INCUBATION PROCESS</span> Community Incubation Centre, <br />
            Uiet, Kurukshetra University</h2></div>

          <div className="row process-wrapper ">


            <div className="col process-step text-center">
              <div className="course-icon  mb-3">
                <img src="/iic/file-submit.png" alt="icon1" className="img-fluid" />
              </div>
              <span className="step-number">1</span>
              <p className="fw-bold">SUBMIT YOUR STARTUP<br />IDEA/PROPOSAL</p>
            </div>




            <div className="col process-step text-center">
              <div className="course-icon  mb-3">
                <img src="/iic/screen-committee.png" alt="icon2" className="img-fluid" />
              </div>
              <span className="step-number">2</span>
              <p className="fw-bold">PROPOSAL EVALUATION<br />BY SCREENING COMMITTEE</p>
            </div>





            <div className="col process-step text-center">
              <div className="course-icon  mb-3">
                <img src="/iic/check-circale.png" alt="icon3" className="img-fluid" />
              </div>
              <span className="step-number">3</span>
              <p className="fw-bold">IF<br />RECOMMENDED</p>
            </div>





            <div className="col process-step text-center">
              <div className="course-icon  mb-3">
                <img src="/iic/team-meeting.png" alt="icon3" className="img-fluid" />
              </div>
              <span className="step-number">4</span>
              <p className="fw-bold">APPROVAL FROM<br />KCIC BOG</p>
            </div>





            <div className="col process-step text-center">
              <div className="course-icon  mb-3">
                <img src="/iic/incubation.png" alt="icon4" className="img-fluid" />
              </div>
              <span className="step-number">5</span>
              <p className="fw-bold">INCUBATION</p>
            </div>

          </div>
        </div>

      </section>



      <section className="py-5 bg-light" id="incubation-process">
        <div className="container text-center">
          <div class="main-title text-center mb-5"><h2><span class="red d-block">Institution’s Innovation Hub</span> Innovation Gallery</h2></div>

          <div className="row">
            <div className="col-md-4">
              <div className="hub-gallery-box">
                <img src="/iic/iic-gallery-1.jpg" alt="structure" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="hub-gallery-box">
                <img src="/iic/iic-gallery-2.jpg" alt="structure" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="hub-gallery-box">
                <img src="/iic/iic-gallery-3.jpg" alt="structure" className="img-fluid rounded" />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="hub-gallery-box">
                <img src="/iic/iic-gallery-4.jpg" alt="structure" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="hub-gallery-box">
                <img src="/iic/iic-gallery-5.jpg" alt="structure" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="hub-gallery-box">
                <img src="/iic/iic-gallery-6.jpg" alt="structure" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </div>

      </section>



      <section className="our-team pt-5 pb-5" id="our-team">
        <div className="container">
          <div className="main-title text-center mb-5"><h2><span className="red d-block">Our team</span>Teacher coordinators</h2></div>
          <div className="row">
            {facultyData.map((faculty) => (

              <div className="col-md-3 mb-3">

                <TeacherCard faculty={faculty} />
              </div>

            ))}
          </div>
        </div>
      </section>

      <section className="our-team pt-5 pb-5">
        <div className="container">
          <div className="main-title text-center mb-5"><h2><span className="red d-block">Our team</span>Student Coordinators</h2></div>
          <div className="row">
            {StudentData.map((student) => (

              <div className="col-md-3 mb-3">

                <TeacherCard faculty={student} />
              </div>

            ))}
          </div>
        </div>
      </section>



    </div>
  );
};

export default Page;
