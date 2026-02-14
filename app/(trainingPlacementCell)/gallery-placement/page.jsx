
import React from "react";

export const metadata = {
  title: "Placement Gallery | UIET KUK",
  description: "Photos of placement drives and placed students at UIET KUK.",
  openGraph: {
    title: "Placement Gallery | UIET KUK",
    description: "Photos of placement drives and placed students at UIET KUK.",
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
          <h2>Our Gallery</h2>
        </div>
      </section>

      <section class="recruiters-section" id="uiet-patners">
        <div class="container">

          <div class="row text-center">
            <div className="col-md-4">
              <div className="uiet-patners border p-3">
                <img src="/uiet-gallery/gallery-1.jpg" alt="uiet-logo" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-4">
              <div className="uiet-patners border p-3">
                <img src="/uiet-gallery/gallery-2.jpg" alt="uiet-logo" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-4">
              <div className="uiet-patners border p-3">
                <img src="/uiet-gallery/gallery-3.jpg" alt="uiet-logo" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-4 mt-3">
              <div className="uiet-patners border p-3">
                <img src="/uiet-gallery/gallery-4.jpg" alt="uiet-logo" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-4 mt-3">
              <div className="uiet-patners border p-3">
                <img src="/uiet-gallery/gallery-5.jpg" alt="uiet-logo" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-4 mt-3">
              <div className="uiet-patners border p-3">
                <img src="/uiet-gallery/gallery-6.jpg" alt="uiet-logo" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-4 mt-3">
              <div className="uiet-patners border p-3">
                <img src="/uiet-gallery/gallery-7.jpg" alt="uiet-logo" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-4 mt-3">
              <div className="uiet-patners border p-3">
                <img src="/uiet-gallery/gallery-8.jpg" alt="uiet-logo" className="img-fluid" />
              </div>
            </div>

            <div className="col-md-4 mt-3">
              <div className="uiet-patners border p-3">
                <img src="/uiet-gallery/gallery-9.jpg" alt="uiet-logo" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Page;
