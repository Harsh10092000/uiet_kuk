"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TeacherCard from "@/components/common/teacherCard/TeacherCard";

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
            <TeacherCard faculty={faculty} />
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
