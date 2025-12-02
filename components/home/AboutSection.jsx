const AboutSection = () => {

  return (
    <section className="about-block pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7 border-right">
            <div className="message-block ">
              <h3>
                Vice Chancellor <span className="red">Speaks</span>
              </h3>
              <div className="profile-info mt-4 mb-5">
                <div className="profile">
                  <img src="/som-nath.jpg" alt="profile" className="img-fluid" />
                </div>
                <div className="profile-details">
                  <h4>Prof. Som Nath Sachdeva</h4>
                  <p>
                    It is a matter of great pride that UIET was established in 2004 and
                    established itself as a premier Institution in the state of Haryana,
                    imparting technical & valuable engineering education with good
                    placements. In a very short span of time, the institute has carved a
                    niche for itself among the best technical institutes in Haryana and
                    is a dream institute for budding engineers.
                  </p>
                  <a href="/vice-chancellor" className="red">
                    Read More...
                  </a>
                </div>
              </div>
            </div>
            <div className="message-block mt-150">
              <h3>
                Director,<span className="red"> UIET KUK.</span>
              </h3>
              <div className="profile-info mt-4">
                <div className="profile">
                  <img src="/sunil-dhingra.jpg" alt="profile" className="img-fluid" />
                </div>
                <div className="profile-details">
                  <h4>Prof.Sunil Dhingra</h4>
                  <p>
                    It gives me immense pleasure to introduce University Institute of
                    Engineering and Technology (UIET) which was established in 2004 in
                    the campus of Kurukshetra University. It was established with a motive
                    'MIND TO MARKET' so as to achieve excellence in the key areas of
                    engineering and to produce talented and committed human resources .
                  </p>
                  <a href="/director" className="red">
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="about-content message-block">
              <h3 className="mb-3 mt-0">
                About <span className="red">Us</span>
              </h3>
              <p>
                University Institute of Engineering & Technology (UIET) was established
                by Kurukshetra University in 2004 with objective to develop as a "Centre
                of Excellence" and offer quality technical education and to undertake
                research in Engineering & Technology.
              </p>

              <p>
                Presently, the institute is offering six B. Tech Courses (Computer Science
                & Engineering,Computer Science & Engineering (AI & ML), Electronics and
                Communication Engineering, Electrical & Computer Engineering, Biotechnology
                and Mechanical Engineering) and seven M. Tech. courses in the technically
                important disciplines Computer Science & Engineering, Electronics and
                Communication Engineering, Mechanical Engg.
              </p>

              <a href="#" className="btn-red">
                Read More..
              </a>

              <div className="mission-vission">
                <h4>Our Vision</h4>
                <p>
                  To Contribibute to the Nation through best practices in Technical
                  Education and be recognized as one of the most Comprehensive Institute in
                  India.
                </p>
              </div>

              <div className="mission-vission">
                <h4>Our Mission</h4>
                <p>
                  To Educate the Students of Engineering & Technology by providing Value
                  Based Technical Education. To produce skilled Engineering Graduates to
                  cater to the needs of Industry and society. To develop dynamic and
                  innovative researchers/entrepreneurs in the field of Engineering and
                  Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

