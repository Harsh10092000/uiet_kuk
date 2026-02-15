import React from "react";
import FacultySlider from "@/components/departments/facultySlider/FacultySlider";
import DepartmentHeader from "@/components/departments/DepartmentHeader";
import DepartmentSection from "@/components/departments/DepartmentSection";
import Link from "next/link";

export const metadata = {
    title: "Applied Sciences Department | UIET KUK",
    description: "Foundation of Engineering. Applied methodologies in Physics, Chemistry, and Mathematics at UIET Kurukshetra University.",
    keywords: ["Applied Sciences Engineering", "Engineering Physics", "Engineering Chemistry", "Engineering Mathematics", "UIET KUK Applied Sciences"],
    openGraph: {
        title: "Applied Sciences Department | UIET KUK",
        description: "Foundation of Engineering. Applied methodologies in Physics, Chemistry, and Mathematics at UIET Kurukshetra University.",
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
    const facultyDataList = facultyData["applied-sciences-department"] || [];

    // View All link
    const viewAllLink = "/faculty-of-applied-sciences";

    return (
        <div>
            <DepartmentHeader title="Applied Sciences Department" />

            <section className="main-content mt-5 mb-5 ">
                <div className="container">
                    <div className="about-bg">
                        <div className="row">
                            <div className=" col-lg-12">
                                <DepartmentSection title="About" highlight="Us" id="about-us">
                                    <p>
                                        The Department of Applied Science at U.I.E.T, KUK was established in 2004. The department has been successfully running Ph.D programmes in the fields of Physics, Chemistry and Mathematics and has continuosly strived to innovate and excel in research areas. There are a total of nine experienced faculty members with research publications in various reputed international journals.. Eight well equipped laboratories of Physics, Chemistry and English are also maintained and operated for academic and research activities.
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

                    <FacultySlider facultyData={facultyDataList} viewAllLink={viewAllLink} />
                </div>
            </section>
        </div>
    );
};

export default page;
