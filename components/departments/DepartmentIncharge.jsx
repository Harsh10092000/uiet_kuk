"use client";
import React from "react";
import Link from "next/link";

const DepartmentIncharge = ({ incharge, message }) => {
    if (!incharge) return null;

    return (
        <div className="message-block mt-5 mb-5" id="incharge-message">
            <h3>
                Faculty <span className="red">In-charge speaks</span>
            </h3>
            <div className="profile-info mt-4">
                <div className="profile">
                    <img
                        src={incharge.image && incharge.image !== "#" ? incharge.image : "/uiet-logo.png"}
                        alt={incharge.name}
                        className="img-fluid"
                        width="300px"
                        style={{ borderRadius: "10px", objectFit: "cover" }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/uiet-logo.png";
                        }}
                    />
                </div>
                <div className="profile-details">
                    <h4>{incharge.name}</h4>
                    {/* <h6 className="text-muted mb-3">{incharge.designation}</h6> */}
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default DepartmentIncharge;
