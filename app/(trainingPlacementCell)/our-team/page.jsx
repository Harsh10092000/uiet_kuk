
import React from "react";

export const metadata = {
  title: "Placement Team | UIET KUK",
  description: "Meet the Training and Placement team at UIET Kurukshetra.",
  openGraph: {
    title: "Placement Team | UIET KUK",
    description: "Meet the Training and Placement team at UIET Kurukshetra.",
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

const Page = async () => {
  return (
    <div>
      <section className="pages-title mb-4">
        <div className="container">
          <h2>Our Team</h2>
        </div>
      </section>

      <section className="main-content mt-5 mb-5 ">
        <div class="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-bg bg-remove mb-4">
                <div class="row">
                  <div class="col-sm-10 col-md-12 col-lg-3">
                    <div className="aboutpict mb-40">
                      <img
                        src="/drnikhil.png"
                        class="img-fluid"
                        alt="drnikhil"
                        width="100%"
                      />
                    </div>
                  </div>
                  <div class="col-sm-10 col-md-12 col-lg-9">
                    <div className="content-panel mb-40">
                      <h4>
                        Dr. Nikhil Kumar Marriwala
                        <span className="red d-block">
                          Training & Placement Officer{" "}
                        </span>
                      </h4>
                      <ul className="peronal-detail">
                        <li>
                          <strong>Phone No :</strong>
                          <a href="tel:9416668482">9416668482</a>
                        </li>
                        <li>
                          <strong>E-mail :</strong>
                          <a href="mailto:nmarriwala@kuk.ac.in">
                            nmarriwala@kuk.ac.in
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-bg bg-remove mb-4">
                <div class="row">
                  <div class="col-sm-10 col-md-12 col-lg-3">
                    <div className="aboutpict mb-40">
                      <img
                        src="/drsanjeev.jpg"
                        class="img-fluid"
                        alt="drsanjeev"
                        width="100%"
                      />
                    </div>
                  </div>
                  <div class="col-sm-10 col-md-12 col-lg-9">
                    <div className="content-panel mb-40">
                      <h4>
                        Dr. Sanjeev Ahuja
                        <span className="red d-block">
                          Training & Placement Officer{" "}
                        </span>
                      </h4>

                      <ul className="peronal-detail">
                        <li>
                          <strong>Phone No :</strong>
                          <a href="tel:+919991385634">+91 99913 85634</a>
                        </li>

                        <li>
                          <strong>E-mail :</strong>
                          <a href="mailto:nmarriwala@kuk.ac.in">
                            nmarriwala@kuk.ac.in
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="about-bg bg-remove mb-4">
                <div class="row">
                  <div class="col-sm-10 col-md-12 col-lg-3">
                    <div className="aboutpict mb-40">
                      <img
                        src="/DrSunilDhingra.jpg"
                        class="img-fluid"
                        alt="drnikhil"
                        width="100%"
                      />
                    </div>
                  </div>
                  <div class="col-sm-10 col-md-12 col-lg-9">
                    <div className="content-panel mb-40">
                      <h4>
                        Dr. Sunil Dhingra
                        <span className="red d-block">
                          Training & Placement Officer{" "}
                        </span>
                      </h4>
                      <ul className="peronal-detail">
                        <li>
                          <strong>Phone No :</strong>
                          <a href="tel:9541653750">+91 95416 53750</a>
                        </li>
                        <li>
                          <strong>E-mail :</strong>
                          <a href="mailto:sdhingra2020@gmail.com">
                            sdhingra2020@gmail.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-bg bg-remove mb-4">
                <div class="row">
                  <div class="col-sm-10 col-md-12 col-lg-3">
                    <div className="aboutpict mb-40">
                      <img
                        src="/ajay_jangra.jpg"
                        class="img-fluid"
                        alt="ajay_jangra"
                        width="100%"
                      />
                    </div>
                  </div>
                  <div class="col-sm-10 col-md-12 col-lg-9">
                    <div className="content-panel mb-40">
                      <h4>
                        Mr. Ajay Jangra
                        <span className="red d-block">
                          Training & Placement Officer{" "}
                        </span>
                      </h4>

                      <ul className="peronal-detail">
                        <li>
                          <strong>Phone No :</strong>
                          <a href="tel:+917082113149">+91 70821 13149</a>
                        </li>

                        <li>
                          <strong>E-mail :</strong>
                          <a href="mailto:er_jangra@yahoo.co.in">
                            er_jangra@yahoo.co.in
                          </a>
                        </li>
                      </ul>
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

export default Page;
