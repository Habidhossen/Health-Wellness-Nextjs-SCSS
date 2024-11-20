import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Service />
    </>
  );
}
