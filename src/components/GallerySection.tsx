import brushStrokeImg from "@/assets/brush-blue.jpeg";
import paintBrushImg from "@/assets/brush-green.jpeg";
import clipboardImg from "@/assets/clipboard.jpeg";

const ScheduleSection = () => {
  return (
    <section
      id="schedule"
      className="relative min-h-screen w-full overflow-hidden bg-[#6b35c9]"
    >
      <div className="relative flex min-h-screen items-center justify-center px-4 py-16 md:px-8">
        <div className="relative w-full max-w-[1500px]">
          {/* Top board */}
          <div className="relative z-10 mx-auto w-full max-w-[1450px] border-[6px] border-[#e6d277] bg-black shadow-xl md:border-[8px]">
            <div
              className="grid grid-cols-2"
              style={{
                background:
                  "linear-gradient(90deg, #102337 0%, #12131a 50%, #341545 100%)",
              }}
            >
              {/* Left side */}
              <div className="grid grid-cols-2 border-r-[4px] border-[#e6d277] md:border-r-[6px]">
                <div className="flex flex-col items-center justify-center border-r-[4px] border-[#e6d277] px-3 py-8 md:border-r-[6px] md:px-8 md:py-14">
                  <h3 className="text-4xl font-black uppercase leading-none text-[#f3dc7a] sm:text-5xl md:text-7xl lg:text-8xl">
                    FRI
                  </h3>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[#d6d2da] sm:text-lg md:text-2xl">
                    DAY
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center px-3 py-8 md:px-8 md:py-14">
                  <h3 className="text-4xl font-black leading-none text-[#f3dc7a] sm:text-5xl md:text-7xl lg:text-8xl">
                    15
                  </h3>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[#d6d2da] sm:text-lg md:text-2xl">
                    MAY
                  </p>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.16em] text-[#d6d2da] sm:text-lg md:text-2xl">
                    2026
                  </p>
                </div>
              </div>

              {/* Right side */}
              <div className="grid grid-cols-2">
                <div className="flex flex-col items-center justify-center border-r-[4px] border-[#e6d277] px-3 py-8 md:border-r-[6px] md:px-8 md:py-14">
                  <h3 className="text-4xl font-black leading-none text-[#f3dc7a] sm:text-5xl md:text-7xl lg:text-8xl">
                    11AM
                  </h3>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[#d6d2da] sm:text-lg md:text-2xl">
                    START
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center px-3 py-8 md:px-8 md:py-14">
                  <h3 className="text-4xl font-black leading-none text-[#f3dc7a] sm:text-5xl md:text-7xl lg:text-8xl">
                    3PM
                  </h3>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[#d6d2da] sm:text-lg md:text-2xl">
                    END
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left blue brush */}
          <img
            src={brushStrokeImg}
            alt=""
            className="pointer-events-none absolute left-[-40px] top-[36%] z-0 hidden w-[240px] rotate-[35deg] bg-transparent md:block lg:w-[330px]"
          />

          {/* Clipboard */}
          <div className="relative z-20 mx-auto mt-[-95px] flex justify-center md:mt-[-120px]">
            <div className="relative w-[320px] rotate-[-6deg] sm:w-[420px] md:w-[520px] lg:w-[620px]">
              <img
                src={clipboardImg}
                alt="Admission Free"
                className="w-full object-contain"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="mt-14 text-4xl text-[#525252] sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{
                    fontFamily: '"Comic Sans MS", "Bradley Hand", cursive',
                  }}
                >
                  ADM: Free
                </span>
              </div>
            </div>
          </div>

          {/* Right green brush */}
          <img
            src={paintBrushImg}
            alt=""
            className="pointer-events-none absolute bottom-[-30px] right-[-30px] z-10 w-[220px] rotate-[140deg] bg-transparent sm:w-[280px] md:w-[360px] lg:w-[430px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;