import Navbar from "./Navbar";

export default function HeroWithNavbar() {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
          alt="Dubai Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <Navbar />

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to <span className="text-blue-400">KonnectHRC</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Your trusted partner for recruitment in Dubai, Abu Dhabi & GCC.
          </p>
        </div>
      </div>
    </section>
  );
}
