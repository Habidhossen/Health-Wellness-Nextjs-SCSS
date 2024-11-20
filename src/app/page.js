import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Service />
      <Reviews />
      <Footer />
    </>
  );
}
