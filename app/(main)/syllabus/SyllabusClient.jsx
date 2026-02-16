"use client";
import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getDeptShortForm, parseDepartmentScope } from "@/components/notificationsList/types";

// Static list of departments to ensure dropdown is never empty
const ALL_DEPARTMENTS = [
    "All",
    "Computer science and Engineering",
    "Electronics & Communication Engineering",
    "Electrical and Computer Engineering",
    "Mechanical Engineering",
    "Bio-Technology",
    "Industrial & Production",
    "Thermal Engg.",
    "Electrical Engg.",
    "Defence Technology",
    "Others",
];

const SyllabusClient = ({ results = [] }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Initialize state from URL param or default
    const initialDept = searchParams.get("department") || "All";
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState(initialDept);

    // Update state if URL changes (e.g. user clicks header link while on page)
    useEffect(() => {
        const dept = searchParams.get("department");
        if (dept) {
            setSelectedDepartment(dept);
        } else {
            setSelectedDepartment("All");
        }
    }, [searchParams]);

    // Update URL when filter changes (optional, but good for shareability)
    const handleDepartmentChange = (newDept) => {
        setSelectedDepartment(newDept);
        // basic URL update without full reload
        const params = new URLSearchParams(searchParams);
        if (newDept && newDept !== "All") {
            params.set("department", newDept);
        } else {
            params.delete("department");
        }
        router.push(`/syllabus?${params.toString()}`, { scroll: false });
    };

    const formatDate = (value) => {
        if (!value) return "";
        const date = new Date(value);
        return Number.isNaN(date.getTime())
            ? String(value)
            : date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    };

    const getItemHref = (item) => {
        if (item?.link_url) return item.link_url;
        if (item?.file_name && item?.file_path) {
            const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL || "";
            return `${baseUrl}${item.file_path}`;
        }
        return "#";
    };

    const getIconClass = (item) => {
        const hasFile = item?.file_name && item?.file_path;
        const hasLink = !!item?.link_url;
        if (hasFile) {
            const name = (item.file_name || item.file_path || "").toLowerCase();
            if (name.endsWith(".pdf")) return "fa-regular fa-file-pdf";
            if (name.endsWith(".doc") || name.endsWith(".docx")) return "fa-regular fa-file-word";
            // ... (simplified for brevity, can depend on CSS for other types or just use generic)
            return "fa-regular fa-file-alt";
        }
        return hasLink ? "fa-solid fa-link" : "fa-regular fa-file-lines";
    };

    // Filter logic
    const filteredResults = useMemo(() => {
        return results.filter((result) => {
            // Parse scopes from result
            const scopes = parseDepartmentScope(result.department_scope);
            const scopeString = scopes.join(" ").toLowerCase();

            // Search filter
            const q = searchQuery.toLowerCase();
            const matchesSearch = result.title.toLowerCase().includes(q) || scopeString.includes(q);

            // Department filter
            // If selected is 'All', match everything
            // If exact match in scopes
            // If 'All Departments' is in scopes, it should match any selected department (usually) matchesDepartment logic:
            const matchesDepartment =
                selectedDepartment === "All" ||
                scopes.includes(selectedDepartment) ||
                scopes.includes("All Departments") ||
                // Handle potential mismatch in naming conventions if necessary, 
                // but for now relying on exact strings matches from ALL_DEPARTMENTS
                (selectedDepartment === "Applied Sciences" && scopes.some(s => s.includes("Applied Sciences")));

            return matchesSearch && matchesDepartment;
        });
    }, [results, searchQuery, selectedDepartment]);

    return (
        <div style={{ fontFamily: "'Paralucent', sans-serif" }}>
            <section className="pages-title mb-4">
                <div className="container">
                    <h2>Syllabus</h2>
                    <ul className="breadcrumb text-center mx-auto">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Syllabus</li>
                    </ul>
                </div>
            </section>

            <section className="main-content mt-5 mb-5 ">
                <div className="container">
                    {/* Filters */}
                    <div className="row mb-4">
                        <div className="col-md-7 mb-3 mb-md-0">
                            <div className="input-group">
                                <span className="input-group-text bg-light"><i className="fas fa-search"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search query..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <select
                                className="form-select"
                                value={selectedDepartment}
                                onChange={(e) => handleDepartmentChange(e.target.value)}
                            >
                                {ALL_DEPARTMENTS.map(dept => (
                                    <option key={dept} value={dept}>{dept}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results Info */}
                    <p className="text-muted mb-3">Showing <strong>{filteredResults.length}</strong> results</p>

                    {/* Table */}
                    <div className="table-responsive mb-5 rounded">
                        <table className="table text-left mb-0">
                            <thead>
                                <tr>
                                    <th style={{ width: "10%" }}>SL No.</th>
                                    <th style={{ width: "40%" }}>Title</th>
                                    <th>Type</th>
                                    <th>Department</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredResults.length > 0 ? (
                                    filteredResults.map((result, index) => {
                                        const href = getItemHref(result);
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <a href={href} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
                                                        {result.title}
                                                    </a>
                                                </td>
                                                <td><i className={getIconClass(result)}></i></td>
                                                <td>{getDeptShortForm(result.department_scope)}</td>
                                                <td>{formatDate(result.created_at)}</td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr><td colSpan="5" className="text-center py-4">No syllabus found for {selectedDepartment}.</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SyllabusClient;
