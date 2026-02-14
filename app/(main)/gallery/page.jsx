/* eslint-disable @next/next/no-img-element */
import React from "react";
import pool from "@/app/libs/mysql";
import { unstable_noStore as noStore } from 'next/cache';
import GalleryViewer from "@/components/gallery/GalleryViewer";

export const dynamic = 'force-dynamic';

const getData = async () => {
  noStore();
  try {
    const db = await pool;
    const [sections] = await db.query(
      "SELECT * FROM gallery_sections WHERE is_active = 1 ORDER BY display_order ASC"
    );

    if (!sections || sections.length === 0) return [];

    const sectionIds = sections.map(s => s.id);
    const [images] = await db.query(
      "SELECT * FROM gallery_images WHERE section_id IN (?) AND is_active = 1 ORDER BY display_order ASC",
      [sectionIds]
    );

    return sections.map(section => ({
      ...section,
      images: images.filter(img => img.section_id === section.id),
    }));
  } catch (error) {
    console.error("Error fetching gallery data:", error);
    return [];
  }
};

export const metadata = {
  title: "Photo Gallery | UIET KUK",
  description: "Glimpses of campus life, events, and activities at UIET Kurukshetra.",
  openGraph: {
    title: "Photo Gallery | UIET KUK",
    description: "Glimpses of campus life, events, and activities at UIET Kurukshetra.",
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
  const sections = await getData();
  const IMAGE_BASE_URL = `${process.env.BACKEND_URL}/uploads/gallery/`;

  return (
    <div>
      <section className="pages-title mb-4">
        <div className="container">
          <h2>Our Gallery</h2>
        </div>
      </section>

      <GalleryViewer sections={sections} imageBaseUrl={IMAGE_BASE_URL} />
    </div>
  );
};

export default Page;
