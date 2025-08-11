import { useEffect, useState } from "react";
import HeroWithNavbar from "../components/HeroWithNavbar";
import IntroScreen from "../components/IntroScreen";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("seenIntro");
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleSwipeUp = () => {
    setShowIntro(false);
    sessionStorage.setItem("seenIntro", "true");
  };

  return (
    <div className="relative">
      {showIntro && <IntroScreen onSwipeUp={handleSwipeUp} />}
      {!showIntro && <HeroWithNavbar />}
    </div>
  );
}
