import React from "react";
import FacultySlider from "@/components/departments/facultySlider/FacultySlider";
import DepartmentHeader from "@/components/departments/DepartmentHeader";
import DepartmentSection from "@/components/departments/DepartmentSection";
import DepartmentIncharge from "@/components/departments/DepartmentIncharge";

export const metadata = {
    title: "Electronics & Communication Engineering (ECE) | UIET KUK",
    description: "Top ECE Department at UIET Kurukshetra. Explore courses in VLSI, Embedded Systems, and Communication. Excellent placements and labs.",
    keywords: ["ECE Engineering India", "B.Tech ECE", "Electronics and Communication", "VLSI Design", "Embedded Systems", "UIET KUK ECE"],
    openGraph: {
        title: "Electronics & Communication Engineering (ECE) | UIET KUK",
        description: "Top ECE Department at UIET Kurukshetra. Explore courses in VLSI, Embedded Systems, and Communication. Excellent placements and labs.",
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
    const facultyDataList = facultyData["electronics-and-communication-engg-department"] || [];

    // View All link
    const viewAllLink = "/faculty-of-electronics-communication-engineering";

    return (
        <div>
            <DepartmentHeader title="Electronics & Communication Engg. Department" />

            <section className="main-content mt-5 mb-5 ">
                <div className="container">
                    <div className="about-bg">
                        <div className="row">
                            <div className=" col-lg-12">
                                <DepartmentSection title="About" highlight="Us" id="about-us">
                                    <p>
                                        The Department of Electronics and Communication Engineering (ECE) at the University Institute of Engineering and Technology (UIET), Kurukshetra University, is a vibrant academic unit committed to delivering high-quality engineering education, fostering research excellence, and nurturing industry-ready professionals. Guided by the principles of NEP 2020, the department adopts flexible, multidisciplinary, and student-centric academic practices, encouraging experiential learning, project-based coursework, and skill-oriented electives.
                                    </p>
                                    <p>
                                        The department offers students the opportunity to pursue Minor Degrees in emerging areas such as Electric Vehicles, Energy Engineering, Mechatronics, 3D Printing, and other interdisciplinary domains, as outlined in the curriculum scheme (w.e.f. 2023–24). This enables learners to acquire an additional specialization by completing 18–20 extra credits through elective/online courses. Additionally, the department supports the Honors Program, allowing academically strong students to deepen expertise in advanced ECE domains, aligning with national-level academic reforms.
                                    </p>
                                    <p>
                                        ECE at UIET is supported by well-equipped laboratories, including Microwave Engineering, Digital Signal Processing, VLSI Design, Embedded Systems, Communication Engineering, PCB Fabrication, and IoT & Sensor Technology labs. These facilities complement theoretical learning with practical insight and encourage innovation through prototypes, hardware projects, and research experimentation.
                                    </p>
                                    <p>
                                        Research remains a strong pillar of the department, with faculty actively publishing in SCI-indexed journals in areas such as signal and image processing, wireless communication, antennas, and embedded systems. The department has also attracted external project funding, including a recent SERB-sponsored project titled "New Modified Histogram Equalization Based Contrast Enhancement Method and Automated Deep Learning Based Identification System for COVID-19 X-Ray Images", highlighting the department's engagement in socially impactful research.
                                    </p>
                                    <p>
                                        Students and faculty regularly participate in FDPs, national workshops, technical seminars, and expert lectures, strengthening academic depth and industry exposure. The department maintains a consistent placement record, with students securing roles in IT, and telecom organizations, along with achievements in national-level examinations such as GATE and admissions to reputed higher education institutions.
                                    </p>

                                    <p>
                                        The integrated ecosystem of academics, research, laboratories, NEP-aligned curriculum reforms, and industry engagement positions the ECE Department at UIET, KUK as a forward-looking and impactful centre for engineering education.
                                    </p>

                                </DepartmentSection>
                            </div>
                        </div>
                    </div>

                    <DepartmentIncharge
                        incharge={facultyDataList.find(f => f.id === 7)}
                        message="In the evolving field of Electronics and Communication, we bridge the gap between theory and practice. From VLSI design to wireless communication, we nurture engineers who are technically proficient and visionary. We focus on instilling a research-oriented mindset, empowering students to innovate and drive the next wave of technological advancements in the global electronics sector."
                    />


                    <FacultySlider facultyData={facultyDataList} viewAllLink={viewAllLink} />
                </div>
            </section>
        </div>
    );
};

export default page;
