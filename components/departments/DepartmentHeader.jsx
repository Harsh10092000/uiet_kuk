import React from "react";
import Link from "next/link";

const DepartmentHeader = ({ title, activeItem }) => {
    return (
        <section className="pages-title mb-4">
            <div className="container">
                <h2>{title}</h2>

                <ul className="breadcrumb text-center mx-auto">
                    <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">Department</li>

                    <li className="breadcrumb-item active" aria-current="page">
                        {activeItem || title}
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default DepartmentHeader;
