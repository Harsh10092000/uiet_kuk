import React from "react";
import FeedbackContent from "./FeedbackContent";

export const metadata = {
  title: "Feedback / Grievance / Suggestion | UIET KUK",
  description: "Submit your feedback, grievance, or suggestions to UIET Kurukshetra.",
  openGraph: {
    title: "Feedback / Grievance / Suggestion | UIET KUK",
    description: "Submit your feedback, grievance, or suggestions to UIET Kurukshetra.",
    url: "https://uiet.kuk.ac.in/feedback",
    siteName: "UIET Kurukshetra",
    locale: "en_IN",
    type: "website",
  },
};

const Page = () => {
  return <FeedbackContent />;
};

export default Page;
