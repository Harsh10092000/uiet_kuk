"use client";
import React, { useState } from "react";

const FeedbackContent = () => {
    const [form, setForm] = useState({
        rollNo: "",
        fullName: "",
        email: "",
        phone: "",
        program: "",
        rating: "5",
        comments: "",
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
        if (form.program.trim() && form.program.trim().length < 2) {
            errors.program = "Program name should be at least 2 characters";
        }
        if (!form.comments.trim() || form.comments.trim().length < 10) {
            errors.comments = "Comments should be at least 10 characters";
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
            const payload = {
                fullName: form.fullName,
                email: form.email,
                program: form.program || form.rollNo || "Not specified",
                rating: Number(form.rating),
                comments: `Roll No: ${form.rollNo || "N/A"}\nPhone: ${form.phone || "N/A"
                    }\n\nFeedback:\n${form.comments}`,
            };

            const res = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
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
                        message: data?.error || "Unable to submit feedback. Please try again.",
                    });
                }
                return;
            }

            setStatus({
                type: "success",
                message: "Thank you for your feedback! We appreciate your time and will review your suggestions.",
            });
            setForm({
                rollNo: "",
                fullName: "",
                email: "",
                phone: "",
                program: "",
                rating: "5",
                comments: "",
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
                    <h2>Feedback / Grievance / Suggestion</h2>
                    <ul className="breadcrumb text-center mx-auto">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item">Important Link</li>

                        <li className="breadcrumb-item active" aria-current="page">
                            Feedback / Grievance / Suggestion
                        </li>
                    </ul>
                </div>
            </section>

            <section className="main-content mt-5 mb-5 ">
                <div className="container">

                    <form
                        className="w-50 p-4 p-md-5 border rounded-3 bg-light mx-auto"
                        onSubmit={handleSubmit}
                    >
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
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${fieldErrors.fullName ? "is-invalid" : ""}`}
                                        id="studentName"
                                        name="fullName"
                                        placeholder="Student Name"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="studentName">Student Name :</label>
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
                                        id="feedbackEmail"
                                        name="email"
                                        placeholder="name@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label htmlFor="feedbackEmail">Email address</label>
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
                                        className="form-control"
                                        id="feedbackPhone"
                                        name="phone"
                                        placeholder="Mobile No"
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="feedbackPhone">Mobile No</label>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${fieldErrors.program ? "is-invalid" : ""}`}
                                        id="feedbackProgram"
                                        name="program"
                                        placeholder="Program / Course"
                                        value={form.program}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="feedbackProgram">Program / Course (optional)</label>
                                    {fieldErrors.program && (
                                        <div className="invalid-feedback d-block">
                                            <i className="fas fa-exclamation-circle me-1"></i>
                                            {fieldErrors.program}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-label">Rating</label>
                                    <select
                                        className="form-select"
                                        name="rating"
                                        value={form.rating}
                                        onChange={handleChange}
                                    >
                                        {[5, 4, 3, 2, 1].map((value) => (
                                            <option value={value} key={value}>
                                                {value} - {value === 5 ? "Excellent" : value === 1 ? "Poor" : ""}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-floating mb-3">
                                    <textarea
                                        rows="3"
                                        cols="5"
                                        className={`form-control ${fieldErrors.comments ? "is-invalid" : ""}`}
                                        id="feedbackComments"
                                        name="comments"
                                        placeholder="Feedback/ Grievance/ Suggestion :"
                                        value={form.comments}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    <label htmlFor="feedbackComments">Feedback/ Grievance/ Suggestion :</label>
                                    {fieldErrors.comments && (
                                        <div className="invalid-feedback d-block">
                                            <i className="fas fa-exclamation-circle me-1"></i>
                                            {fieldErrors.comments}
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

export default FeedbackContent;
