"use client";
import React from "react";
import Link from "next/link";
import { facultyData } from "@/app/data/facultyData";

const Page = () => {
    const departmentData = facultyData["electrical-engg-department"] || [];

    return (
        <div>
            <section className="pages-title mb-4">
                <div className="container">
                    <h2>Department of Electrical Engg.</h2>

                    <ul className="breadcrumb text-center mx-auto">
                        <li className="breadcrumb-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link href="/electrical-engg-department">
                                Department of Electrical Engg.
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Faculty of Electrical Engg.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="main-content mt-5 mb-5 ">
                <div className="container">
                    {departmentData.map((faculty) => (
                        <div className="about-bg bg-remove mb-4" key={faculty.id}>
                            <div className="row">
                                <div className="col-sm-10 col-md-12 col-lg-2">
                                    <div className="aboutpict mb-40">
                                        <img
                                            src={faculty.image !== "#" ? faculty.image : "/uiet-logo.png"}
                                            className="img-fluid"
                                            alt={faculty.name}
                                            width="100%"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/uiet-logo.png";
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-10 col-md-12 col-lg-10">
                                    <div className="content-panel mb-40">
                                        <h4>
                                            {faculty.name}
                                            <span className="red d-block">
                                                 {faculty.designation}{" "}
                                            </span>
                                        </h4>

                                        <ul className="peronal-detail">
                                            <li>
                                                <strong>Experience :</strong>
                                                <a href="#">{faculty.experience}</a>
                                            </li>
                                            <li>
                                                <strong>Phone (Office) :</strong>
                                                <a href={`tel:${faculty.phone}`}>{faculty.phone}</a>
                                            </li>
                                            <li>
                                                <strong>Specialization :</strong>
                                                <a href="#">{faculty.specialization}</a>
                                            </li>
                                            <li>
                                                <strong>Research/Publication:</strong>
                                                <a href="#">{faculty.research_areas}</a>
                                            </li>

                                            <li>
                                                <strong>E-mail :</strong>
                                                <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
                                            </li>
                                            <li>
                                                <strong>Qualification :</strong>
                                                <a href="#">{faculty.qualification}</a>
                                            </li>
                                            {faculty.resume && faculty.resume !== "#" && (
                                                <li>
                                                    <a href={faculty.resume} className="btn-red mt-3" target="_blank" rel="noopener noreferrer">
                                                        Annexure (Complete Resume)
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {departmentData.length === 0 && (
                        <div className="text-center">
                            <p>No faculty data available for this department.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Page;
