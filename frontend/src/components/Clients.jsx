import { motion } from "framer-motion";

const clients = [
  {
    name: "Al Maha Catering",
    logo: "https://www.almahacatering.ae/wp-content/uploads/2023/01/ALMAHACATERING-VERTICAL-WHITE.png",
  },
  {
    name: "Dubai Investment Limited",
    logo: "https://www.dubaiinvestments.com/media/iqif5wdj/di-logo.png",
  },
  {
    name: "BCC International Group",
    logo: "https://www.bccgroupinternational.com/assets/images/bcc-logo-all/bcc-international-gold.svg",
  },
  {
    name: "World Star Holding",
    logo: "https://www.manpowersupply.ae/wp-content/uploads/2022/03/LOGO-H-WSH-1.png",
  },
  {
    name: "Al Jasar HR Consultancy",
    logo: "https://aljasarhr.com/image/logo.png",
  },
  {
    name: "AYADI",
    logo: "https://ayadi.ae/wp-content/uploads/2023/10/cropped-Gold-PNG2-2048x584.png",
  },
  {
    name: "Smooth Manpower",
    logo: "https://www.smoothmanpower.com/wp-content/uploads/2023/08/smooth_website.png",
  },
  {
    name: "MBM Gulf Electrotechnical LLC",
    logo: "https://www.mbmdubai.com/wp-content/uploads/2018/01/logo-m-1.png",
  },
  {
    name: "MKO Facilities Management",
    logo: "https://mkofm.com/wp-content/uploads/2024/01/mkofm-logo.webp",
  },
  {
    name: "Contech",
    logo: "https://static.wixstatic.com/media/aa2373_44cab5bd482b4aac92c932c129a84eae~mv2.png/v1/fill/w_594,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Contech%20Dubai%20-%20UAE.png",
  },
  {
    name: "Maico Gulf",
    logo: "https://maicogulf.com/wp-content/uploads/2020/06/logo-icon.png",
  },
  {
    name: "Vertis Electromechanical Services LLC",
    logo: "https://www.vertisservices.com/images/logo.jpg",
  },
  {
    name: "Ontime Group",
    logo: "https://www.ontimegroup.com/logo-white.png",
  },
  {
    name: "Hira Industry",
    logo: "https://rhira.com/wp-content/uploads/2019/03/rhira-logo.png",
  },
  {
    name: "Dussmann Facilities Management",
    logo: "https://www.dussmann.ae/fileadmin/ds/templates/img/dussmann_logo-w.svg",
  },
  {
    name: "Granite Construction",
    logo: "https://www.graniteconstruction.com/themes/custom/granite2019/public/images/logo.svg",
  },
  {
    name: "Innovation UAE",
    logo: "https://innovationuae.com/wp-content/uploads/2020/12/about-banner.jpg",
  },
];

function LogoRow({ items, reverse = false, speed = 40 }) {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-12 py-6"
        animate={{ x: reverse ? ["0%", "-100%"] : ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((client, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center min-w-[160px]"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 object-contain mb-3 drop-shadow-lg hover:scale-110 hover:drop-shadow-[0_0_15px_#3b82f6] transition-all duration-300"
            />
            <p className="text-sm md:text-base font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300 text-center">
              {client.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  const row1 = clients.slice(0, 5);
  const row2 = clients.slice(5, 9);
  const row3 = clients.slice(9, 13);
  const row4 = clients.slice(13, 17);

  return (
    <section
      id="clients"
      className="relative py-20"
      style={{
        background:
          "linear-gradient(135deg, #0f172a, #1e1b4b, #111827, #0f172a)",
        backgroundSize: "400% 400%",
      }}
    >
      {/* Animated BG Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">
          Our Clients & <span className="text-blue-400">Partners</span>
        </h2>

        <div className="space-y-8">
          <LogoRow items={row1} reverse={false} />
          <LogoRow items={row2} reverse={true} />
          <LogoRow items={row3} reverse={false} />
          <LogoRow items={row4} reverse={true} />
        </div>
      </div>

      {/* Edge Glow Effects */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </section>
  );
}
