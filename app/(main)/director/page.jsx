import React from "react";

export const metadata = {
  title: "Director's Message | UIET KUK",
  description: "Message from the Director of UIET Kurukshetra University.",
  openGraph: {
    title: "Director's Message | UIET KUK",
    description: "Message from the Director of UIET Kurukshetra University.",
    images: [
      {
        url: "/uiet-logo.png",
        width: 800,
        height: 600,
        alt: "UIET Kurukshetra Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return (
    <div>
      <section className="pages-title mb-4">
        <div className="container">
          <h2>Director</h2>
          <ul class="breadcrumb text-center mx-auto">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">Administration</li>

            <li class="breadcrumb-item active" aria-current="page">
              Director
            </li>
          </ul>
        </div>
      </section>

      <section className="main-content mt-5 mb-5 ">
        <div class="container">
          <div className="about-bg">
            <div class="row">
              <div class="col-sm-10 col-md-12 col-lg-3">
                <div className="aboutpict mb-40">
                  <img src="/directoruiet.jpg" class="img-fluid" />
                  {/* <div className="prof">
                  <h5>Prof. Som Nath Sachdeva</h5>
                </div> */}
                </div>
              </div>

              <div class="col-sm-10 col-md-12 col-lg-8">
                <div className="contact-panel mb-40">
                  <h2>
                    Prof.Sunil Dhingra
                    <span className="red d-block">Director, UIET KUK.</span>
                  </h2>
                  <p>
                    It gives me immense pleasure to introduce University
                    Institute of Engineering and Technology (UIET) which was
                    established in 2004 in the campus of Kurukshetra University.
                    It was established with a motive 'MIND TO MARKET' so as to
                    achieve excellence in the key areas of engineering and to
                    produce talented and committed human resources driven by the
                    spirit of innovation and team work. Presently the institute
                    imparts training in the six key branches of Engineering
                    namely Computer Science Engineering, Computer Science & Engg
                    (AI & ML), Electronics and Communication Engineering,
                    Bio-Technology, Electrical and Computer Engineering and
                    Mechanical Engineering. We offer both graduate and post
                    graduate degrees in these branches of Engineering to more
                    than 2000 talented students from all parts of India having
                    top ranks in JEE Main exam.
                  </p>

                  <p>
                    The campus provides excellent infrastructure not only to
                    hone the technical skills of the students but also provides
                    ample space for leisure and extra curricular activities. I
                    am quite confident that your visit to our campus and
                    interaction with the students will certainly elicit a good
                    response from you.
                  </p>

                  <p>
                    I whole heartedly extend a warm invitation to all who are
                    interested innovation and are obsessed with quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
