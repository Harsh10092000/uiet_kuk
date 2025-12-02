import AboutSection from "@/components/home/AboutSection";
import BulletinWrapper from "@/components/home/BulletinWrapper";
import CounterSection from "@/components/home/CounterSection";
import CoursesSection from "@/components/home/CoursesSection";
import HeroCarousel from "@/components/home/HeroCarousel";
import LatestNewsSection from "@/components/home/LatestNewsSection";
import TourSection from "@/components/home/TourSection";



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
