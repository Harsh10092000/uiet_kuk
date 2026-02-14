import React from "react";

export const metadata = {
  title: "Ideas & Innovation | UIET KUK",
  description: "Fostering innovation and entrepreneurship at UIET Kurukshetra.",
  openGraph: {
    title: "Ideas & Innovation | UIET KUK",
    description: "Fostering innovation and entrepreneurship at UIET Kurukshetra.",
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
          <h2>Ideas/Innovation</h2>
          <ul class="breadcrumb text-center mx-auto">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">Important Link</li>

            <li class="breadcrumb-item active" aria-current="page">
              Ideas/Innovation
            </li>
          </ul>
        </div>
      </section>

      <section className="main-content mt-5 mb-5 ">
        <div class="container">

          <form className="w-50 p-4 p-md-5 border rounded-3 bg-light mx-auto">
            <div className="row">
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="tel" className="form-control" id="rollno" placeholder="UIET Roll No " />
                  <label for="floatingInput">UIET Roll No :</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className=" form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="Student Name" />
                  <label for="floatingInput">Student Name :</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input type="tel" className="form-control" id="mobileno" placeholder="Mobile No" />
                  <label for="floatingPassword">Mobile No</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating mb-3">
                  <textarea rows="3" cols="5" className="form-control" id="feedback" placeholder="Ideas/Innovation"></textarea>
                  <label for="floatingPassword">Ideas/Innovation :</label>
                </div>
              </div>
            </div>

            <button className="w-100 mx-auto btn btn-lg btn-red" type="submit">Submit</button>

          </form>

        </div>
      </section>
    </div>
  );
};

export default Page;
