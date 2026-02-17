"use client";
import React from 'react'
import Link from 'next/link'
const TeacherCard = ({ faculty }) => {
  // Determine link: use 'link' if exists, otherwise 'resume', otherwise '#'
  const profileLink = faculty.link && faculty.link !== "#" ? faculty.link : (faculty.resume && faculty.resume !== "#" ? faculty.resume : null);

  return (
    <div className="card border h-100 p-3">
      <img
        src={faculty.image && faculty.image !== "#" ? faculty.image : "/uiet-logo.png"}
        alt={faculty.name}
        className="img-fluid"
        style={{ objectFit: 'cover', height: '250px', width: '100%' }}
        onError={(e) => { e.target.onerror = null; e.target.src = "/uiet-logo.png"; }}
      />
      <div className="card-body card-info">
        <h5 className="card-title text-dark">{faculty.name}</h5>
        <div className="info-text">
          <p className="card-text text-secondary">{faculty.designation}</p>
          {profileLink && (
            <Link href={profileLink} target="_blank">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeacherCard