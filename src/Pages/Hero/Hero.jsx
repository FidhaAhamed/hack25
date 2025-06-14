import { ArrowRightCircle } from 'lucide-react';
import DevfolioButton from '../../Components/DevfolioButton';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: "url('/Images/hero-bg.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20" />

      {/* Content with Padding */}
      <div className="relative z-10 flex flex-col h-full px-6 md:px-16 pt-40">
        {/* Logos */}
        <div className="mb-6">
          <img src="/Images/ieee logo.png" alt="IEEE and 35 Years Logos" className="h-10" />
        </div>

        <div className="mb-2">
          <img src="/Images/hack logo.png" alt=">.hack();_" className="h-12 md:h-20" />
        </div>
      </div>

      <div className="absolute bottom-16 w-full flex justify-center z-10">
        <DevfolioButton />
      </div>
    </section>
  );
}
