import { MapPin } from "lucide-react";
import cityBg from "@/assets/location.jpeg";

const LocationSection = () => {
  return (
    <section id="location" className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={cityBg}
          alt="Portmore community"
          className="w-full h-full object-cover"
        />

        {/* Yellow overlay */}
        <div className="absolute inset-0 bg-[#d8c86a]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16 text-center">

        <div className="max-w-5xl">

          {/* Canva message */}
          <h2 className="text-black font-black uppercase leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            DESIGNED TO HIGHLIGHT LOCAL TALENT,
            <br />
            BUILD COMMUNITY ENGAGEMENT,
            <br />
            AND CELEBRATE THE POWER OF
            <br />
            CREATIVITY WITHIN PORTMORE.
          </h2>

          {/* Location icon */}
          <div className="mt-10 flex justify-center">
            <MapPin
              className="w-20 h-20 text-red-500 drop-shadow-lg"
              strokeWidth={2.5}
            />
          </div>

          {/* Location text */}
          <p className="mt-8 text-black font-black uppercase leading-[1.05] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            INDEPENDENCE CITY COMMUNITY CENTRE,
            <br />
            PORTMORE, ST. CATHERINE
          </p>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;