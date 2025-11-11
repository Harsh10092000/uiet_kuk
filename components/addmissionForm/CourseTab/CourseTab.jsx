"use client";
import React from "react";
import { useState } from "react";
const CourseTab = ({i, handleChildTab, childTab}) => {
    return (
       <li
                          class="nav-item w-50 mb-2"
                          onClick={() => handleChildTab(i.id)}
                        >
                          
                          <a
                            class={`nav-link ${
                              childTab == i.id ? "active show" : ""
                            }`}
                            data-bs-toggle="tab"
                            href="bachelor1"
                          >
                            <div class="programme-card">
                              <span className="coures-pict">
                                <img src={i.img} className="img-fluid" />
                              </span>
                              <div class="programme-card-body">
                                <h6>{i.title}</h6>
                                <p>
                                  Intake: <strong>{i.Intake}</strong>
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
    )
}

export default CourseTab;