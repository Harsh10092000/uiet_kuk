import React from "react";
import FacultySlider from "@/components/departments/facultySlider/FacultySlider";
import DepartmentHeader from "@/components/departments/DepartmentHeader";
import DepartmentSection from "@/components/departments/DepartmentSection";
import DepartmentIncharge from "@/components/departments/DepartmentIncharge";
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

import { facultyData } from "@/app/data/facultyData";

const page = () => {
  // Faculty data from JSON
  const facultyDataList = facultyData["computer-science-engg-department"] || [];

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

                  {/* <DepartmentIncharge
                    incharge={facultyDataList.find(f => f.id === 25)}
                    message="Our department is committed to fostering a culture of innovation and research. We equip our students with the skills to tackle complex technological challenges in AI, Data Science, and Software Engineering, preparing them to be future leaders in the tech industry."
                  /> */}

                </DepartmentSection>
              </div>
            </div>
          </div>

          <DepartmentIncharge
            incharge={facultyDataList.find(f => f.id === 25)}
            message="Our department fosters a culture of innovation, tailoring our curriculum to the dynamic global tech industry. We equip students with advanced skills in AI, Data Science, and Software Engineering. Beyond technical prowess, we emphasize ethical leadership and collaborative problem-solving, preparing graduates to become transformative leaders in the evolving technology landscape."
          />

          {/* <div id="director-message" className="message-block mt-150">
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
          </div> */}

          <FacultySlider facultyData={facultyDataList} viewAllLink={viewAllLink} />
        </div>
      </section>
    </div>
  );
};

export default page;
