const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md rounded-full px-6 py-2 flex gap-4 shadow-lg">
      <button
        onClick={() => handleScroll("home")}
        className="text-white font-nebula hover:bg-[#A50C20] rounded-full px-4 py-2 transition"
      >
        Home
      </button>
      <button
        onClick={() => handleScroll("about")}
        className="text-white font-nebula hover:bg-[#A50C20] rounded-full px-4 py-2 transition"
      >
        About
      </button>
      <button
        onClick={() => handleScroll("timeline")}
        className="text-white font-nebula hover:bg-[#A50C20] rounded-full px-4 py-2 transition"
      >
        Timeline
      </button>
      <button

        onClick={() => handleScroll("tracks")}
        className="text-white font-nebula hover:bg-red-700 rounded-full px-4 py-2 transition"

      >
        Tracks
      </button>
      <button
        onClick={() => handleScroll("sponsors")}
        className="text-white font-nebula hover:bg-[#A50C20] rounded-full px-4 py-2 transition"
      >
        Sponsors
      </button>
    </div>
  );
};

export default Navbar;
