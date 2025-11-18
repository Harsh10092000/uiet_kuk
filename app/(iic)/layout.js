import Header from "@/components/iic/header/Header";
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
