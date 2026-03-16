import exhibitionBg from "@/assets/festival-park.jpeg";

const ExhibitionSection = () => {
  return (
    <section
      id="exhibition"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background image */}
      <img
        src={exhibitionBg}
        alt="Outdoor Art Exhibition"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Green overlay */}
      <div className="absolute inset-0 bg-[#b7cc43]/75 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16 text-center">
        <div className="max-w-6xl">
          <h2 className="text-black font-black uppercase leading-[1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            OUTDOOR ART EXHIBITION
          </h2>

          <p className="mt-12 text-black font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            FEATURING
          </p>

          <p
            className="mt-10 font-black uppercase leading-[1.08] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black"
            style={{
              WebkitTextStroke: "2px white",
            }}
          >
            TRAVIS ARTS , JAVEER ARTS , LOCKSLEY
            <br />
            WATSON, OMAR JOHNSON , DWAYNE
            <br />
            JOSEPHS &amp; MORE
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExhibitionSection;