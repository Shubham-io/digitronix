import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Brands from "./components/Brands";
import Banner from "./components/Banner";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <Navbar />
      <HeroSection />
      <Stats />
      <About />
      <Services />
      <Brands />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
