// import { motion } from "framer-motion";

// export default function CeoMessage() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
//         {/* Left Side - Photo + Signature + Heading */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, type: "spring" }}
//           viewport={{ once: true }}
//           className="text-center md:text-left"
//         >
//           <img
//             src="/images/ceo.jpg"  //  yaha apne CEO photo ka path daal
//             alt="CEO"
//             className="w-64 h-80 object-cover rounded-2xl shadow-lg mx-auto md:mx-0"
//           />

//           <img
//             src="/images/signature.png" //  yaha CEO signature image ka path daal
//             alt="CEO Signature"
//             className="w-40 mt-6 mx-auto md:mx-0"
//           />

//           <h3 className="text-2xl font-semibold text-gray-800 mt-4">
//             CEO Message
//           </h3>
//         </motion.div>

//         {/* Right Side - Message */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-gray-600 leading-relaxed text-lg">
//             At <span className="font-bold text-blue-600">KonnectHRC</span>, we
//             believe that people are the true foundation of success. Our mission
//             has always been to empower businesses with the right talent while
//             guiding individuals towards opportunities that help them thrive.  
//             <br />
//             <br />
//             Every milestone we achieve is a reflection of our commitment to
//             integrity, transparency, and excellence. As we continue to grow, we
//             remain dedicated to creating meaningful connections that transform
//             careers and businesses alike.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
