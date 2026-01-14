"use client";
import SubHeader from "@/components/common/subHeader/SubHeader";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

// Department configuration data
const departmentConfig = {
  cse: {
    name: "Computer Science & Engg. Department",
    facultyLink: "/faculty-of-computer-science-engineering",
    departmentLink: "/computer-science-engg-department",
    importantLinks: [
      { label: "Industry Partner", href: "/industry-partner.jpg" },
      { label: "PO's and PSO's", href: "/doc/cse/CSE PO-PSO.docx" },
      { label: "Research Expertise", href: "/doc/cse/cse-research-expertise.docx" },
      { label: "About Us", href: "#about-us" },
      { label: "Faculty Incharge Message", href: "#incharge-message" },
      { label: "Director Message", href: "#director-message" },
    ]
  },
  ece: {
    name: "Electronics & Communication Engg. Department",
    facultyLink: "/faculty-of-electronics-and-communication-engineering",
    departmentLink: "/electronics-and-communication-engg-department",
    importantLinks: [
      { label: "Industry Partner", href: "/doc/ece/job-career-industry-partner-ece-uiet.jpg" },
      { label: "PO's and PSO's", href: "/doc/ece/pos-and-psos-ece-uiet.docx" },
      { label: "Research Expertise", href: "/doc/ece/research-expertise-ece-uiet.pdf" },
      { label: "Mentor List", href: "/doc/ece/mentor-list-ece-department-uiet.docx" },
      { label: "Lab Details", href: "/doc/ece/lab-details-ece-uiet.pdf" },
    ]
  },
  me: {
    name: "Mechanical Engg. Department",
    facultyLink: "/faculty-of-mechanical-engineering",
    departmentLink: "/mechanical-engg-department",
    importantLinks: [
      { label: "Industry Partner", href: "/doc/me/industry-partner-me-uiet-kuk.jpg" },
      { label: "PO's and PSO's", href: "/doc/me/po-pso-me-uiet-kuk.docx" },
      { label: "Research Expertise", href: "/doc/me/research-expertise-me-uiet-kuk.pdf" },
      { label: "Mentor List", href: "/doc/me/mentor--ist-of-echanical-engineering-department-uiet.pdf" },
      { label: "Lab Details", href: "/doc/me/lab-details-me-uiet-kuk.pdf" },
      { label: "About Us", href: "#about-us" },
      { label: "Faculty Incharge Message", href: "#incharge-message" },
      { label: "Director Message", href: "#director-message" },
    ]
  },
  bt: {
    name: "Biotechnology Engg. Department",
    facultyLink: "/faculty-of-biotechnology-engineering",
    departmentLink: "/biotechnology-engg-department",
    importantLinks: [
      { label: "Industry Partner", href: "/doc/bt/industry partner.jpg" },
      { label: "Coordinators/Mentors/Counsellers", href: "/doc/bt/coordinatormentor_BT.doc" },
      { label: "Key Highlights", href: "#highlights" },
      { label: "Laboratories", href: "#laboratories" },
      { label: "Collaborations", href: "#collaborations" },
      { label: "Research Projects", href: "#projects" },
      { label: "Placements", href: "#placements" },
    ]
  },
  ee: {
    name: "Electrical Engg. Department",
    facultyLink: "/faculty-of-electrical-engineering",
    departmentLink: "/electrical-engg-department",
    importantLinks: [
      { label: "Industry Partner", href: "/doc/ee/industry-partner-ee-uiet-kuk.jpg" },
      { label: "PO's and PSO's", href: "/doc/ee/po-pso-ee-uiet-kuk.docx" },
    ]
  },
  as: {
    name: "Applied Sciences Department",
    facultyLink: "/faculty-of-applied-sciences",
    departmentLink: "/applied-sciences-department",
    importantLinks: [
      { label: "Industry Partner", href: "/doc/as/industry-partner-as-uiet-kuk.jpg" },
      { label: "Facilities", href: "/doc/as/facilities-in-applied-science-department-uiet-kuk.pdf" },
      { label: "Lab Details", href: "/doc/as/labs-in-applied-science-department-uiet-kuk.pdf" },
      { label: "About Us", href: "#about-us" },
    ]
  },
};

// Detect department from URL path
const getDepartmentFromPath = (pathname) => {
  if (pathname.includes("computer-science") || pathname.includes("/cse")) return "cse";
  if (pathname.includes("electronics-and-communication") || pathname.includes("/ece")) return "ece";
  if (pathname.includes("mechanical") || pathname.includes("/me")) return "me";
  if (pathname.includes("biotechnology") || pathname.includes("/bt")) return "bt";
  if (pathname.includes("electrical") || pathname.includes("/ee")) return "ee";
  if (pathname.includes("applied-sciences") || pathname.includes("/as")) return "as";
  return "cse"; // default
};

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const department = getDepartmentFromPath(pathname);
  const config = departmentConfig[department];

  return (
    <div>
      <header>
        <SubHeader />

        <div className="main-header mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="logo inner-logo">
                  <Link href="/" className="desktop-logo"><img src="/logo.png" alt="logo" className=" img-fluid" /></Link>
                  <h4>{config.name}<span className="red">Kurukshetra University(UIET), Kurukshetra</span></h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="nav-inner">
                  <ul>
                    <li className="dropdown">
                      <Link href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">People</Link>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><Link href={config.facultyLink}>Faculty</Link></li>
                        <li><Link href="#">Research Scholars</Link></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButtonDept" data-bs-toggle="dropdown" aria-expanded="false">Departments</a>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonDept">
                        {[
                          { id: 'cse', href: '/computer-science-engg-department', label: 'Computer Science & Engg.' },
                          { id: 'ece', href: '/electronics-and-communication-engg-department', label: 'Electronics & Comm. Engg.' },
                          { id: 'bt', href: '/biotechnology-engg-department', label: 'Biotechnology Engg.' },
                          { id: 'me', href: '/mechanical-engg-department', label: 'Mechanical Engg.' },
                          { id: 'ee', href: '/electrical-engg-department', label: 'Electrical Engg.' },
                          { id: 'as', href: '/applied-sciences-department', label: 'Applied Sciences' },
                        ].map((dept) => (
                          <li key={dept.id}>
                            <Link
                              href={dept.href}
                              className="dropdown-item"
                              style={department === dept.id ? { color: "#a20b0b", fontWeight: "bold", background: "#f8f9fa" } : {}}
                            >
                              {dept.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">Important Links</a>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                        {config.importantLinks && config.importantLinks.map((link, index) => (
                          link.href !== "#" && (
                            <li key={index}>
                              <a
                                href={link.href}
                                target={link.href.startsWith('#') ? "_self" : "_blank"}
                              >
                                {link.label}
                              </a>
                            </li>
                          )
                        ))}
                        {(!config.importantLinks || config.importantLinks.length === 0) && (
                          <li><span className="dropdown-item" style={{ cursor: "default", color: "#6c757d" }}>No links available</span></li>
                        )}
                      </ul>
                    </li>
                    <li><Link href="#">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <span className="toggle-menu d-block d-lg-none"><i className="fa-solid fa-bars"></i></span>
        </div>
      </header>
    </div>
  );
};

export default Header;
