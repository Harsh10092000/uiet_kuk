import React from 'react'
import Link from 'next/link'
const TeacherCard = ({faculty}) => {
  return (
      <div className="card border h-100 p-3">
        
              <img src={faculty.image} alt={faculty.name} className="img-fluid" />
              <div className="card-body card-info">
                <h5 className="card-title text-dark">{faculty.name}</h5>
                <div className="info-text">
                  <p className="card-text text-secondary">{faculty.designation}</p>
                  {faculty.link && (
                    <Link href={faculty.link}>
                      <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
  )
}

export default TeacherCard