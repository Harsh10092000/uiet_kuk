"use client";
import React from "react";
import { useState } from "react";
const CourseCard = ({i}) => {
    return (
        <div class=" container ">
                            <div class="programme-card">
                              <span className="coures-icon border p-3">
                                <img src={i.img} />
                              </span>
                              <div class="card-body">
                                <h5>{i.title}</h5>
                                <p>
                                  Intake: <strong>{i.Intake}</strong>
                                </p>
                                <p>{i.desc}</p>
                              </div>
                            </div>
                          </div>
    )
}

export default CourseCard;