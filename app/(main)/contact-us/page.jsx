import React from "react";
import ContactUsContent from "./ContactUsContent";

export const metadata = {
  title: "Contact Us | UIET KUK",
  description: "Get in touch with UIET Kurukshetra. Contact details for administration, departments, and general inquiries.",
  openGraph: {
    title: "Contact Us | UIET KUK",
    description: "Get in touch with UIET Kurukshetra. Contact details for administration, departments, and general inquiries.",
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
  return <ContactUsContent />;
};

export default Page;
