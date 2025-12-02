"use client";
import React, { useState, useMemo } from "react";
import "./fonts.css";
import { getDeptShortForm, parseDepartmentScope } from "./types";

const NotificationsList = ({ results }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const formatDate = (value) => {
    if (!value) return "";

    let date;
    if (value instanceof Date) {
      date = value;
    } else {
      date = new Date(value);
    }

    if (Number.isNaN(date.getTime())) {
      return String(value);
    }

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getItemHref = (item) => {
    if (item?.link_url) return item.link_url;

    if (item?.file_name && item?.file_path) {
      const baseUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL || process.env.BACKEND_URL || "";
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
      if (name.endsWith(".doc") || name.endsWith(".docx"))
        return "fa-regular fa-file-word";
      if (name.endsWith(".xls") || name.endsWith(".xlsx"))
        return "fa-regular fa-file-excel";
      if (name.endsWith(".ppt") || name.endsWith(".pptx"))
        return "fa-regular fa-file-powerpoint";
      if (name.endsWith(".txt"))
        return "fa-regular fa-file-text";
      if (name.endsWith(".csv"))
        return "fa-regular fa-file-csv";
      if (name.endsWith(".json"))
        return "fa-regular fa-file-json";
      if (name.endsWith(".xml"))
        return "fa-regular fa-file-xml";
      if(name.endsWith(".png"))
        return "fa-regular fa-file-image";
      if(name.endsWith(".jpg"))
        return "fa-regular fa-file-image";
      if(name.endsWith(".jpeg"))
        return "fa-regular fa-file-image";
      return "fa-regular fa-file";
    }

    if (hasLink) {
      return "fa-solid fa-link";
    }

    // no file, no link → subtle \"unknown\" icon that still fits with other icons
    return "fa-regular fa-file-lines";
  };

  // Get unique departments for filter dropdown (from department_scope JSON)
  const departments = useMemo(() => {
    const deptSet = new Set();
    results.forEach((result) => {
      const scopes = parseDepartmentScope(result.department_scope);
      scopes.forEach((dept) => deptSet.add(dept));
    });
    return ["All", ...Array.from(deptSet)];
  }, [results]);
  
  // Get applied filters for chips
  const appliedFilters = useMemo(() => {
    const filters = [];
    if (searchQuery) {
      filters.push({
        type: "search",
        label: `Search: "${searchQuery}"`,
        value: searchQuery,
      });
    }
    if (selectedDepartment !== "All") {
      const shortDept = selectedDepartment
        .replace("Department of ", "")
        .replace(" & Engg.", "");
      filters.push({
        type: "department",
        label: `Dept: ${shortDept}`,
        value: selectedDepartment,
      });
    }
    return filters;
  }, [searchQuery, selectedDepartment]);

  // Remove individual filter
  const removeFilter = (filterType) => {
    switch (filterType) {
      case "search":
        setSearchQuery("");
        break;
      case "department":
        setSelectedDepartment("All");
        break;
    }
  };

  // Filter results based on search query and department
  const filteredResults = useMemo(() => {
    return results.filter((result) => {
      const scopes = parseDepartmentScope(result.department_scope);
      const scopeString = scopes.join(" ").toLowerCase();
      const q = searchQuery.toLowerCase();

      const matchesSearch =
        result.title.toLowerCase().includes(q) || scopeString.includes(q);

      const matchesDepartment =
        selectedDepartment === "All" ||
        scopes.includes(selectedDepartment) ||
        scopes.includes("All Departments");

      return matchesSearch && matchesDepartment;
    });
  }, [results, searchQuery, selectedDepartment]);
  return (
    <div style={{ fontFamily: "'Paralucent', sans-serif" }}>
    <section className="pages-title mb-4">
      <div className="container">
        <h2>Result</h2>
        <ul className="breadcrumb text-center mx-auto">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Result
          </li>
        </ul>
      </div>
    </section>

    <section className="main-content mt-5 mb-5 ">
      <div className="container">
        {/* Search and Filter Section */}
        <div className="row mb-4">
          <div className="col-md-7 mb-3 mb-md-0">
            <div className="search-container">
              <div className="input-group">
                <span className="input-group-text" style={{ background: "#f8f9fa", borderRight: "none" }}>
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by title or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ borderLeft: "none", padding: "10px" }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-5 mb-3 mb-md-0">
            <div className="filter-container">
              <select
                className="form-select"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                style={{ padding: "10px" }}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Applied Filters Chips */}
        {appliedFilters.length > 0 && (
          <div className="row mb-3">
            <div className="col-md-12">
              <div className="d-flex align-items-center flex-wrap gap-2">
                <span className="text-muted me-2" style={{ fontSize: "14px" }}>
                  <i className="fas fa-filter me-1"></i> Applied Filters:
                </span>
                {appliedFilters.map((filter, index) => (
                  <span
                    key={index}
                    className="badge bg-primary d-flex align-items-center gap-2"
                    style={{
                      padding: "6px 12px",
                      fontSize: "13px",
                      cursor: "pointer"
                    }}
                    onClick={() => removeFilter(filter.type)}
                  >
                    {filter.label}
                    <i className="fas fa-times" style={{ fontSize: "10px" }}></i>
                  </span>
                ))}
                {appliedFilters.length > 1 && (
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedDepartment("All");
                    }}
                    style={{ padding: "4px 12px", fontSize: "12px" }}
                  >
                    <i className="fas fa-times me-1"></i> Clear All
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="mb-3">
          <p className="text-muted">
            Showing <strong>{filteredResults.length}</strong> of <strong>{results.length}</strong> results
          </p>
        </div>

        <div className="table-responsive mb-5 rounded">
          <table className="table text-left mb-0">
            <thead>
              <tr>
                <th style={{width:"10%"}}>SL No.</th>
                <th style={{width:"40%"}}>Download Link</th>
                <th></th>
                <th>Department</th>
                <th>Uploaded Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => {
                  const hasFile = result.file_name && result.file_path;
                  const hasLink = !!result.link_url;
                  const href = getItemHref(result);

                  return (
                    <tr key={result.id || index}>
                      <td>{index + 1}</td>
                      <td>
                        {hasFile || hasLink ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            {result.title}
                          </a>
                        ) : (
                          result.title
                        )}
                      </td>
                      <td>
                        {hasFile || hasLink ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            <span className="file-icon">
                              <i className={getIconClass(result)}></i>
                            </span>
                          </a>
                        ) : (
                          <span className="file-icon">
                            <i className={getIconClass(result)}></i>
                          </span>
                        )}
                      </td>
                      <td>{getDeptShortForm(result.department_scope)}</td>
                      <td>{formatDate(result.created_at)}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    <p className="text-muted mb-0">
                      <i className="fas fa-inbox me-2"></i>
                      No results found. Please try different search terms or filters.
                    </p>
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

       
      </div>
    </section>
  </div>
  )
}

export default NotificationsList