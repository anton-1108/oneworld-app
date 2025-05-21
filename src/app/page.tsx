import Image from "next/image";
import PageLayout from "./_components/layout/page-layout";
import Hero from "./_components/home/hero";
import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";
import FeaturesSection from "./_components/home/features-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex-1">
        <Hero />
      </div>
      <FeaturesSection />
      <Footer />
    </div>
  );
}
