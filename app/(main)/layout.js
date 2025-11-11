import Header from "@/components/common/header/Header";
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
