"use client";
import React, { useState } from "react";

const ContactUsContent = () => {
    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: "", message: "" });
        setFieldErrors({});

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form }),
            });
            const data = await res.json();
            if (!res.ok) {
                // Handle field-specific errors
                if (data?.errors && Array.isArray(data.errors)) {
                    const errors = {};
                    data.errors.forEach((err) => {
                        const fieldName = err.path?.[0];
                        if (fieldName) {
                            errors[fieldName] = err.message;
                        }
                    });
                    setFieldErrors(errors);
                    setStatus({
                        type: "error",
                        message: "Please correct the errors below and try again.",
                    });
                } else {
                    setStatus({
                        type: "error",
                        message: data?.error || "Unable to submit form. Please try again.",
                    });
                }
                return;
            }
            setStatus({
                type: "success",
                message: "Thank you! We have received your message. We'll get back to you soon.",
            });
            setForm({
                fullName: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            });
            setFieldErrors({});
        } catch (err) {
            setStatus({
                type: "error",
                message: err.message || "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className="pages-title mb-4">
                <div className="container">
                    <h2>Contact Us</h2>
                    <ul className="breadcrumb text-center mx-auto">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Contact Us
                        </li>
                    </ul>
                </div>
            </section>

            <section className="main-content mt-5 mb-5 ">
                <div className="container">
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
                                <div className="socail-link">
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                                    <a href="#"><i className="fa-solid fa-location-dot"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form
                                className="p-4 p-md-5 border rounded-3 bg-light "
                                onSubmit={handleSubmit}
                            >
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className={`form-control ${fieldErrors.fullName ? "is-invalid" : ""}`}
                                                id="contactFullName"
                                                placeholder="Enter Your Name"
                                                name="fullName"
                                                value={form.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="contactFullName">Full Name :</label>
                                            {fieldErrors.fullName && (
                                                <div className="invalid-feedback d-block">
                                                    <i className="fas fa-exclamation-circle me-1"></i>
                                                    {fieldErrors.fullName}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="tel"
                                                className={`form-control ${fieldErrors.phone ? "is-invalid" : ""}`}
                                                id="contactPhone"
                                                placeholder="Mobile No"
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="contactPhone">Mobile No</label>
                                            {fieldErrors.phone && (
                                                <div className="invalid-feedback d-block">
                                                    <i className="fas fa-exclamation-circle me-1"></i>
                                                    {fieldErrors.phone}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className={`form-control ${fieldErrors.email ? "is-invalid" : ""}`}
                                                id="contactEmail"
                                                placeholder="name@example.com"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="contactEmail">Email address</label>
                                            {fieldErrors.email && (
                                                <div className="invalid-feedback d-block">
                                                    <i className="fas fa-exclamation-circle me-1"></i>
                                                    {fieldErrors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <input
                                                type="text"
                                                className={`form-control ${fieldErrors.subject ? "is-invalid" : ""}`}
                                                id="contactSubject"
                                                placeholder="Subject"
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="contactSubject">Subject</label>
                                            {fieldErrors.subject && (
                                                <div className="invalid-feedback d-block">
                                                    <i className="fas fa-exclamation-circle me-1"></i>
                                                    {fieldErrors.subject}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-floating mb-3">
                                            <textarea
                                                rows="3"
                                                cols="5"
                                                className={`form-control ${fieldErrors.message ? "is-invalid" : ""}`}
                                                id="contactMessage"
                                                placeholder="Message"
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                            <label htmlFor="contactMessage">
                                                Message
                                            </label>
                                            {fieldErrors.message && (
                                                <div className="invalid-feedback d-block">
                                                    <i className="fas fa-exclamation-circle me-1"></i>
                                                    {fieldErrors.message}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {status.message && (
                                    <div
                                        className={`alert ${status.type === "success" ? "alert-success" : "alert-danger"
                                            } d-flex align-items-center`}
                                        role="alert"
                                    >
                                        <i
                                            className={`fas ${status.type === "success"
                                                ? "fa-check-circle"
                                                : "fa-exclamation-triangle"
                                                } me-2`}
                                        ></i>
                                        <span>{status.message}</span>
                                    </div>
                                )}

                                <button className="w-100 mx-auto btn btn-lg btn-red" type="submit">
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactUsContent;
