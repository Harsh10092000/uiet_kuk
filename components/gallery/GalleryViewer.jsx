"use client";
import React, { useState } from "react";

const GalleryViewer = ({ sections, imageBaseUrl }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openFramebuffer = (imgUrl) => {
        setSelectedImage(imgUrl);
        document.body.style.overflow = "hidden";
    };

    const closeFramebuffer = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            {sections.length > 0 ? (
                sections.map((section, index) => (
                    <div key={section.id}>
                        {section.is_general == 1 ? (
                            <section
                                className="recruiters-section"
                                id={
                                    section.slug === "general"
                                        ? "uiet-patners"
                                        : `section-${section.slug}`
                                }
                            >
                                <div className="container">
                                    {/* {section.sub_heading && (
                                        <div className="main-title text-center mb-4">
                                            <h4>{section.sub_heading}</h4>
                                        </div>
                                    )} */}
                                    <div className="row text-center">
                                        {section.images.map((img) => (
                                            <div key={img.id} className="col-md-4 mt-3">
                                                <div
                                                    className="uiet-patners border position-relative overflow-hidden gallery-item"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        openFramebuffer(
                                                            `${imageBaseUrl}${img.stored_filename}`
                                                        )
                                                    }
                                                >
                                                    <img
                                                        src={`${imageBaseUrl}${img.stored_filename}`}
                                                        alt={img.alt_text || "Gallery Image"}
                                                        className="img-fluid rounded"
                                                        style={{
                                                            width: "100%",
                                                            height: "250px",
                                                            objectFit: "cover",
                                                            transition: "transform 0.5s ease",
                                                        }}
                                                    />
                                                    <div
                                                        className="hover-overlay"
                                                        style={{
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            backgroundColor: "rgba(0,0,0,0.2)",
                                                            display: "flex",
                                                            alignItems: "flex-end",
                                                            justifyContent: "center",
                                                            paddingBottom: "20px",
                                                            opacity: 0,
                                                            transition: "all 0.3s ease",
                                                        }}
                                                    >
                                                        <span
                                                            className="bg-white text-dark px-4 py-2 rounded-pill shadow d-flex align-items-center gap-2"
                                                            style={{
                                                                transform: 'translateY(10px)',
                                                                transition: 'transform 0.3s ease',
                                                                fontSize: '0.9rem',
                                                                fontWeight: '500'
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-magnifying-glass text-secondary"></i>
                                                            Click to Enlarge
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <section
                                className={`py-5 ${index % 2 !== 0 ? "bg-light" : ""}`}
                                id={`section-${section.slug}`}
                            >
                                <div className="container text-center">
                                    <div className="main-title text-center mb-5">
                                        <h2>
                                            <span className="red d-block">{section.heading}</span>{" "}
                                            {section.sub_heading}
                                        </h2>
                                    </div>

                                    <div className="row">
                                        {section.images.map((img) => (
                                            <div key={img.id} className="col-md-4 mt-4">
                                                <div
                                                    className="hub-gallery-box position-relative overflow-hidden gallery-item"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        openFramebuffer(
                                                            `${imageBaseUrl}${img.stored_filename}`
                                                        )
                                                    }
                                                >
                                                    <img
                                                        src={`${imageBaseUrl}${img.stored_filename}`}
                                                        alt={img.alt_text || "Gallery Image"}
                                                        className="img-fluid rounded"
                                                        style={{
                                                            width: "100%",
                                                            height: "250px",
                                                            objectFit: "cover",
                                                            transition: "transform 0.5s ease",
                                                        }}
                                                    />
                                                    <div
                                                        className="hover-overlay"
                                                        style={{
                                                            position: "absolute",
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            backgroundColor: "rgba(0,0,0,0.2)",
                                                            display: "flex",
                                                            alignItems: "flex-end",
                                                            justifyContent: "center",
                                                            paddingBottom: "20px",
                                                            opacity: 0,
                                                            transition: "all 0.3s ease",
                                                        }}
                                                    >
                                                        <span
                                                            className="bg-white text-dark px-4 py-2 rounded-pill shadow d-flex align-items-center gap-2"
                                                            style={{
                                                                transform: 'translateY(10px)',
                                                                transition: 'transform 0.3s ease',
                                                                fontSize: '0.9rem',
                                                                fontWeight: '500'
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-magnifying-glass text-secondary"></i>
                                                            Click to Enlarge
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>
                ))
            ) : (
                <div className="container py-5 text-center">
                    <p>No gallery images available at the moment.</p>
                </div>
            )}

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="lightbox-overlay"
                    onClick={closeFramebuffer}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        animation: "fadeIn 0.3s ease-out",
                    }}
                >
                    <div
                        className="lightbox-content position-relative"
                        onClick={(e) => e.stopPropagation()}
                        style={{ maxWidth: "90%", maxHeight: "90vh" }}
                    >
                        <button
                            onClick={closeFramebuffer}
                            className="btn btn-close btn-close-white position-absolute"
                            style={{
                                top: "-40px",
                                right: "-40px",
                                zIndex: 10000,
                                opacity: 1,
                            }}
                        ></button>
                        <img
                            src={selectedImage}
                            alt="Enlarged"
                            className="img-fluid rounded shadow-lg"
                            style={{ maxHeight: "85vh", objectFit: "contain" }}
                        />
                    </div>
                </div>
            )}

            {/* Global Styles for Hover Effects */}
            <style jsx global>{`
        .gallery-item:hover .hover-overlay {
          opacity: 1 !important;
        }
        .gallery-item:hover .hover-overlay span {
          transform: translateY(0) !important;
        }
        .gallery-item:hover img {
          transform: scale(1.05) !important;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
        </>
    );
};

export default GalleryViewer;
