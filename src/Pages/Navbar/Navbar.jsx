const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 bg-black/60 rounded-full px-6 py-2 flex gap-4">
      <button
        onClick={() => handleScroll("home")}
        className="text-white font-nebula hover:bg-red-700 rounded-full px-4 py-2 transition"
      >
        Home
      </button>
      <button
        onClick={() => handleScroll("about")}
        className="text-white font-nebula hover:bg-red-700 rounded-full px-4 py-2 transition"
      >
        About
      </button>
      <button
        onClick={() => handleScroll("timeline")}
        className="text-white font-nebula hover:bg-red-700 rounded-full px-4 py-2 transition"
      >
        Timeline
      </button>
      <button
        onClick={() => handleScroll("sessions")}
        className="text-white font-nebula hover:bg-red-700 rounded-full px-4 py-2 transition"
      >
        Sessions
      </button>
      <button
        onClick={() => handleScroll("sponsors")}
        className="text-white font-nebula hover:bg-red-700 rounded-full px-4 py-2 transition"
      >
        Sponsors
      </button>
    </div>
  );
};

export default Navbar;
