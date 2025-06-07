import React from "react";
import Heading from "../../Components/Heading/Heading";
import circuit from "../../assets/circuit.svg";

const events = [
  { date: "May 1", title: "Website Live and Theme Release" },
  { date: "July 4", title: "Registration Live" },
  { date: "August 4", title: "Abstraction submission Deadline" },
  { date: "August 15", title: "Releasing Shortlisted Teams" },
  { date: "August 22", title: "Offline Hackathon" },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-20 px-4 text-white bg-[#101111]"
    >
      <Heading heading="timeline" />

      <div className="max-w-5xl mx-auto border border-[#A50C20] rounded-xl p-10 relative z-10">
        {/* Vertical line */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 h-[calc(100%-5rem)] w-0.5 bg-[#A50C20] z-0" />

        <div className="grid grid-cols-3 gap-y-16 items-center relative z-10">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <React.Fragment key={index}>
                {/* Left column */}
                <div className={`px-4 ${isLeft ? "text-right" : ""}`}>
                  {isLeft && (
                    <>
                      <h3 className="font-bold font-csclairemonodrawn text-lg md:text-2xl">
                        {event.date}
                      </h3>
                      <p className="font-csclairemonodrawn text-base md:text-xl font-light">
                        {event.title}
                      </p>
                    </>
                  )}
                </div>

                {/* Center Dot */}
                <div className="flex items-center justify-center">
                  <div className="relative w-8 h-8">
                    <div className="absolute w-5 h-5 rounded-full border border-[#A50C20] top-1.5 left-1.5" />
                    <div className="w-4 h-4 bg-[#A50C20] rounded-full border-2 border-black absolute top-2 left-2 z-10" />
                  </div>
                </div>

                {/* Right column */}
                <div className={`px-4 ${!isLeft ? "text-left" : ""}`}>
                  {!isLeft && (
                    <>
                      <h3 className="font-bold font-csclairemonodrawn text-lg md:text-2xl">
                        {event.date}
                      </h3>
                      <p className="font-csclairemonodrawn text-base md:text-xl font-light">
                        {event.title}
                      </p>
                    </>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Circuit background image for md+ only */}
      <div className="hidden md:block absolute bottom-[-55vh] left-1/2 transform -translate-x-1/2 w-[75vw] opacity-20 z-0 pointer-events-none">
        <img
          src={circuit}
          alt="Circuit Background"
          className="w-full h-auto object-cover rotate-180"
        />
      </div>
    </section>
  );
}
