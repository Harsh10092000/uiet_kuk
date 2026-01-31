import Link from "next/link";

const courseList = [
  {
    icon: "fa-solid fa-laptop",
    title: "Computer Science & Engg. Department",
    description: "The Department of Computer Science & Engineering was established in the year 2004 with B.Tech. and M.Tech. programs.",
    link: "/computer-science-engg-department",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Electronics & Communication Engg. Department",
    description: "The Department of Electronics and Communication Engg. (ECE) was established in the year 2004.",
    link: "/electronics-and-communication-engg-department",
  },
  {
    icon: "fa-solid fa-gears",
    title: "Mechanical Engg. Department",
    description: "The B.Tech courses in Mechanical Engineering are broad based and integral with emphasis on fundamentals.",
    link: "/mechanical-engg-department",
  },
  {
    icon: "fa-solid fa-flask",
    title: "Biotechnology Engg. Department",
    description: "U.I.E.T. is one of the pioneer institutes providing B.Tech. and M.Tech. in Biotechnology.",
    link: "/biotechnology-engg-department",
  },
  {
    icon: "fa-solid fa-plug",
    title: "Electrical Engg. Department",
    description: "The Department of Electrical Engineering was established in 2004 with M.Tech. and B.Tech. programs.",
    link: "/electrical-engg-department",
  },
  {
    icon: "fa-solid fa-atom",
    title: "Applied Sciences Department",
    description: "The Department of Applied Science runs Ph.D. programmes in Physics, Chemistry and Mathematics.",
    link: "/applied-sciences-department",
  },
];

const CoursesSection = () => {
  return (
    <section className="coures-block pt-5 pb-5">
      <div className="container">
        <div className="main-title text-center">
          <h2>
            <span className="red d-block">Courses Offered</span>Courses Designed for Your Success
          </h2>
        </div>
        <div className="row mt-5">
          {courseList.map((course, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="course-box">
                <div className="course-icon red">
                  <i className={course.icon}></i>
                </div>
                <h5>{course.title}</h5>
                <p>{course.description}</p>
                <p>
                  <Link href={course.link} className="red">
                    View More..
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
