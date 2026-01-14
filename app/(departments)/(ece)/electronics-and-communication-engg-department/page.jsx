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
                    <h2>Electronics & Communication Engg. Department</h2>

                    <ul className="breadcrumb text-center mx-auto">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">Department</li>

                        <li className="breadcrumb-item active" aria-current="page">
                            Electronics & Communication Engg. Department
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



                                    {/* <h3 className="mb-3 mt-5">
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
                                    </p> */}


                                </div>
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
