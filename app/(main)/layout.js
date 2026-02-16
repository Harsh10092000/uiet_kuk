import { Suspense } from "react";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      {children}
      <Footer />
    </>
  );
}
