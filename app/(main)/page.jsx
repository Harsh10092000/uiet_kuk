import AboutSection from "@/components/home/AboutSection";
import BulletinWrapper from "@/components/home/BulletinWrapper";
import CounterSection from "@/components/home/CounterSection";
import CoursesSection from "@/components/home/CoursesSection";
import HeroCarousel from "@/components/home/HeroCarousel";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import TourSection from "@/components/home/TourSection";



export const metadata = {
  title: "UIET Kurukshetra University | Best Engineering College in Haryana",
  description: "Official website of University Institute of Engineering and Technology (UIET), Kurukshetra University. Offering top-tier engineering education, research, and placements.",
  keywords: ["UIET KUK", "Kurukshetra University Engineering", "Best Engineering College Haryana", "UIET Admission", "UIET Placements"],
  openGraph: {
    title: "UIET Kurukshetra University | Best Engineering College in Haryana",
    description: "Official website of University Institute of Engineering and Technology (UIET), Kurukshetra University. Offering top-tier engineering education, research, and placements.",
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

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <BulletinWrapper />
      <AboutSection />
      <TourSection />
      <CoursesSection />
      <LatestNewsSection />
      <CounterSection />
    </>
  );
}
