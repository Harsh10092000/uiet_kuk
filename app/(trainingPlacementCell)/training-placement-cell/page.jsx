import React from "react";
import TrainingPlacementContent from "./TrainingPlacementContent";

export const metadata = {
  title: "Training & Placement Cell | UIET KUK",
  description: "Placement records, recruiters, and training activities at UIET Kurukshetra.",
  openGraph: {
    title: "Training & Placement Cell | UIET KUK",
    description: "Placement records, recruiters, and training activities at UIET Kurukshetra.",
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
  return <TrainingPlacementContent />;
};

export default Page;
