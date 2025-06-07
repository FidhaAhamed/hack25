import { useState } from "react";
import { Menu, X } from "lucide-react"; // Or any icon lib you use

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu after click (mobile)
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Timeline", id: "timeline" },
    { label: "Prize Pool", id: "prizepool"},
    { label: "Tracks", id: "tracks" },
    { label: "Sponsors", id: "sponsors" },
    { label: "FAQ", id: "faq"},
  ];

  return (
<<<<<<< HEAD
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/60 backdrop-blur-md rounded-full px-6 py-2 shadow-lg md:flex hidden gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="text-white font-nebula hover:bg-red-700 rounded-full px-4 py-2 transition"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button onClick={() => setIsOpen(true)} className="text-white">
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full bg-black z-50 p-6 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end mb-6">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 mt-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="text-white text-lg font-nebula hover:text-red-500"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
=======
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
>>>>>>> 99d66815176f706ce5c3cfde03d76fbdd85730dc
  );
};

export default Navbar;
