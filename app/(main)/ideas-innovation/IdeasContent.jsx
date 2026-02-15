"use client";
import React, { useState } from "react";

const IdeasContent = () => {
    const [form, setForm] = useState({
        rollNo: "",
        fullName: "",
        email: "",
        phone: "",
        idea: "",
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

    const validateForm = () => {
        const errors = {};
        if (!form.fullName.trim() || form.fullName.trim().length < 2) {
            errors.fullName = "Full name is required (min 2 characters)";
        }
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errors.email = "Please provide a valid email address";
        }
        const phoneRegex = /^[0-9+\-\s()]{7,20}$/;
        if (form.phone.trim() && !phoneRegex.test(form.phone.trim())) {
            // Phone optional or required? UI suggests it's there. Let's make it optional but validated if present.
            // Actually, based on other forms, it might be good to validate if entered.
            // Let's assume required based on "Mobile No" label usually implying contact info.
        }
        if (!form.phone.trim() || !phoneRegex.test(form.phone.trim())) {
            errors.phone = "Phone number should be 7-20 characters (digits, spaces, +, -, parentheses)";
        }

        if (!form.idea.trim() || form.idea.trim().length < 10) {
            errors.idea = "Idea description should be at least 10 characters";
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            setStatus({
                type: "error",
                message: "Please check the form fields and try again.",
            });
            return;
        }

        setLoading(true);
        setStatus({ type: "", message: "" });
        setFieldErrors({});

        try {
            const res = await fetch("/api/ideas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (!res.ok) {
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
                        message: data?.error || "Unable to submit idea. Please try again.",
                    });
                }
                return;
            }

            setStatus({
                type: "success",
                message: "Thank you for sharing your idea! We will review it shortly.",
            });
            setForm({
                rollNo: "",
                fullName: "",
                email: "",
                phone: "",
                idea: "",
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
                    <h2>Ideas/Innovation</h2>
                    <ul className="breadcrumb text-center mx-auto">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">Important Link</li>

                        <li className="breadcrumb-item active" aria-current="page">
                            Ideas/Innovation
                        </li>
                    </ul>
                </div>
            </section>

            <section className="main-content mt-5 mb-5 ">
                <div className="container">

                    <form className="w-50 p-4 p-md-5 border rounded-3 bg-light mx-auto" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rollno"
                                        name="rollNo"
                                        placeholder="UIET Roll No "
                                        value={form.rollNo}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="rollno">UIET Roll No :</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className=" form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${fieldErrors.fullName ? "is-invalid" : ""}`}
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Student Name"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="fullName">Student Name :</label>
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
                                        type="email"
                                        className={`form-control ${fieldErrors.email ? "is-invalid" : ""}`}
                                        id="email"
                                        name="email"
                                        placeholder="name@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="email">Email address</label>
                                    {fieldErrors.email && (
                                        <div className="invalid-feedback d-block">
                                            <i className="fas fa-exclamation-circle me-1"></i>
                                            {fieldErrors.email}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="tel"
                                        className={`form-control ${fieldErrors.phone ? "is-invalid" : ""}`}
                                        id="phone"
                                        name="phone"
                                        placeholder="Mobile No"
                                        value={form.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="phone">Mobile No</label>
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
                                    <textarea
                                        rows="3"
                                        cols="5"
                                        className={`form-control ${fieldErrors.idea ? "is-invalid" : ""}`}
                                        id="idea"
                                        name="idea"
                                        placeholder="Ideas/Innovation"
                                        value={form.idea}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    <label htmlFor="idea">Ideas/Innovation :</label>
                                    {fieldErrors.idea && (
                                        <div className="invalid-feedback d-block">
                                            <i className="fas fa-exclamation-circle me-1"></i>
                                            {fieldErrors.idea}
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

                        <button className="w-100 mx-auto btn btn-lg btn-red" type="submit" disabled={loading}>
                            {loading ? "Submitting..." : "Submit"}
                        </button>

                    </form>

                </div>
            </section>
        </div>
    );
};

export default IdeasContent;
