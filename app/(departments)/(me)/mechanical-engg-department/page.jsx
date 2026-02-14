import React from "react";
import FacultySlider from "@/components/departments/facultySlider/FacultySlider";
import DepartmentHeader from "@/components/departments/DepartmentHeader";
import DepartmentSection from "@/components/departments/DepartmentSection";
import DepartmentVisionMission from "@/components/departments/DepartmentVisionMission";
import DepartmentOutcomes from "@/components/departments/DepartmentOutcomes";

export const metadata = {
    title: "Mechanical Engineering Department | UIET KUK",
    description: "Premier Mechanical Engineering education at UIET Kurukshetra. Focus on Robotics, CAD/CAM, and Thermal Engineering. High placement record.",
    keywords: ["Mechanical Engineering India", "B.Tech Mechanical", "Robotics Engineering", "CAD/CAM Courses", "Best Mechanical Engineering Colleges", "UIET KUK Direct Admission"],
    openGraph: {
        title: "Mechanical Engineering Department | UIET KUK",
        description: "Premier Mechanical Engineering education at UIET Kurukshetra. Focus on Robotics, CAD/CAM, and Thermal Engineering. High placement record.",
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
            designation: "Associate Professor, (Mechanical Engg. Department)",
            link: "#",
        },
        {
            name: "Dr.Sona Malhotra",
            image: "/dr-sona.jpg",
            designation: "Associate Professor,(Mechanical Engg. Department)",
            link: "#",
        },
        {
            name: "Dr.Sanjeev Dhawan",
            image: "/sanjeev.jpg",
            designation: "Associate Professor,(Mechanical Engg. Department)",
            link: "#",
        },
        {
            name: "Dr.Karambir Bidhan",
            image: "/karambir.jpg",
            designation: "Associate Professor,(Mechanical Engg. Department)",
            link: "#",
        },
        {
            name: "Dr.Sona Malhotra",
            image: "/dr-sona.jpg",
            designation: "Associate Professor,(Mechanical Engg. Department)",
            link: "#",
        },
    ];

    // View All link
    const viewAllLink = "/faculty-of-mechanical-engineering";

    const vision = "To contribute to the nation through best practices in Technical Education and be recognized as one of the best Comprehensive Institute in India.";

    const mission = [
        "To educate the students of Engineering & Technology by providing Value-Based Technical Education.",
        "To produce skilled Engineering Graduates to cater to the needs of Industry and Society.",
        "To develop dynamic & innovative researchers/entrepreneurs in the field of Engineering & Technology."
    ];

    const pos = [
        { id: "PO 1", title: "Engineering Knowledge", description: "Apply the knowledge of Mathematics, Science, Engineering Fundamentals and an engineering specialization to the solution of complex Engineering problems." },
        { id: "PO 2", title: "Problem Analysis", description: "Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences." },
        { id: "PO 3", title: "Design/Development of Solutions", description: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety and the cultural, societal, and environmental considerations." },
        { id: "PO 4", title: "Conduct Investigations of Complex Problems", description: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of the information to provide valid conclusions." },
        { id: "PO 5", title: "Modern tool Usage", description: "Create, select, and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
        { id: "PO 6", title: "The Engineer and Society", description: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
        { id: "PO 7", title: "Environment and Sustainability", description: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
        { id: "PO 8", title: "Ethics", description: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
        { id: "PO 9", title: "Individual and Teamwork", description: "Function effectively as an individual, and as a member or leader in diverse teams and in multidisciplinary settings." },
        { id: "PO 10", title: "Communication", description: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
        { id: "PO 11", title: "Project Management and Finance", description: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
        { id: "PO 12", title: "Life-Long Learning", description: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context to technological change." }
    ];

    const psos = [
        { id: "PSO 1", description: "Graduates will be able to analyse the mechanisms of different machines and machine tools used in the field of mechanical engineering." },
        { id: "PSO 2", description: "Graduates will be able to understand different aspects of industrial systems, be responsive to mitigate the problems encountered and be capable of designing new systems for improving the productivity." }
    ];

    return (
        <div>
            <DepartmentHeader title="Mechanical Engg. Department" />

            <section className="main-content mt-5 mb-5 ">
                <div className="container">
                    <div className="about-bg">
                        <div className="row">
                            <div className=" col-lg-12">
                                <DepartmentSection title="About" highlight="Us" id="about-us">
                                    <p>
                                        The Department of Mechanical Engineering established in 2007 at UIET, Kurukshetra University, Kurukshetra, offers a comprehensive spectrum of academic programmes, including B.Tech., M.Tech. (with specializations in Industrial & Production Engineering, and Thermal Engineering), and Ph.D. programmes. Together, these programmes create a robust academic and research ecosystem aimed at developing skilled, ethical, and innovation-driven mechanical engineers.
                                    </p>
                                    <p>
                                        The department is supported by a highly experienced and qualified faculty, with all members either holding a Ph.D. degree or actively pursuing doctoral research. Their academic expertise, research involvement, and industry exposure significantly strengthen the teaching–learning environment.
                                    </p>
                                    <p>
                                        Aligned with the principles of the National Education Policy (NEP), the department emphasizes strong technical foundations, multidisciplinary learning, critical thinking, ethical values, and an aptitude for lifelong learning. This policy-oriented framework ensures that students and researchers are prepared to meet contemporary technological demands while contributing effectively to societal and national development.
                                    </p>
                                    <p>
                                        The curriculum integrates theoretical instruction with practical exposure and analytical problem-solving. Core academic domains include:
                                    </p>
                                    <ul>
                                        <li>Theory of Machines, Machine Design, Mechanics of Solids</li>
                                        <li>Measurements, Automatic Control, Mechatronics, Robotics</li>
                                        <li>Thermodynamics, Thermal Engineering, Heat Transfer</li>
                                        <li>Hydraulic Machines, Power Plant Engineering</li>
                                        <li>Manufacturing, Production, and Industrial Engineering</li>
                                        <li>Materials Engineering, Vibrations, Tribology</li>
                                        <li>3D Modelling, 3D Printing, Fluid and Structural Analysis</li>
                                    </ul>
                                    <p>
                                        To ensure strong practical competence, the department maintains modern, well-equipped laboratories across all major domains. Students receive hands-on exposure through extensive workshop training and specialized facilities supporting experimentation, testing, simulation, and computational analysis.
                                    </p>
                                    <p>
                                        Project-based learning is a key component of the academic framework. Students engage in design, analysis, and fabrication-oriented projects utilizing advanced software tools, simulation platforms, and modern engineering practices. These initiatives foster innovation, teamwork, creativity, and professional competence.
                                    </p>

                                    <DepartmentVisionMission vision={vision} mission={mission} />
                                    <DepartmentOutcomes pos={pos} psos={psos} />
                                </DepartmentSection>
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
