import React from "react";
import FacultySlider from "@/components/departments/facultySlider/FacultySlider";
import DepartmentHeader from "@/components/departments/DepartmentHeader";
import DepartmentSection from "@/components/departments/DepartmentSection";

export const metadata = {
    title: "Biotechnology Engineering Agency | UIET KUK",
    description: "Join the best Biotechnology Engineering department at UIET Kurukshetra. Offering B.Tech, M.Tech, and Ph.D. with top placements and research facilities.",
    keywords: ["Biotechnology Engineering India", "B.Tech Biotechnology", "Biotech Colleges Kurukshetra", "UIET KUK Biotechnology", "Genetic Engineering", "Bioinformatics"],
    openGraph: {
        title: "Biotechnology Engineering Agency | UIET KUK",
        description: "Join the best Biotechnology Engineering department at UIET Kurukshetra. Offering B.Tech, M.Tech, and Ph.D. with top placements and research facilities.",
        images: [
            {
                url: "/uiet-logo.png", // Assuming a default logo or we can use a specific department image if available
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
    const facultyDataList = facultyData["biotechnology-engg-department"] || [];

    // View All link
    const viewAllLink = "/faculty-of-biotechnology-engineering";

    // Placement data organized by batch
    const placementData = [
        {
            batch: "2021-2025",
            students: [
                { name: "Juhi", company: "WaySpire" },
                { name: "Himanshi Sharma", company: "Academor" },
                { name: "Rakshit", company: "Panacea Biotec" },
            ]
        },
        {
            batch: "2020-2024",
            students: [
                { name: "Nikita Priyanshi", company: "Planetspark" },
                { name: "Dhiti Sharma", company: "Yhills Edutech" },
                { name: "Nancy", company: "Yhills Edutech" },
                { name: "Vyom Vaid", company: "Nupore Filteration Pvt. Ltd." },
                { name: "Kanan Bansal", company: "Nupore Filteration Pvt. Ltd." },
                { name: "Pooja", company: "Panacea Biotec Pvt. Ltd." },
                { name: "Shashank", company: "Panacea Biotec Pvt. Ltd." },
                { name: "Lakshay", company: "Panacea Biotec Pvt. Ltd." },
                { name: "Siddharth Bhatt", company: "Panacea Biotec Pvt. Ltd." },
                { name: "Devesh Sharma", company: "Panacea Biotec Pvt. Ltd." },
                { name: "Abhay Kumar", company: "Panacea Biotec Pvt. Ltd." },
            ]
        },
        {
            batch: "2019-2023",
            students: [
                { name: "Aarzoo Rana", company: "Planet Spark" },
                { name: "Lakshay Kaushik", company: "Nupore Filtration" },
                { name: "Srishty Raj", company: "Nupore Filtration" },
                { name: "Prashant Dubey", company: "Nupore Filtration" },
            ]
        },
        {
            batch: "2017-2021",
            students: [
                { name: "Aditi", company: "IDS, Mol Q" },
                { name: "Ashutosh", company: "PMV Maltings" },
                { name: "Kashish", company: "Regal Kitchen Foods Ltd. (Baddi), H.P." },
                { name: "Neeharika", company: "Regal Kitchen Foods Ltd. (Baddi), H.P." },
                { name: "Rohit", company: "Molq" },
                { name: "Sumit", company: "Molq" },
                { name: "Naman", company: "Infosys" },
                { name: "Muskan", company: "Infosys" },
                { name: "Jaideep", company: "TCS" },
                { name: "Simran", company: "Academic Counsellor in Vedantu" },
            ]
        },
        {
            batch: "2014-2018",
            students: [
                { name: "Aditya Arora", company: "IDS, Mohali" },
                { name: "Jigyasa", company: "Trainee, Quality Assurance at Zeon Lifesciences Ltd., Ponta Sahib" },
                { name: "Rahul Tyagi", company: "Trainee, Panacea Biotech Ltd., Lalru" },
                { name: "Pooja Yadav", company: "Quality Control Engineer at MDI, Ambala" },
                { name: "Gurleen", company: "IDS, Mohali" },
                { name: "Jatin Deshwal", company: "Microbiologist, Symbiosis Pharma, Kalaamb" },
                { name: "Anamika", company: "Quality Control Engineer at MDI, Ambala" },
            ]
        },
        {
            batch: "2013-2017",
            students: [
                { name: "Dipesh Kumar", company: "Technical Specialist, Path Situ Biotech Pvt. Ltd." },
                { name: "Srishty Sharma", company: "Marketing Officer in Olamic Pharma, Karnal" },
                { name: "Deepshi Madaan", company: "Team Lead, Signicient Company, Mohali" },
                { name: "Payal Singh Kashyap", company: "Trainee in Himalayan Herbal Company, Dehradun" },
                { name: "Jyoti Joshi", company: "Clinical Diet Counseller, Shreyas Family Diet Clinic, Delhi" },
                { name: "Shivani Panchal", company: "Marketing Officer in Olamic Pharma, Karnal" },
                { name: "Shubham", company: "Lab Technical Assistant, Helis Biogenesis, Noida" },
            ]
        },
        {
            batch: "2012-2016",
            students: [
                { name: "Renu Sharma", company: "Process Associate in IDS Infotech, Chandigarh" },
                { name: "Nitya Universe", company: "Research Assistant in Unimrkp Research" },
                { name: "Navdeep", company: "Clinical Research Coordinator in Max Hospital, Delhi" },
                { name: "Birbal", company: "Associate in Navisite India Private Ltd." },
                { name: "Natasha Arora", company: "Job in IPR Company, Laxmi Nagar, Delhi" },
                { name: "Vivek Sharma", company: "Stem Cell Cryo Viva, Chandigarh" },
            ]
        },
        {
            batch: "2011-2015",
            students: [
                { name: "Reetu", company: "Job in Pharma Sector" },
                { name: "Manoj", company: "Jay Mitra Corporation Pvt. Ltd." },
                { name: "Vikash", company: "Entrepreneur, Solar Power India Pvt. Ltd., Chandigarh" },
                { name: "Nitika", company: "Assistant Manager in Apcos Naturals, Mohali" },
                { name: "Robin", company: "Co-founder, Solar Power India Pvt. Ltd., Chandigarh" },
                { name: "Shivani", company: "IDS Infotech, Mohali" },
                { name: "Navjot Kaur", company: "Production Executive, Los Angeles, USA" },
                { name: "Ankush", company: "Marketing Manager in KR Indo German Homeopathic Pharma" },
                { name: "Vishupriya", company: "M.Tech from Abroad" },
                { name: "Himanshu", company: "Glaxi Global Institute, Shahbad, Haryana" },
                { name: "Meenakshi", company: "IDS Infotech, Mohali" },
            ]
        },
        {
            batch: "2010-2014",
            students: [
                { name: "Pulkit", company: "IPR Lawyer, Australia" },
                { name: "Avish", company: "IT Sector, Chandigarh" },
                { name: "Praveen", company: "Pharma Company, Himachal Pradesh" },
                { name: "Sahil", company: "Quality Analyst, PepsiCo" },
            ]
        },
        {
            batch: "2009-2013",
            students: [
                { name: "Richa", company: "KPMG, Gurugram" },
                { name: "Gunika", company: "HR in Asia Inspection" },
                { name: "Akash", company: "Research Associate in NYU, USA" },
                { name: "Sumit", company: "After M.Tech from Food MIFTM, Job in Food Company" },
                { name: "Ankush", company: "ACIO in IB" },
                { name: "Munish", company: "Pharma Company, Baddi" },
                { name: "Vaidehi", company: "After MS from USA, Doing Job" },
                { name: "Ronit", company: "Manager in Food Company, Near Rewari" },
                { name: "Ruchi", company: "Data Analyst, Bangalore" },
                { name: "Devi", company: "Zee Laboratory Ltd., Karnal" },
                { name: "Jaspreet", company: "Job in USA" },
                { name: "Anuj", company: "After MS from USA, Doing Job" },
                { name: "Sonal", company: "Research Scientist in USA" },
                { name: "Vishu", company: "Manager in Aegis (Group of Diagnostic)" },
            ]
        },
        {
            batch: "2008-2012",
            students: [
                { name: "Sachit", company: "ESIC, Delhi" },
                { name: "Charu", company: "Food Chain" },
                { name: "Bhumika", company: "Agri Market" },
                { name: "Shika", company: "Infosys" },
                { name: "Vikash", company: "Pharma, Baddi" },
                { name: "Naresh", company: "Biospecta Lab, Kaithal" },
                { name: "Vanshaj", company: "Marketing in Pharma Sector" },
            ]
        },
        {
            batch: "2007-2011",
            students: [
                { name: "Robin", company: "Wockhardt" },
                { name: "Abhishek", company: "Kingfisher" },
                { name: "Navneet", company: "Nectar Life Sciences Ltd., Derabassi" },
                { name: "Karan", company: "Engineer in Morepen Laboratory Ltd." },
                { name: "Upasana", company: "Fresno State, New York" },
                { name: "Anirudh", company: "Fresno State, New York" },
                { name: "Geeta", company: "QA Inspector at Hollister Medical India Pvt. Ltd." },
                { name: "Rajdeepak", company: "Executive Microbiologist at Ashwarya Celebrity Biopharma Ltd" },
                { name: "Rishab", company: "Consultant at Vector Consulting Group" },
            ]
        },
    ];

    // Laboratory data
    const laboratories = [
        {
            name: "Bioinformatics Lab",
            description: "A fast emerging multidisciplinary area focusing on computational modeling of biological processes, database development, data-mining, and statistical analyses.",
            instruments: ["Server", "Desktops"]
        },
        {
            name: "Plant Tissue Culture Lab",
            description: "Maintains and expands plant cells, tissues, or organs on nutrient culture medium under sterile circumstances. Used for micropropagation to create plant clones and develop mature plants quickly.",
            instruments: ["Muffle Furnace", "Lyophilization Machine", "UV-Transilluminator", "Incubator Shaker", "Spectrophotometer", "Plant Growth Chamber", "Laminar Air Flow"]
        },
        {
            name: "Microbial Fermentation Technology Lab",
            description: "Focuses on biochemical processes extracting chemical energy from carbohydrates. Microorganisms produce enzymes like proteinase, amylase, mannase, cellulase, and catalase.",
            instruments: ["High Speed Centrifuge", "Laminar Air Flow", "Autoclave", "-20°C Freezer", "Rotavapour", "UV Visible Spectrophotometer", "Incubator Shaker"]
        },
        {
            name: "Medical Plant Biotechnology Lab",
            description: "Covers cell culture methods, genetic engineering, secondary product metabolism, and transgenic plants for bioactive compound production including cancer medicines.",
            instruments: ["Centrifuge", "Lyophilization Machine", "UV-Transilluminator", "Plant Tissue Culture Cabinet", "Laminar Air Flow", "-70°C Freezer"]
        },
        {
            name: "Recombinant DNA Technology Lab",
            description: "Uses enzymes and laboratory procedures to modify and isolate specific DNA sequences. Creates recombinant DNA by joining DNA from several species or creating genes with novel functions.",
            instruments: ["Centrifuge", "UV-Transilluminator", "PCR", "Ligation Bath", "Gel Documentation System", "Ice Flaking Machine", "Laminar Air Flow", "Spectrophotometer"]
        },
        {
            name: "Biochemistry Lab",
            description: "Studies molecular anatomy, reactions of carbon molecules in living things, and molecular physiology focusing on biomolecules such as lipids, proteins, carbohydrates, and acids.",
            instruments: ["UV-Visible Spectrophotometer", "Centrifuge", "HPLC", "Incubator Shaker", "Incubator", "Laminar Air Flow", "Spectrophotometer"]
        },
        {
            name: "Industrial Biotechnology Lab",
            description: "One of the most innovative methods for cost-cutting, resource conservation, and pollution control. Referred to as the third biotechnology wave.",
            instruments: ["Light Microscope", "Laminar Air Flow", "Autoclave", "-20°C Freezer", "Rotavapour", "Visible Spectrophotometer", "Incubator Shaker"]
        },
    ];

    return (
        <div>
            <DepartmentHeader title="Biotechnology Engg. Department" />

            <section className="main-content mt-5 mb-5 ">
                <div className="container">
                    <div className="about-bg">
                        <div className="row">
                            <div className=" col-lg-12">
                                <DepartmentSection title="About" highlight="Us" id="about-us">
                                    <p>
                                        The Department of Biotechnology Engineering (BT) at UIET, Kurukshetra University is one of the best places in the area for providing high-quality biotechnology research and education. The department offers well-structured B.Tech, M.Tech and Ph.D. curricula. The department blends strong academic instruction with considerable practical exposure.
                                    </p>
                                    <p>
                                        The department has highly qualified young faculty with Ph.D. and M.Tech from premier institutes who are motivated researchers on various national and international platforms.
                                    </p>
                                    <p>
                                        The excellent infrastructure includes air-conditioned classrooms with audio-visual aids and well-equipped laboratories with advanced instruments and software.
                                    </p>
                                    <p>
                                        The Department of Biotechnology Engineering has a number of instruments for students to use in their classes and research. These include a fermenter, a UV-visible spectrophotometer, a PCR machine, a gel documentation system, a deep freezer, a CO2 incubator, etc. The department has two smart classrooms and a seminar hall.
                                    </p>
                                    <p>
                                        Students of the department have been placed in various MNCs with high packages. Many students have passed the GATE exam with good ranks and are pursuing higher studies at IITs and NITs.
                                    </p>
                                    <p>
                                        The department has organized various workshops, expert lectures, and industrial visits for the overall development of students.
                                    </p>
                                </DepartmentSection>
                            </div>
                        </div>
                    </div>

                    {/* Key Highlights & Achievements */}
                    <div id="highlights" className="content-panel message-block mb-40 mt-5">
                        <h3 className="mb-4">Key <span className="red">Highlights</span></h3>

                        <div className="table-responsive">
                            <table className="table mobile-stack-table">
                                <tbody>
                                    <tr>
                                        <td style={{ width: "200px" }}><strong>Academic Programs</strong></td>
                                        <td>B.Tech, M.Tech & Ph.D. in Biotechnology Engineering</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Student Intake</strong></td>
                                        <td>60 students per year (B.Tech)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Faculty Strength</strong></td>
                                        <td>10 Faculty Members with doctoral degrees</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Laboratories</strong></td>
                                        <td>7+ State-of-the-art Labs (Bioinformatics, Plant Tissue Culture, Microbial Fermentation, Medical Plant Biotechnology, Recombinant DNA Technology, Biochemistry, Industrial Biotechnology)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Research Focus</strong></td>
                                        <td>Molecular Biology, Microbiology, Biochemistry, Immunology, Nanotechnology, Bioinformatics, Plant Tissue Culture</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Minor Degrees</strong></td>
                                        <td>Drug Engineering, Computer Science and Biology, Genome Engineering and Technology</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 id="collaborations" className="mb-4 mt-5">Research <span className="red">Collaborations</span></h3>
                        <p>The department has research collaborations with premier institutions for providing exposure to Ph.D. scholars with state-of-the-art technologies related to genomics, proteomics and other emerging areas:</p>
                        <ul>
                            <li>ICAR-National Bureau of Animal Genetic Resources (NBAGR), Karnal</li>
                            <li>ICAR-National Dairy Research Institute (NDRI), Karnal</li>
                            <li>ICAR-Indian Institute of Wheat and Barley Research (IIWBR), Karnal</li>
                            <li>CSIR-Central Scientific Instruments Organization (CSIO), Chandigarh</li>
                            <li>ICMR-National Institute of Malaria Research (NIMR), New Delhi</li>
                            <li>Delhi University, Delhi</li>
                        </ul>

                        <h3 id="projects" className="mb-4 mt-5">Sponsored <span className="red">Projects</span></h3>
                        <div className="link-card">
                            <h4 style={{ color: "#091642", marginBottom: "20px" }}><span style={{ marginRight: "10px" }}>🏆</span>DST-SERB Sponsored Project</h4>
                            <table className="table mb-0 mobile-stack-table">
                                <tbody>
                                    <tr>
                                        <td style={{ width: "180px", fontWeight: "600", color: "#091642" }}>Project Title</td>
                                        <td>Evaluation of antimicrobial activity of endophytic fungi isolated from indigenous medicinal plants</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "600", color: "#091642" }}>Principal Investigator</td>
                                        <td>Dr. Pranay Jain, Associate Professor</td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "600", color: "#091642" }}>Funding</td>
                                        <td><strong style={{ color: "#a20b0b" }}>Rs. 21 Lakh</strong></td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontWeight: "600", color: "#091642" }}>Status</td>
                                        <td><span style={{ background: "#d1e7dd", color: "#0f5132", padding: "4px 12px", borderRadius: "20px", fontSize: "14px" }}>✓ Successfully Completed (2016)</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 id="laboratories" className="mb-4 mt-5">Laboratories & <span className="red">Facilities</span></h3>
                        <div className="accordion" id="labAccordion">
                            {laboratories.map((lab, index) => (
                                <div className="accordion-item mb-3" key={index} style={{ border: "1px solid #dee2e6", borderRadius: "8px", overflow: "hidden" }}>
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#lab${index}`}
                                            style={{ fontWeight: "600", background: "#f8f9fa" }}
                                        >
                                            🔬 {lab.name}
                                        </button>
                                    </h2>
                                    <div id={`lab${index}`} className="accordion-collapse collapse" data-bs-parent="#labAccordion">
                                        <div className="accordion-body">
                                            <p>{lab.description}</p>
                                            <h6 style={{ color: "#a20b0b" }}>Instrumentation Available:</h6>
                                            <div className="d-flex flex-wrap gap-2">
                                                {lab.instruments.map((instrument, i) => (
                                                    <span key={i} style={{ background: "#e9ecef", padding: "5px 12px", borderRadius: "20px", fontSize: "14px" }}>
                                                        {instrument}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Placements Section */}
                    <div id="placements" className="message-block mt-5">
                        <h3 className="mb-4">Placement <span className="red">Statistics</span></h3>
                        <p>Our graduates have been placed in leading Biotechnology, Pharma, and IT companies. Here are some recent placements:</p>

                        <div className="placement-tabs mt-4">
                            <style>{`
                                .placement-pill {
                                    margin-right: 8px;
                                    margin-bottom: 8px;
                                    padding: 8px 16px;
                                    border-radius: 20px;
                                    font-size: 14px;
                                    font-weight: 500;
                                    border: 1px solid #a20b0b !important;
                                    background-color: transparent;
                                    color: #a20b0b;
                                    transition: all 0.2s;
                                }
                                .placement-pill:hover {
                                    background-color: #a20b0b;
                                    color: #fff;
                                }
                                .placement-pill.active {
                                    background-color: #a20b0b !important;
                                    color: #fff !important;
                                }
                                @media (max-width: 768px) {
                                    .mobile-stack-table tr {
                                        display: flex;
                                        flex-direction: column;
                                        border-bottom: 1px solid #dee2e6;
                                        padding: 5px 10px;
                                        margin-bottom: 5px;
                                    }
                                    .mobile-stack-table tr:last-child {
                                        border-bottom: none;
                                    }
                                    .mobile-stack-table td {
                                        border: none !important;
                                        padding: 3px 0 !important;
                                        width: 100% !important;
                                    }
                                    .mobile-stack-table td:first-child {
                                        font-weight: 600;
                                        color: #091642;
                                        margin-bottom: 5px;
                                    }
                                    .link-card {
                                        margin-top: 30px;
                                        padding: 15px;
                                    }
                                }
                            `}</style>
                            <div style={{ overflowX: "auto", paddingBottom: "10px" }}>
                                <ul className="nav nav-pills mb-3 flex-nowrap" id="placementTabs" role="tablist">
                                    {placementData.map((batch, index) => (
                                        <li className="nav-item" role="presentation" key={index}>
                                            <button
                                                className={`nav-link placement-pill ${index === 0 ? 'active' : ''}`}
                                                id={`batch-${index}-tab`}
                                                data-bs-toggle="pill"
                                                data-bs-target={`#batch-${index}`}
                                                type="button"
                                                role="tab"
                                            >
                                                {batch.batch}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tab-content" id="placementTabsContent">
                                {placementData.map((batch, index) => (
                                    <div
                                        className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                                        id={`batch-${index}`}
                                        role="tabpanel"
                                        key={index}
                                    >
                                        <div className="table-responsive mb-5 rounded">
                                            <table className="table text-left mb-0">
                                                <thead>
                                                    <tr>
                                                        <th style={{ width: "10%" }}>S.No</th>
                                                        <th style={{ width: "40%" }}>Student Name</th>
                                                        <th>Company/Organization</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {batch.students.map((student, i) => (
                                                        <tr key={i}>
                                                            <td>{i + 1}</td>
                                                            <td>{student.name}</td>
                                                            <td>{student.company}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Department Head Section */}
                    {/* <div className="message-block mt-150">
                        <h3> Department of <span className="red">Biotechnology Engg.</span></h3>
                        <div className="profile-info mt-4">
                            <div className="profile">
                                <img src="/sunil-dhingra.jpg" alt="profile" className="img-fluid" width="300px" />
                            </div>
                            <div className="profile-details">
                                <h4>Faculty Incharge</h4>
                                <p>
                                    The department readies students for fruitful careers in biotechnology and related fields. Our focus is on providing exposure to Ph.D. scholars with state-of-the-art technologies related to genomics, proteomics, and other emerging areas.
                                </p>
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
