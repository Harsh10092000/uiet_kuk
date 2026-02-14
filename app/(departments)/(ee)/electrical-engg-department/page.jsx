import React from "react";
import FacultySlider from "@/components/departments/facultySlider/FacultySlider";
import DepartmentHeader from "@/components/departments/DepartmentHeader";
import DepartmentSection from "@/components/departments/DepartmentSection";
import Link from "next/link";

export const metadata = {
    title: "Electrical Engineering Department | UIET KUK",
    description: "Excellence in Electrical Engineering at UIET KUK. Studies in Power Systems, Control Systems, and Renewable Energy.",
    keywords: ["Electrical Engineering India", "B.Tech Electrical", "Power Systems", "Control Systems", "Renewable Energy Engineering", "UIET KUK Electrical"],
    openGraph: {
        title: "Electrical Engineering Department | UIET KUK",
        description: "Excellence in Electrical Engineering at UIET KUK. Studies in Power Systems, Control Systems, and Renewable Energy.",
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
            designation: "Associate Professor, (Electrical Engg. Department)",
            link: "#",
        },
        {
            name: "Dr.Sona Malhotra",
            image: "/dr-sona.jpg",
            designation: "Associate Professor,(Electrical Engg. Department)",
            link: "#",
        },
        {
            name: "Dr.Sanjeev Dhawan",
            image: "/sanjeev.jpg",
            designation: "Associate Professor,(Electrical Engg. Department)",
            link: "#",
        },
        {
            name: "Dr.Karambir Bidhan",
            image: "/karambir.jpg",
            designation: "Associate Professor,(Electrical Engg. Department)",
            link: "#",
        },
        {
            name: "Dr.Sona Malhotra",
            image: "/dr-sona.jpg",
            designation: "Associate Professor,(Electrical Engg. Department)",
            link: "#",
        },
    ];

    // View All link
    const viewAllLink = "/faculty-of-electrical-engineering";

    return (
        <div>
            <DepartmentHeader title="Electrical Engg. Department" />

            <section className="main-content mt-5 mb-5 ">
                <div className="container">
                    <div className="about-bg">
                        <div className="row">
                            <div className=" col-lg-12">
                                <DepartmentSection title="About" highlight="Us" id="about-us">
                                    <p>
                                        The Department of Electrical Engineering was established in the year 2004 to give the basic knowledge of Electrical Technology to the students of all branches. To keep pace with the current technological trends the department has introduced a credit based postgraduate programme leading to M.Tech. in Electrical Engineering in the year 2011 with intake of 18 students.
                                    </p>
                                    <p>
                                        The B. Tech. Electrical and Computer Engineering was introduced in 2023, and it has an intake of 60 seats. The program addresses the real-time challenges in electrical engineering with computer science applications. In this program, students would learn and explore various subjects like Electrical Machines, Power Systems, Electronics, NAS, SAS, Power Generation, Electrical Vehicles, Programming Languages (C/C++/Python), Data Structures, Database Management Systems (DBMS), AIML, Software Engineering, Soft Computing, with applications to various real-worldElectrical Engineering domains such as Smart Grid, Energy Management, Electric Vehicles, Real-Time Systems, and PLC etc.
                                    </p>
                                    <p>
                                        The program offers a unique, interdisciplinary, balanced combination of tools, techniques, practices, and applications from the two most essential engineering disciplines, namely Computer Engineering and Electrical Engineering.The students have the flexibility to choose various elective subjects as per their interests and future prospects. The benefits of the course to the students are decision-making, solving complex problems, increasing productivity, widening analytical skills, etc, which helps them match their speed and competency with the fast-growing technology world. The course will help the students participate in various placement drives and further research work.
                                    </p>
                                </DepartmentSection>
                            </div>
                        </div>
                    </div>


                    {/* <div className="message-block mt-150">
                        <h3> Department of <span className="red">
                            Electronics & Communication Engg. </span></h3>
                        <div className="profile-info mt-4">
                            <div className="profile"><img src="/sunil-dhingra.jpg" alt="profile" className="img-fluid" width="300px" /></div>
                            <div className="profile-details">
                                <h4>Prof.Sunil Dhingra</h4>
                                <p>It gives me immense pleasure to introduce University Institute of Engineering and Technology (UIET) which was established in 2004 in the campus of Kurukshetra University. It was established with a motive 'MIND TO MARKET' so as to achieve excellence in the key areas of engineering and to produce talented and committed human resources .</p>
                                <a href="/director" className="red">Read More...</a>
                            </div>
                        </div>
                    </div> */}

                    <FacultySlider facultyData={facultyData} viewAllLink={viewAllLink} />
                </div>
            </section>
        </div>
    );
};

export default page;
