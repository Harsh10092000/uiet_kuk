import React from "react";
import FacultySlider from "@/components/departments/facultySlider/FacultySlider";

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

    return (
        <div>
            <section className="pages-title mb-4">
                <div className="container">
                    <h2>Mechanical Engg. Department</h2>

                    <ul className="breadcrumb text-center mx-auto">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">Department</li>

                        <li className="breadcrumb-item active" aria-current="page">
                            Mechanical Engg. Department
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
                                    <h3 id="about-us" className="mb-4">
                                        About <span className="red">Us</span>
                                    </h3>
                                    <p>
                                        The B.Tech courses in Mechanical Engineering are broad based and integral with emphasis on fundamental concepts to enable the students to become confident engineers capable of solving wide range of problems encountered by them in the field.
                                    </p>
                                    <p>
                                        The courses are planned to train the students both in theory and practical work in the following areas of Mechanical Engg.: Machine Design, Stress Analysis. Theory of Machines, Measurements and Automatic Control, Thermodynamics, Thermal Machines, Power Plant Engineering, Manufacturing Processes, Production Engineering, Industrial Engineering
                                    </p>
                                    <p>
                                        The students are given normal workshop training to familiarize them with the working of machine tools found in industry. They are also given project problems covering design, fabrication, testing, manufacturing aspects thus giving them opportunities to develop their capabilities to solve practical problems through the use of computers.
                                    </p>

                                    {/* <h3 id="incharge-message" className="mb-3 mt-5">
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

                    <FacultySlider facultyData={facultyData} viewAllLink={viewAllLink} />
                </div>
            </section>
        </div>
    );
};

export default page;
