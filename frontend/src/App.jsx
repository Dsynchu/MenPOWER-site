import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CompanyProfile from "./components/CompanyProfile";
import Services from "./components/Services";
import Jobs from "./components/Jobs";
import JobFilter from "./components/JobFilter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Israel from "./components/Israel";
import AboutPage from "./pages/AboutPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import ServicesPage from "./pages/ServicesPage";
import IntroScreen from "./components/IntroScreen";
import JobPage from "./pages/JobPage";
import ContactPage from "./pages/ContactPage";

function HomePageWrapper() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("introSeen");
    if (!alreadySeen) {
      setShowIntro(true);
      sessionStorage.setItem("introSeen", "true");
    }
  }, []);

  if (showIntro) {
    return (
      <IntroScreen
        onFinish={() => {
          setShowIntro(false);
          setTimeout(() => window.scrollTo(0, 0), 50);
        }}
      />
    );
  }

  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <Reveal direction="up" delay={0.2}>
        <CompanyProfile />
      </Reveal>
      <Reveal direction="left" delay={0.3}>
        <Services />
      </Reveal>
      <Reveal direction="right" delay={0.3}>
        <Jobs />
      </Reveal>
      <Reveal direction="up" delay={0.2}>
        <JobFilter />
      </Reveal>
      <Reveal direction="up" delay={0.2}>
        <FAQ />
      </Reveal>
      <Reveal direction="up" delay={0.2}>
        <Blog />
      </Reveal>
      <Reveal direction="up" delay={0.2}>
        <Contact />
      </Reveal>
      <Reveal direction="up" delay={0.2}>
        <Clients />
      </Reveal>
      <Reveal direction="up" delay={0.2}>
        <Testimonials />
      </Reveal>
      <Reveal direction="up" delay={0.2}>
        <Newsletter />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageWrapper />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/company-profile" element={<CompanyProfilePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/israel" element={<Israel />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
