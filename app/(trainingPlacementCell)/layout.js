import Header from "@/components/trainingPlacementCell/header/Header";
import Footer from "@/components/common/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
