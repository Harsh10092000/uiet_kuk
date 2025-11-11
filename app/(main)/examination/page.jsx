"use client";
import React, { useState, useMemo } from "react";
import "./fonts.css";

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const results = [
    {
      sl: 1,
      title: "Reevaluation result of CSE 5th,6th & 8th Semester of May-2024 and DEC-2024",
      link: "/examination/results/1",
      department: "Department of Computer Science & Engg.",
      postingDate: "11 Nov-2025"
    },
    {
      sl: 2,
      title: "Reevaluation Result of B.Tech 1st,2nd,4th,5th,6th,7th & 8th sem DEC-2023 & MAY-2024 (Batch 2018-2020)",
      link: "/examination/results/2",
      department: "Department of Computer Science & Engg.",
      postingDate: "09 Nov-2025"
    },
    {
      sl: 3,
      title: "Special Reevaluation result of ECE 7th Semester",
      link: "/examination/results/3",
      department: "Department of Electronics & Communication Engg.",
      postingDate: "2 Nov-2025"
    },
    {
      sl: 4,
      title: "Reevaluation result of CSE 5th,6th & 8th Semester of May-2024 and DEC-2024",
      link: "/examination/results/4",
      department: "Department of Electronics & Communication Engg.",
      postingDate: "26 Oct-2025"
    },
    {
      sl: 5,
      title: "B.Tech. CSE 4th sem-ECE -ME 6th sem May 23 Reevaluation result 30-01-24",
      link: "/examination/results/5",
      department: "Others",
      postingDate: "11 Nov-2025"
    },
    {
      sl: 6,
      title: "Re-evaluation application form for Dec. 23/May 24 Exam (only for 2018 to 2020 batch)",
      link: "/examination/results/6",
      department: "Department of Computer Science & Engg.",
      postingDate: "01 Oct-2025"
    }
  ];

  // Get unique departments for filter dropdown
  const departments = useMemo(() => {
    const deptSet = new Set(results.map(r => r.department));
    return ["All", ...Array.from(deptSet)];
  }, []);

  // Get applied filters for chips
  const appliedFilters = useMemo(() => {
    const filters = [];
    if (searchQuery) {
      filters.push({ type: "search", label: `Search: "${searchQuery}"`, value: searchQuery });
    }
    if (selectedDepartment !== "All") {
      // Shorten department name for chip display
      const shortDept = selectedDepartment.replace("Department of ", "").replace(" & Engg.", "");
      filters.push({ type: "department", label: `Dept: ${shortDept}`, value: selectedDepartment });
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
    return results.filter(result => {
      const matchesSearch = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           result.department.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment = selectedDepartment === "All" || result.department === selectedDepartment;
      
      return matchesSearch && matchesDepartment;
    });
  }, [searchQuery, selectedDepartment]);

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
            <table className="table text-left">
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
                  filteredResults.map((result, index) => (
                    <tr key={result.sl}>
                      <td>{index + 1}</td>
                      <td>{result.title}</td>
                      <td>
                        <span className="file-icon">
                          <i className="fa-regular fa-file-pdf"></i>
                        </span>
                      </td>
                      <td>{result.department}</td>
                      <td>{result.postingDate}</td>
                    </tr>
                  ))
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

          {/* <div class="link-card">
            <h3 class="mb-4  ">
              Revaluation & Reappear Results
            </h3>
            
            <a href="#" class="btn link-btn">
              Reevaluation result of CSE 5th,6th & 8th Semester of May-2024 and
              DEC-2024
            </a>
            <a href="#" class="btn link-btn">
              Special Reevaluation result DEC-2024
            </a>
            <a href="#" class="btn link-btn">
              B.Tech ME 6th Semester DEC-2024 (Batch 2014-2017)
            </a>
            <a href="#" class="btn link-btn">
              Special Reevaluation result of 4th and 5th Sem reappear May24
            </a>
            <a href="#" class="btn link-btn">
              Reevaluation result B.Tech. 5th and 8th sem May 24
            </a>
            <a href="#" class="btn link-btn">
              Reevaluation Result of B.Tech 1st,2nd,4th,5th,6th,7th & 8th sem
              DEC-2023 & MAY-2024 (Batch 2018-2020)
            </a>
            <a href="#" class="btn link-btn">
              B.Tech CSE 2nd Sem.Reappear May 2024
            </a>
            <a href="#" class="btn link-btn">
              Special Reevaluation result of ECE 7th Semester
            </a>
            <a href="#" class="btn link-btn">
              Reevaluation result of 6th & 8th semester May-2024
            </a>
            <a href="#" class="btn link-btn">
              Notification for Google form for reevaluation application form
            </a>
            <a href="#" class="btn link-btn">
              6th Semester Reappear result May-2024 (Batch 2014-2017)
            </a>
            <a href="#" class="btn link-btn">
              Regarding Special Re-evaluation result of CSE 5th Sem.DEC-2023
            </a>
            <a href="#" class="btn link-btn">
              Link for accessing previous year papers
            </a>
            <a href="#" class="btn link-btn">
              Result of B.Tech ECE 8th Sem May 2024 Re-appear (Batch 2015-2017)
            </a>
            <a href="#" class="btn link-btn">
              Re-evaluation result CSE 5th semester DEC-2023
            </a>
            <a href="#" class="btn link-btn">
              Re-evaluation application form for Dec. 23/May 24 Exam (only for
              2018 to 2020 batch)
            </a>
            <a href="#" class="btn link-btn">
              Reevaluation Result 1st 5th 6th and 7th sem Dec. 23 2nd list
            </a>
            <a href="#" class="btn link-btn">
              B.Tech. ME 3rd Sem (2014-17) Dec-23
            </a>
            <a href="#" class="btn link-btn">
              B.Tech. ME 5th Sem (2014-17) Dec-23
            </a>
            <a href="#" class="btn link-btn">
              B.Tech. ME 6th Sem (2014-17) Dec-23
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default page;
