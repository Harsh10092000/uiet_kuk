import React from "react";
import FacultySlider from "@/components/departments/facultySlider/FacultySlider";

const page = () => {
    // Faculty data
    const facultyData = [
        {
            name: "Dr. Kulvinder Singh",
            image: "/kulvinder-singh.jpg",
            designation: "Associate Professor, (Applied Sciences Department)",
            link: "#",
        },
        {
            name: "Dr.Sona Malhotra",
            image: "/dr-sona.jpg",
            designation: "Associate Professor,(Applied Sciences Department)",
            link: "#",
        },
        {
            name: "Dr.Sanjeev Dhawan",
            image: "/sanjeev.jpg",
            designation: "Associate Professor,(Applied Sciences Department)",
            link: "#",
        },
        {
            name: "Dr.Karambir Bidhan",
            image: "/karambir.jpg",
            designation: "Associate Professor,(Applied Sciences Department)",
            link: "#",
        },
        {
            name: "Dr.Sona Malhotra",
            image: "/dr-sona.jpg",
            designation: "Associate Professor,(Applied Sciences Department)",
            link: "#",
        },
    ];

    // View All link
    const viewAllLink = "/faculty-of-applied-sciences";

    return (
        <div>
            <section className="pages-title mb-4">
                <div className="container">
                    <h2>Applied Sciences Department</h2>

                    <ul className="breadcrumb text-center mx-auto">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">Department</li>

                        <li className="breadcrumb-item active" aria-current="page">
                            Applied Sciences Department
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
                                        The Department of Applied Science at U.I.E.T, KUK was established in 2004. The department has been successfully running Ph.D programmes in the fields of Physics, Chemistry and Mathematics and has continuosly strived to innovate and excel in research areas. There are a total of nine experienced faculty members with research publications in various reputed international journals.. Eight well equipped laboratories of Physics, Chemistry and English are also maintained and operated for academic and research activities.
                                    </p>
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
