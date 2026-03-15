import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import galleryNight from "@/assets/gallery-night.webp";
import decorBrushBlue from "@/assets/decor-brush-blue.jpeg";
import decorBrushGreen from "@/assets/decor-brush-green.jpeg";

const EVENT_DATE = new Date("2026-05-15T11:00:00");

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const diff = EVENT_DATE.getTime() - Date.now();

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={galleryNight}
          alt=""
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-festival" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Decorative assets */}
      <motion.img
        src={decorBrushBlue}
        alt=""
        className="absolute -top-8 -right-8 w-40 md:w-56 opacity-15 pointer-events-none rotate-12"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.img
        src={decorBrushGreen}
        alt=""
        className="absolute -bottom-8 -left-6 w-28 md:w-40 opacity-15 pointer-events-none -rotate-45"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="absolute top-20 right-10 w-28 h-28 paint-blob bg-lime/10 animate-float pointer-events-none" />
      <div className="absolute bottom-32 left-8 w-20 h-20 paint-blob bg-purple/15 animate-float-slow pointer-events-none" />

      {/* Soft glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-purple/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-28 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-flex items-center rounded-full border border-lime/30 bg-lime/15 px-5 py-2 mb-6"
          >
            <span className="font-body text-lime text-xs sm:text-sm tracking-[0.18em] uppercase">
              May 15, 2026 • 11AM–3PM • Portmore, Jamaica
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-wide mb-5"
          >
            <span className="text-foreground">PORTMORE</span>
            <br />
            <span className="text-gradient-festival">ART</span>{" "}
            <span className="text-foreground">CONNECT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="font-heading text-lg md:text-2xl text-foreground/80 italic max-w-2xl mx-auto mb-4"
          >
            Where Caribbean creativity comes alive
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-sm md:text-base text-foreground/70 max-w-2xl mx-auto mb-10"
          >
            Live Art • Workshops • Music • Vendors • Community
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mb-10"
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-foreground/60 mb-4">
              Event starts in
            </p>

            <div className="flex justify-center gap-3 md:gap-5 flex-wrap">
              {[
                { val: timeLeft.days, label: "Days" },
                { val: timeLeft.hours, label: "Hours" },
                { val: timeLeft.minutes, label: "Minutes" },
                { val: timeLeft.seconds, label: "Seconds" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="w-[78px] md:w-[96px] rounded-2xl border border-white/10 bg-card/45 backdrop-blur-md px-3 py-4 text-center shadow-lg"
                >
                  <div className="font-display text-3xl md:text-4xl text-lime leading-none">
                    {String(t.val).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.18em] mt-2">
                    {t.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#register"
              className="bg-gradient-lime text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity text-center"
            >
              Get Tickets
            </a>

            <a
              href="#apply"
              className="border border-lime/40 text-lime px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime/10 transition-colors text-center"
            >
              Apply as Artist/Vendor
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-lime rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;