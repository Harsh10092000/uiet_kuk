import React from "react";
import FacultySlider from "@/components/departments/facultySlider/FacultySlider";
import DepartmentHeader from "@/components/departments/DepartmentHeader";
import DepartmentSection from "@/components/departments/DepartmentSection";
import Link from "next/link"; // Kept if needed for other links, though DepartmentHeader handles breadcrumbs

export const metadata = {
  title: "Computer Science & Engineering (CSE) | UIET KUK",
  description: "Leading CSE Department at UIET Kurukshetra. Specializations in AI, ML, Data Science, and Cloud Computing. Top-tier placements.",
  keywords: ["Computer Science Engineering India", "B.Tech CSE", "AI and ML Courses", "Data Science", "UIET KUK CSE", "Best CSE Colleges in Haryana"],
  openGraph: {
    title: "Computer Science & Engineering (CSE) | UIET KUK",
    description: "Leading CSE Department at UIET Kurukshetra. Specializations in AI, ML, Data Science, and Cloud Computing. Top-tier placements.",
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
      <DepartmentHeader title="Computer Science & Engg. Department" />

      <section className="main-content mt-5 mb-5 ">
        <div className="container">
          <div className="about-bg">
            <div className="row">
              <div className=" col-lg-12">
                <DepartmentSection title="About" highlight="Us" id="about-us">
                  <p>
                    The Department of Computer Science & Engineering was established in 2004 with an initial intake of 60 students in B.Tech. and 20 in M.Tech. (Software Engineering). In 2007, the B.Tech. intake was increased to 120, reflecting the growing demand for computer engineering. The department has maintained a near 100% placement record for eligible students over the past five years. To align with emerging technologies, a new B.Tech. program in Computer Science & Engineering (Artificial Intelligence & Machine Learning) was launched in 2023–24 with an intake of 60 students. The department also offers an M.Tech. in Computer Engineering with 18 seats and a Ph.D. program started in 2013, with several doctoral degrees awarded and many in progress.
                  </p>

                  {/* <p>
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
                  </p> */}

                  <h3 id="incharge-message" className="mb-3 mt-5">
                    Faculty   <span className="red">Incharge speaks</span>
                  </h3>

                  <p>
                    The department has a team of highly qualified and dedicated
                    faculty who foster analytical thinking, creativity, and
                    ethical professionalism among students. Faculty expertise
                    includes Artificial Intelligence, Data Science, Big Data
                    Analytics, Software Engineering, Computer Networks, Wireless
                    Sensor Networks, and Mobile Ad Hoc Networks. Students are
                    trained in state-of-the-art laboratories equipped with GPUs,
                    Blade Servers, Thin Clients, and Workstations from leading
                    brands. With a flexible and research-oriented curriculum,
                    incorporating electives, seminars, and projects, the
                    department is committed to promoting innovation, excellence,
                    and leadership in computer science education and research.
                  </p>

                  {/* <h5>
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
                  </p> */}
                </DepartmentSection>
              </div>
            </div>
          </div>


          <div id="director-message" className="message-block mt-150">
            <h3> Department of <span className="red">
              Computer Science & Engg. </span></h3>
            <div className="profile-info mt-4">
              <div className="profile"><img src="/sunil-dhingra.jpg" alt="profile" className="img-fluid" width="300px" /></div>
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
