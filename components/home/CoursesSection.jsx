const courseList = [
  {
    icon: "fa-solid fa-laptop",
    title: "Computer Science &Engg. Department",
    description: "The Department of Computer Science & Engineering was established in the year 2004.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Electronics & Comm. Engg Department.",
    description: "The Department of Electronics and Communication Engg.(ECE)was established in the year 2004.",
  },
  {
    icon: "fa-solid fa-gears",
    title: "Mechanical Engg. Department",
    description: "The B.Tech courses in Mechanical Engineering are broad based and integral with emphasis.",
  },
  {
    icon: "fa-solid fa-flask",
    title: "Biotechnology Department",
    description: "U.I.E.T. is one of the pioneer institutes providing B.Tech. and M.Tech. in Biotechnology.",
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
            <div key={index} className="col-lg-3">
              <div className="course-box">
                <div className="course-icon red">
                  <i className={course.icon}></i>
                </div>
                <h5>{course.title}</h5>
                <p>{course.description}</p>
                <p>
                  <a href="#" className="red">
                    View More..
                  </a>
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

