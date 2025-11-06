import Header from "@/components/departments/header/Header";
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
