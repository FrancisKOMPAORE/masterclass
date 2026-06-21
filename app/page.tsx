import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import VideoSection from "./components/VideoSection";
import Solution from "./components/Solution";
import Results from "./components/Results";
import Program from "./components/Program";
import Trainer from "./components/Trainer";
import Inscription from "./components/Inscription";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <VideoSection />
        <Program />
        <Trainer />
        <Inscription />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
