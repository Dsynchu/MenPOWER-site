import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function IntroScreen({ onFinish }) {
  const [isSwiped, setIsSwiped] = useState(false);

  const handleSwipe = (_, info) => {
    if (info.offset.y < -100) {
      setIsSwiped(true);
      setTimeout(onFinish, 500);
    }
  };

  return (
    <AnimatePresence>
      {!isSwiped && (
        <motion.div
          className="fixed inset-0 text-white z-[9999] flex items-center justify-center px-6"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleSwipe}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
              alt="Dubai Skyline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          {/* Text content */}
          <div className="relative z-10 text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Welcome to <span className="text-[#00f6ff]">KonnectHRC</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
              Your trusted partner for recruitment in{" "}
              <span className="text-white font-semibold">Dubai</span>,{" "}
              <span className="text-white font-semibold">Abu Dhabi</span> &{" "}
              <span className="text-white font-semibold">GCC</span>.
            </p>
            <p className="mt-10 text-sm md:text-lg text-gray-300 animate-bounce">
              ⬆️ Swipe up to unlock
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
