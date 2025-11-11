"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FacultySlider = ({ facultyData = [], viewAllLink = "#" }) => {
  return (
    <div className="faculty mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-center flex-grow-1">Faculty</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, Scrollbar]}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={facultyData.length > 4}
        spaceBetween={16}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
      >
        {facultyData.map((faculty, index) => (
          <SwiperSlide key={index}>
            <div className="card border-0 h-100">
              <img src={faculty.image} alt={faculty.name} className="img-fluid" />
              <div className="card-body border card-info">
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
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="text-center mt-3">
        <Link href={viewAllLink} className="btn-red">View All</Link>
      </div>
    </div>
  );
};

export default FacultySlider;
