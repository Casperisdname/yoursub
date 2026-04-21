import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import About from "@/component/About";
import Why from "@/component/Why";
import Services from "@/component/Services";
import Partner from "@/component/Partner";
import Team from "@/component/Team";

export default function Home() {
  return (
    <div>
      <div className="bg-blue-50">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Why />
      <Services />
      <Partner />

      <Team />
    </div>
  );
}
