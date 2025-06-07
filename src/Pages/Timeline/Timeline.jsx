import React from "react";
import Heading from '../../Components/Heading/Heading';
import circuit from '../../assets/circuit.svg';

const Timeline = () => {
  return (
    <section
  id="timeline"
  style={{ backgroundColor: '#101111' }}
  className="py-20 px-4 text-white relative"
>

      <Heading heading="timeline" />

      <div className="max-w-5xl mx-auto border border-[#A50C20] rounded-xl p-10 relative">
        
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 h-[calc(100%-5rem)] w-0.5 bg-[#A50C20] z-0" />

     

        {/* Timeline Events */}
        <div className="relative z-10 space-y-16">
         {/* 2. July 4 */}
<div className="flex items-start justify-between text-sm md:text-base">
  <div className="w-1/2 text-right pr-6">
    <h3 className="font-bold font-csclairemonodrawn text-2xl md:text-2xl">May 1</h3>
    <p className="font-csclairemonodrawn text-lg md:text-xl font-light">
      Website Live and Theme Release
    </p>
  </div>
   <div className="relative flex items-center justify-center w-8 h-8">
  <div className="absolute w-5 h-5 rounded-full border border-[#A50C20]"></div>
  <div className="w-4 h-4 bg-[#A50C20] rounded-full border-2 border-black z-10"></div>
</div>
  <div className="w-1/2" />
</div>

         {/* 2. July 4 */}
<div className="flex items-start justify-between text-sm md:text-base">
  <div className="w-1/2" />
  <div className="relative flex items-center justify-center w-8 h-8">
  <div className="absolute w-5 h-5 rounded-full border border-[#A50C20]"></div>
  <div className="w-4 h-4 bg-[#A50C20] rounded-full border-2 border-black z-10"></div>
</div>

  
  <div className="w-1/2 text-left pl-6">
    <h3 className="font-bold font-csclairemonodrawn text-2xl md:text-2xl">July 4</h3>
    <p className="font-csclairemonodrawn text-lg md:text-xl font-light">
      Registration Live
    </p>
  </div>
</div>



          {/* 3. August 4 */}
  <div className="flex items-start justify-between text-sm md:text-base">
  <div className="w-1/2 text-right pr-6">
    <h3 className="font-bold font-csclairemonodrawn text-2xl md:text-2xl">August 4</h3>
    <p className="font-csclairemonodrawn text-lg md:text-xl font-light">
      Abstraction submission Deadline
    </p>
  </div>
  <div className="relative flex items-center justify-center w-8 h-8">
  <div className="absolute w-5 h-5 rounded-full border border-[#A50C20]"></div>
  <div className="w-4 h-4 bg-[#A50C20] rounded-full border-2 border-black z-10"></div>
</div>
  <div className="w-1/2" />
</div>

          {/* 4. August 15 */}
          <div className="flex items-start justify-between text-sm md:text-base">
  <div className="w-1/2" />
  
   <div className="relative flex items-center justify-center w-8 h-8">
  <div className="absolute w-5 h-5 rounded-full border border-[#A50C20]"></div>
  <div className="w-4 h-4 bg-[#A50C20] rounded-full border-2 border-black z-10"></div>
</div>
  <div className="w-1/2 text-left pl-6">
    <h3 className="font-bold font-csclairemonodrawn text-2xl md:text-2xl">August 15</h3>
    <p className="font-csclairemonodrawn text-lg md:text-xl font-light">
      Releasing Shortlisted Teams
    </p>
  </div>
</div>

          {/* 5. August 22 */}
          <div className="flex items-start justify-between text-sm md:text-base">

  <div className="w-1/2 text-right pr-6">
    <h3 className="font-bold font-csclairemonodrawn text-2xl md:text-2xl">August 22</h3>
    <p className="font-csclairemonodrawn text-lg md:text-xl font-light">
      Offline Hackathon
    </p>
  </div>
   <div className="relative flex items-center justify-center w-8 h-8">
  <div className="absolute w-5 h-5 rounded-full border border-[#A50C20]"></div>
  <div className="w-4 h-4 bg-[#A50C20] rounded-full border-2 border-black z-10"></div>
</div>
  <div className="w-1/2" />
</div>
          
        </div>
      </div>
      <div className="absolute bottom-[-30vh] sm:bottom-[-45vh] md:bottom-[-55vh] left-1/2 transform -translate-x-1/2 w-[110vw] sm:w-[95vw] md:w-[75vw] opacity-30 z-0 pointer-events-none">
              <img
                src={circuit}
                alt="Circuit Background"
                className="w-full h-auto object-cover rotate-180"
              />
            </div>
    </section>
  );
};

export default Timeline;
