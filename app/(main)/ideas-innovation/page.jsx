import React from "react";
import IdeasContent from "./IdeasContent";

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
  return <IdeasContent />;
};

export default Page;
