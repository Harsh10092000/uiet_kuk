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

          <div className="faculty mt-5">
            {/* <h2 className="mb-4 text-center">Faculty</h2> */}
            <div class="row">
              <div class="col-sm-3">
                <div class="card border-0">
                  <img
                    src="/kulvinder-singh.jpg"
                    alt="profile"
                    className="img-fluid"
                  />
                  <div class="card-body border card-info">
                    <h5 class="card-title text-dark">Dr. Kulvinder Singh</h5>
                    <div className="info-text">
                      <p class="card-text text-secondary">
                        Associate Professor, (Computer Science & Engg.
                        Department)
                      </p>
                      <a href="#">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="card border-0">
                  <img src="/dr-sona.jpg" alt="profile" className="img-fluid" />
                  <div class="card-body border card-info">
                    <h5 class="card-title text-dark">Dr.Sona Malhotra</h5>
                    <div className="info-text">
                      <p class="card-text text-secondary">
                        Associate Professor,(Computer Science & Engg.
                        Department)
                      </p>
                      <a href="#">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card border-0">
                  <img src="/sanjeev.jpg" alt="profile" className="img-fluid" />
                  <div class="card-body border card-info">
                    <h5 class="card-title text-dark">Dr.Sanjeev Dhawan</h5>
                    <div className="info-text">
                      <p class="card-text text-secondary">
                        Associate Professor,(Computer Science & Engg.
                        Department)
                      </p>
                      <a href="#">
                         <i class="fa-solid fa-arrow-right-to-bracket"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-3">
                <div class="card border-0">
                  <img src="/karambir.jpg" alt="profile" />
                  <div class="card-body border card-info">
                    <h5 class="card-title text-dark font-weight-normal">Dr.Karambir Bidhan</h5>
                    <div className="info-text">
                      <p class="card-text text-secondary">
                        Associate Professor,(Computer Science & Engg.
                        Department)
                      </p>
                      <a href="#">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>
                      </a>
                    </div>
                  </div>
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
