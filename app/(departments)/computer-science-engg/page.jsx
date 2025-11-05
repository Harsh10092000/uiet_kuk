import React from "react";

const page = () => {
  return (
    <div>
      <section className="pages-title mb-4">
        <div className="container">
          <h2>Computer Science Engg.</h2>

          <ul class="breadcrumb text-center mx-auto">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">Faculty</li>

            <li class="breadcrumb-item active" aria-current="page">
              Computer Science Engg.
            </li>
          </ul>
        </div>
      </section>

     <section className="main-content mt-5 mb-5 ">
        <div class="container">
          <div className="about-bg bg-remove mb-4">
            <div class="row">
              <div class="col-sm-10 col-md-12 col-lg-2">
                <div className="aboutpict mb-40">
                  <img src="/kulvinder-singh.jpg" class="img-fluid" alt="kulvinder" width="100%" />
                </div>
              </div>
              <div class="col-sm-10 col-md-12 col-lg-10">
                <div className="content-panel mb-40">
                  <h4>
                    Dr. Kulvinder Singh
                    <span className="red d-block">CSE, Associate Professor </span>
                  </h4>
                 
                  <ul className="peronal-detail">
                     <li>
                      <strong>Experience :</strong>
                      <a href="#">12 Years</a>
                    </li>
                    <li>
                      <strong>Phone (Office) :</strong>
                      <a href="tel:1744239155">1744-239155</a>
                    </li>
                    <li>
                      <strong>Specialization  :</strong>
                      <a href="#">Software Testing</a>
                    </li>
                     <li>
                      <strong>Research/Publication:</strong>
                      <a href="#">50 International and 20 National</a>
                    </li>
                     
                    <li>
                      <strong>E-mail :</strong>
                      <a href="mailto:ksingh2015@kuk.ac.in">ksingh2015@kuk.ac.in</a>
                    </li>
                    <li>
                      <strong>Qualification :</strong>
                      <a href="#">                       
                       Ph.D.
                      </a>
                    </li>
                    <li><a href="#" className="btn-red mt-3">Annexure (Complete Resume)</a></li>
                  </ul>
                </div>
              </div>
            </div>

          
          </div>

           <div className="about-bg bg-remove mb-4">
            <div class="row">
              <div class="col-sm-10 col-md-12 col-lg-2">
                <div className="aboutpict mb-40">
                  <img src="/dr-sona.jpg" class="img-fluid" alt="kulvinder"  />
                </div>
              </div>
              <div class="col-sm-10 col-md-12 col-lg-10">
                <div className="content-panel mb-40">
                  <h4>
                    Dr.Sona Malhotra
                    <span className="red d-block">CSE, Associate Professor, UIET, KUK </span>
                  </h4>
                

                  <ul className="peronal-detail">
                     <li>
                      <strong>Experience :</strong>
                      <a href="#">12 Years</a>
                    </li>
                    <li>
                      <strong>Phone (Office) :</strong>
                      <a href="tel:1744239155">1744-239155</a>
                    </li>
                    <li>
                      <strong>Specialization  :</strong>
                      <a href="#">Software Testing</a>
                    </li>
                     <li>
                      <strong>Research/Publication:</strong>
                      <a href="#">20 International and 03 National</a>
                    </li>
                     
                    <li>
                      <strong>E-mail :</strong>
                      <a href="mailto:smalhotra2015@kuk.ac.in">smalhotra2015@kuk.ac.in</a>
                    </li>
                    <li>
                      <strong>Qualification :</strong>
                      <a href="#">                       
                       Ph.D.
                      </a>
                    </li>
                    <li><a href="#" className="btn-red mt-3">Annexure (Complete Resume)</a></li>
                  </ul>
                </div>
              </div>
            </div>          
          </div>


        </div>
      </section>
    </div>
  );
};

export default page;
