import React from "react";
import FacultySlider from "@/components/departments/facultySlider/FacultySlider";

const page = () => {
  // Faculty data
  const facultyData = [
    {
      name: "Dr. Kulvinder Singh",
      image: "/kulvinder-singh.jpg",
      designation: "Associate Professor, (Computer Science & Engg. Department)",
      link: "#",
    },
    {
      name: "Dr.Sona Malhotra",
      image: "/dr-sona.jpg",
      designation: "Associate Professor,(Computer Science & Engg. Department)",
      link: "#",
    },
    {
      name: "Dr.Sanjeev Dhawan",
      image: "/sanjeev.jpg",
      designation: "Associate Professor,(Computer Science & Engg. Department)",
      link: "#",
    },
    {
      name: "Dr.Karambir Bidhan",
      image: "/karambir.jpg",
      designation: "Associate Professor,(Computer Science & Engg. Department)",
      link: "#",
    },
    {
      name: "Dr.Sona Malhotra",
      image: "/dr-sona.jpg",
      designation: "Associate Professor,(Computer Science & Engg. Department)",
      link: "#",
    },
  ];

  // View All link
  const viewAllLink = "/faculty-of-computer-science-engineering";

  return (
    <div>
      <section className="pages-title mb-4">
        <div className="container">
          <h2>Computer Science & Engg. Department</h2>

          <ul className="breadcrumb text-center mx-auto">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">Department</li>

            <li className="breadcrumb-item active" aria-current="page">
              Computer Science & Engg. Department
            </li>
          </ul>
        </div>
      </section>

      <section className="main-content mt-5 mb-5 ">
        <div className="container">
          <div className="about-bg">
            <div className="row">
              <div className=" col-lg-12">
                <div className="content-panel message-block  mb-40">
                  <h3 className="mb-4">
                    About <span className="red">Us</span>
                  </h3>
                  <p>
                    The Department of Computer Science & Engineering was
                    established in the year 2004. The Department started with an
                    intake of 60 in B. Tech. degree programme & 20 in M. Tech.
                    (Software Engineering). In view of the increasing importance
                    of the Computer Engineering discipline, the intake of the
                    department was increased to 120 in 2007. The department is
                    proud to have a record of almost 100% placement of all
                    eligible students for last 05 years. The new B.Tech Course
                    Computer Science & Engineering (Artificial Intelligence &
                    Machine Learning) has also started from the year 2023-24
                    with the intake of 60 students.
                  </p>

                  <p>
                    The department also offers M. Tech. Program in Computer
                    Engineering with an intake of 18 students. Department
                    started Ph.D. program in 2013. More than 10 Ph.D.'s are in
                    progress and many are awarded so far.
                  </p>

                  <p>
                    Our experienced and highly qualified faculty are committed
                    to helping our students in improving and enhancing their
                    analytical thinking ability and creativity, and in
                    understanding the professional issues related to ethics,
                    professional conduct, economics, societal needs and their
                    role in the technologically globalised world. The department
                    is committed to foster a creative and innovative research
                    environment. Faculty of the Department of Computer Science &
                    Engineering have specialized areas for advanced studies and
                    research in Soft Computing, Neural Networks & Fuzzy Logic,
                    Data Mining, Big Data Analytics, Unix & Linux, Artificial
                    Intelligence, Software Engineering, Computer Networks,
                    Social Networks, Data Science, Wireless sensor and Mobile Ad
                    hoc networking.
                  </p>

                  <p>
                    To keep pace with the current technological trends, the
                    Department has introduced a credit based postgraduate
                    programme leading to M. Tech. in Computer Engineering in the
                    year 2009. Ever since its establishment, the Department has
                    always been on a high growth path and has experienced and
                    dedicated faculty with a strong commitment to engineering
                    education. Our students are exposed to up-to-date equipment,
                    technology and techniques. We have well equipped
                    laboratories with state-of-the-art facilities like GPU,
                    Blade sever, servers, thin clients, workstation and desktops
                    (from IBM, HP, DELL etc.). Induction of new courses from
                    time to time enables the students to keep abreast of recent
                    technological developments. Flexibility in curriculum is
                    provided through Electives Seminars and Projects.
                  </p>

                  <h3 className="mb-3 mt-5">
                    DEPARTMENT <span className="red">VISION AND MISSION</span>
                  </h3>

                  <h5>
                    <span className="red">VISION</span>
                  </h5>
                  <p>
                    Pursue conducive advancement towards nurturing globally
                    competent and ethically conscientious professionals and
                    entrepreneurs in agile computing technologies and allied
                    spheres for unceasing evolution of Nations IT affiliated
                    commercial and research endeavors.
                  </p>

                  <h5>
                    <span className="red">MISSION</span>
                  </h5>
                  <p>
                    Thrive to establish a strong foundation for technical
                    competency in spheres concordant to software oriented design
                    and development. Nurture skills and competency for
                    administering expertise gained in computing discipline to a
                    wide horizon of interdisciplinary application domains, thus
                    supporting sustainable development of the society. Habituate
                    the students to strive for technological innovations and
                    successful endeavors ethically, supported by sustained
                    learning continuance and problem solving proficiency that
                    may promote nations welfare in terms of economic
                    acceleration leading to the growth of society.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="message-block mt-150">
            <h3> Department of <span className="red">
              Computer Science & Engg. </span></h3>
               <div className="profile-info mt-4">
                <div className="profile"><img src="/sunil-dhingra.jpg" alt="profile" className="img-fluid" width="300px"/></div>
                <div className="profile-details">
                  <h4>Prof.Sunil Dhingra</h4>
                  <p>It gives me immense pleasure to introduce University Institute of Engineering and Technology (UIET) which was established in 2004 in the campus of Kurukshetra University. It was established with a motive 'MIND TO MARKET' so as to achieve excellence in the key areas of engineering and to produce talented and committed human resources .</p>
                  <a href="/director" className="red">Read More...</a>
                  </div>
                  </div>
                  </div>

          <FacultySlider facultyData={facultyData} viewAllLink={viewAllLink} />
        </div>
      </section>
    </div>
  );
};

export default page;
