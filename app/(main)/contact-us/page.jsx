import React from "react";

const page = () => {
  return (
    <div>
      <section className="pages-title mb-4">
        <div className="container">
          <h2>Contact Us</h2>
          <ul class="breadcrumb text-center mx-auto">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ul>
        </div>
      </section>

      <section className="main-content mt-5 mb-5 ">
        <div class="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="contact-details">
                        <h3>Contact Details</h3>
                        <ul>
                            <li><strong>Address:</strong> University Institute of Engineering and Technology, 
                                      Kurukshetra University Pehowa Road, University,
                                            Haryana 136119</li>
                                            <li><strong>Email:</strong> <a href="mailto:director.uiet@kuk.ac.in">director.uiet@kuk.ac.in</a></li>
                                            <li><strong>Phone no:</strong> <a href="tel:01744-239155">01744-239155</a></li>

                                            
                        </ul>
                        <div class="socail-link"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-x-twitter"></i></a><a href="#"><i class="fa-solid fa-location-dot"></i></a></div>
                    </div>
                </div>
                <div className="col-md-6">
                       <form className="p-4 p-md-5 border rounded-3 bg-light ">
            <div className="row">
            
              <div className="col-md-6">
                <div className=" form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Enter Your Name"
                  />
                  <label for="floatingInput">Full Name :</label>
                </div>
              </div>
               <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileno"
                    placeholder="Mobile No"
                  />
                  <label for="floatingPassword">Mobile No</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
              </div>
             
              <div className="col-md-12">
                <div className="form-floating mb-3">
                  <textarea
                    rows="3"
                    cols="5"
                    className="form-control"
                    id="feedback"
                    placeholder="Message"
                  ></textarea>
                  <label for="floatingPassword">
                    Message
                  </label>
                </div>
              </div>
            </div>

            <button className="w-100 mx-auto btn btn-lg btn-red" type="submit">
              Submit
            </button>
          </form>
                </div>
            </div>
       
        </div>
      </section>
    </div>
  );
};

export default page;
