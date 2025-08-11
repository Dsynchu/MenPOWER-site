import { motion } from "framer-motion";

export default function Reveal({ children, direction = "up", delay = 0 }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",   // spring animation
        stiffness: 70,    // natural speed
        damping: 18,      // smooth stop
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // reveal on scroll
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
