"use client";
import React, { useState } from "react";
import CourseCard from "@/components/addmissionForm/CoursesCard/CoursesCard";
import CourseTab from "@/components/addmissionForm/CourseTab/CourseTab";

const FeaturedProgrammes = ({ btech, mtech, phd }) => {
  const [parentTab, setParentTab] = useState("1");
  const [childTab, setChildTab] = useState("1");

  const handleChildTab = (val) => {
    setChildTab(val);
  };

  const renderTabs = (courses) => (
    <div className="row g-4">
      <div className="col-md-6">
        <ul className="nav nav-tabs mb-3">
          {courses.map((i) => (
            <CourseTab
              key={i.id}
              i={i}
              handleChildTab={handleChildTab}
              childTab={childTab}
            />
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        <div className="tab-content">
          {courses
            .filter((a) => a.id == childTab)
            .map((i) => (
              <CourseCard key={i.id} i={i} />
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="featured-section">
      <div className="container">
        <h2 className="section-title ">Featured Programmes</h2>
        <span className="underline d-block mt-2 mb-3 w-10"></span>
        <ul className="nav nav-tabs mb-5" id="degreeTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${parentTab == "1" ? "active" : ""}`}
              id="bachelor-tab"
              data-bs-toggle="tab"
              data-bs-target="#bachelor"
              type="button"
              role="tab"
              onClick={() => {
                setParentTab("1");
                setChildTab("1");
              }}
            >
              Bachelor Degree
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${parentTab == "2" ? "active" : ""}`}
              id="master-tab"
              data-bs-toggle="tab"
              data-bs-target="#master"
              type="button"
              role="tab"
              onClick={() => {
                setParentTab("2");
                setChildTab("1");
              }}
            >
              Master Degree
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${parentTab == "3" ? "active" : ""}`}
              id="phd-tab"
              data-bs-toggle="tab"
              data-bs-target="#phd"
              type="button"
              role="tab"
              onClick={() => {
                setParentTab("3");
                setChildTab("1");
              }}
            >
              Ph.D. Degree
            </button>
          </li>
        </ul>

        <div className="tab-content" id="degreeTabsContent">
          {parentTab == "1" && (
            <div className="tab-pane fade show active" id="bachelor" role="tabpanel">
              {renderTabs(btech)}
            </div>
          )}
          {parentTab == "2" && (
            <div className="tab-pane fade show active" id="master" role="tabpanel">
              {renderTabs(mtech)}
            </div>
          )}
          {parentTab == "3" && (
            <div className="tab-pane fade show active" id="phd" role="tabpanel">
              {renderTabs(phd)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgrammes;


