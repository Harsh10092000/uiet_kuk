import React from "react";

const page = () => {
  return (
    <div>
      <section className="pages-title mb-4">
        <div className="container">
          <h2>Roll of Honor – Directors UIET</h2>
          <ul class="breadcrumb text-center mx-auto">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">Administration</li>

            <li class="breadcrumb-item active" aria-current="page">
              Director list
            </li>
          </ul>
        </div>
      </section>

      <section className="main-content mt-5 mb-5 ">
        <div class="container">
          <div class="table-responsive mb-5  rounded">
            <table class="table text-center">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Year</th>
                  <th>Photograph</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-5">Prof. P. J. George</td>
                  <td className="pt-5">16-Aug-2004 to 17-Aug-2006</td>
                  <td>
                    <img
                      src="/pj-george.jpg"
                      alt="pict"
                      className="border border-light-subtle p-1"
                    />
                  </td>
                </tr>

                <tr className="table-light">
                  <td className="pt-5">Prof. O. P. Bajpai</td>
                  <td className="pt-5">18-Aug-2006 to 30-June-2010</td>
                  <td>
                    <img
                      src="/op-bajpai.jpg"
                      alt="pict"
                      className="border border-light-subtle p-1"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="pt-5">Prof. Dinesh Agarwal</td>
                  <td className="pt-5">10-Aug-2010 to 13-Jan-2015</td>
                  <td>
                    <img
                      src="/dinesh-agarwal.jpg"
                      alt="pict"
                      className="border border-light-subtle p-1"
                    />
                  </td>
                </tr>

                <tr className="table-light">
                  <td className="pt-5">Prof. Sunil Dhingra</td>
                  <td className="pt-5">14-Jan-2015 to 20-May-2016</td>
                  <td>
                    <img
                      src="/sunildhingra.jpg"
                      alt="pict"
                      className="border border-light-subtle p-1"
                    />
                  </td>
                </tr>

                <tr>
                  <td className="pt-5">Prof. C.C. Tripathi</td>
                  <td className="pt-5">20-May-2016 to 05-May-2022</td>
                  <td>
                    <img
                      src="/tripathi.jpg"
                      alt="pict"
                      className="border border-light-subtle p-1"
                    />
                  </td>
                </tr>

                <tr className="table-light">
                  <td className="pt-5">Prof. Sunil Dhingra</td>
                  <td className="pt-5">Present</td>
                  <td>
                    <img
                      src="/sunildhingra.jpg"
                      alt="pict"
                      className="border border-light-subtle p-1"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
