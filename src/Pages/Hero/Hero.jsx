import { ArrowRightCircle } from 'lucide-react';


export default function Hero() {
  return (
    <section
    id='home'
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-6 md:px-16 pt-40">
        {/* Logos */}
        <div className="mb-6">
          <img src="/Images/ieee logo.png" alt="IEEE and 35 Years Logos" className="h-10" />
        </div>

        <div className="mb-2">
          <img src="/Images/hack logo.png" alt=">.hack();_" className="h-12 md:h-20" />
        </div>


        {/* Register Now Button */}
        <div className="absolute bottom-16 w-full flex justify-center z-10">
          <button className="group flex items-center gap-3 text-white text-2xl md:text-3xl font-nebula tracking-wide hover:text-[#7C0918] transition-all">
            REGISTER NOW
            <ArrowRightCircle strokeWidth={1} className="w-8 h-8 text-white group-hover:text-[#A50C20] transition" />
          </button>
        </div>

      </div>
    </section>
  );
}
